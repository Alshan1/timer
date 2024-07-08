document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        document.getElementById('clock-time').textContent = new Date().toLocaleTimeString();
    }

    // Call updateTime immediately to set the initial time
    updateTime();

    setInterval(updateTime, 1000);

    window.showStopwatch = function() {
        switchView('Stopwatch', 'clock', 'stopwatch');
    };

    window.showClock = function() {
        switchView('Clock', 'stopwatch', 'clock');
    };

    function switchView(title, removeClass, addClass) {
        const removeClasses = removeClass.split(' ');
        removeClasses.forEach(className => {
            const element = document.querySelector('.' + className);
            if (element) {
                element.classList.remove('active');
            }
        });
        document.querySelector('.' + addClass).classList.add('active');
        document.querySelector('h1').textContent = title;
    }

    let stopwatchInterval;
    let stopwatchTime = 0;

    function updateStopwatch() {
        stopwatchTime += 10;
        document.getElementById('stopwatch-time').textContent = new Date(stopwatchTime).toISOString().substr(11, 11);
    }

    window.startStopwatch = function() {
        if (!stopwatchInterval) {
            stopwatchInterval = setInterval(updateStopwatch, 10);
            document.getElementById('start-stopwatch').textContent = 'Stop';
        } else {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
            document.getElementById('start-stopwatch').textContent = 'Start';
        }
    };

    window.resetStopwatch = function() {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        stopwatchTime = 0;
        document.getElementById('stopwatch-time').textContent = '00:00:00.00';
        document.getElementById('start-stopwatch').textContent = 'Start';
    };
});
