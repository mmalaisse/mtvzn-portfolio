/**
 * MTVZN PHOTOGRAPHY — AMBIENT HOUSE AUDIO GENERATOR
 * Generates a subtle, hypnotic 124 BPM deep house kick & atmospheric vinyl pad
 * using Web Audio API (Zero external assets, 100% lightweight & offline).
 */

class ClubAmbience {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.tempo = 124;
    this.intervalId = null;
    this.masterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // 124 BPM -> 1 beat every 60/124 = 0.483s
    const stepTime = (60 / this.tempo) * 1000;
    this.triggerKick();
    this.startSubPad();

    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.triggerKick();
      }
    }, stepTime);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.padOsc) {
      try {
        this.padOsc.stop();
        this.padOsc.disconnect();
      } catch (e) {}
      this.padOsc = null;
    }
  }

  triggerKick() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    // Sub Kick Synth
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.12);
    
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    
    osc.connect(gain);
    gain.connect(this.masterGain);
    
    osc.start(now);
    osc.stop(now + 0.3);
  }

  startSubPad() {
    if (!this.ctx || this.padOsc) return;
    const now = this.ctx.currentTime;
    
    this.padOsc = this.ctx.createOscillator();
    const padFilter = this.ctx.createBiquadFilter();
    const padGain = this.ctx.createGain();
    
    this.padOsc.type = 'sawtooth';
    this.padOsc.frequency.setValueAtTime(55, now); // A1 note
    
    padFilter.type = 'lowpass';
    padFilter.frequency.setValueAtTime(220, now);
    
    padGain.gain.setValueAtTime(0.05, now);
    
    this.padOsc.connect(padFilter);
    padFilter.connect(padGain);
    padGain.connect(this.masterGain);
    
    this.padOsc.start(now);
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
}

window.clubAmbience = new ClubAmbience();
