// script.js
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    // Play button functionality
    playButton.addEventListener('click', () => {
        audio.play();
    });

    // Pause button functionality
    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    // Stop button functionality
    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Update the current time and duration displays
    audio.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Function to format time in MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
});
