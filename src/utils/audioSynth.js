/**
 * Peaceful Ambient Sound Generator using Web Audio API
 * Plays gentle, soothing ambient harmonic chord pads and wind chimes.
 * Calming, therapeutic, and zero external asset dependencies.
 */

class AmbientSoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.oscillators = [];
    this.chimeInterval = null;
    this.volume = 0.25;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();

      // Master gain for peaceful volume control
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);

      // Lowpass filter for warm, soft, muffled maternal lullaby feel
      this.filter = this.audioCtx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);
      this.filter.Q.setValueAtTime(1.5, this.audioCtx.currentTime);

      this.masterGain.connect(this.filter);
      this.filter.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Soft pentatonic soothing frequencies (F3, A3, C4, E4, G4 - peaceful Fmaj9 chord)
  start() {
    this.init();
    if (this.isPlaying) return;

    const chordFrequencies = [174.61, 220.00, 261.63, 329.63, 392.00, 523.25];
    const now = this.audioCtx.currentTime;

    // Fade in master gain gently over 3 seconds
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(this.volume, now + 3);

    this.oscillators = chordFrequencies.map((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      // Soft sine waves with subtle gentle detuning for lush, warm chorus texture
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime((i % 2 === 0 ? 3 : -3) * (i + 1), now);

      // LFO for slow breathing amplitude modulation
      const lfo = this.audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.12 + i * 0.03, now); // ~8-10 seconds breathing cycle
      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.setValueAtTime(0.06, now);
      lfo.connect(lfoGain.gain);

      gain.gain.setValueAtTime(0.08 / chordFrequencies.length, now);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      lfo.start(now);

      return { osc, lfo, gain };
    });

    // Add random soft chime notes (like gentle wind chime or lullaby box)
    this.startGentleChimes();
    this.isPlaying = true;
  }

  startGentleChimes() {
    const chimePitches = [523.25, 659.25, 783.99, 880.00, 1046.50]; // C5, E5, G5, A5, C6
    
    this.chimeInterval = setInterval(() => {
      if (!this.isPlaying || !this.audioCtx) return;
      
      // Random gentle bell chime every 4-8 seconds
      const freq = chimePitches[Math.floor(Math.random() * chimePitches.length)];
      const now = this.audioCtx.currentTime;

      const chimeOsc = this.audioCtx.createOscillator();
      const chimeGain = this.audioCtx.createGain();

      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(freq, now);

      chimeGain.gain.setValueAtTime(0.001, now);
      chimeGain.gain.exponentialRampToValueAtTime(0.025, now + 0.1);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.masterGain);

      chimeOsc.start(now);
      chimeOsc.stop(now + 3);
    }, 4500);
  }

  stop() {
    if (!this.isPlaying || !this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    // Fade out gently over 2 seconds
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2);

    setTimeout(() => {
      this.oscillators.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch (_) {}
      });
      this.oscillators = [];
      clearInterval(this.chimeInterval);
      this.isPlaying = false;
    }, 2100);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.isPlaying && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
  }
}

export const ambientSound = new AmbientSoundEngine();
