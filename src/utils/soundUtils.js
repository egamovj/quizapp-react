const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playSound = (freq, type, duration, volume = 0.1) => {
    try {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {
        console.warn('Audio context failed to start:', e);
    }
};

export const sounds = {
    click: () => playSound(800, 'square', 0.1, 0.05),
    success: () => {
        playSound(440, 'triangle', 0.2, 0.1);
        setTimeout(() => playSound(880, 'triangle', 0.3, 0.1), 100);
    },
    error: () => {
        playSound(200, 'sawtooth', 0.2, 0.1);
        setTimeout(() => playSound(150, 'sawtooth', 0.3, 0.1), 100);
    },
    unlock: () => {
        playSound(523.25, 'sine', 0.1, 0.1);
        setTimeout(() => playSound(659.25, 'sine', 0.1, 0.1), 100);
        setTimeout(() => playSound(783.99, 'sine', 0.1, 0.1), 200);
        setTimeout(() => playSound(1046.50, 'sine', 0.4, 0.1), 300);
    },
    blip: () => playSound(1200, 'sine', 0.05, 0.03)
};
