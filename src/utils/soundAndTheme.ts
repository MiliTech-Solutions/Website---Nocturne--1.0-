// Web Audio API ambient fireplace / vinyl crackle soundscape generator

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private noiseNode: AudioNode | null = null;
  private gainNode: GainNode | null = null;
  private lowPass: BiquadFilterNode | null = null;
  private initialized: boolean = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public initAutoPlay() {
    if (this.initialized) return;
    this.initialized = true;

    // Try starting immediately
    this.start();

    // Browser autoplay policy handler: ensure audio starts on very first interaction if initial start was suspended
    const startAudioOnInteraction = () => {
      if (!this.isPlaying || (this.ctx && this.ctx.state === 'suspended')) {
        this.start();
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', startAudioOnInteraction);
      window.removeEventListener('touchstart', startAudioOnInteraction);
      window.removeEventListener('scroll', startAudioOnInteraction);
      window.removeEventListener('keydown', startAudioOnInteraction);
    };

    window.addEventListener('click', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('scroll', startAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('keydown', startAudioOnInteraction, { once: true, passive: true });
  }

  public start() {
    try {
      if (this.isPlaying && this.ctx && this.ctx.state === 'running') {
        return;
      }

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      if (this.noiseNode) {
        this.isPlaying = true;
        return;
      }

      // Generate soft crackle noise buffer (pink noise + random fire pops)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        let pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        b6 = white * 0.115926;
        pink *= 0.11;

        // Add occasional warm ember pop
        if (Math.random() < 0.001) {
          pink += (Math.random() * 2 - 1) * 0.8;
        }
        output[i] = pink * 0.15;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Low pass filter for warm hearth resonance
      this.lowPass = this.ctx.createBiquadFilter();
      this.lowPass.type = 'lowpass';
      this.lowPass.frequency.setValueAtTime(450, this.ctx.currentTime);

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);

      whiteNoise.connect(this.lowPass);
      this.lowPass.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      whiteNoise.start(0);
      this.noiseNode = whiteNoise;
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    try {
      if (this.gainNode && this.ctx) {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
        setTimeout(() => {
          if (this.ctx) {
            this.ctx.close();
            this.ctx = null;
          }
          this.isPlaying = false;
        }, 350);
      } else {
        this.isPlaying = false;
      }
    } catch {
      this.isPlaying = false;
    }
  }
}

export const ambientSoundEngine = new AmbientAudioEngine();
