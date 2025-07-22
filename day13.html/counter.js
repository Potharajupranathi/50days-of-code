let count = 0;
        const counterDisplay = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');

        function updateCounter() {
            counterDisplay.textContent = count;
        }

        incrementBtn.addEventListener('click',function () {
            count++;
            updateCounter();
        });

        decrementBtn.addEventListener('click', function() {
            if (count > 0) {
                count--;
                updateCounter();
            }
        });