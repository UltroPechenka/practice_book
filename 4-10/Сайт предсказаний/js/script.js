
        let predictions = [
            { text: "Сегодня удачный день для творчества.", type: "good" },
            { text: "Будьте осторожны на дороге.", type: "bad" },
            { text: "Вас ждет приятное событие в ближайшем будущем.", type: "good" },
            { text: "Не рекомендуется принимать важные решения сегодня.", type: "bad" },

        ];

        let predictionTimer;
        let predictionIndex;

        function startPrediction() {
            let timerElement = document.getElementById('timer');
            let textElement = document.getElementById('text');
            let startButton = document.getElementById('start');
            let stopButton = document.getElementById('stop');

            startButton.classList.remove('active');
            stopButton.classList.add('active');
            timerElement.textContent = "0";

            predictionTimer = setInterval(() => {
                timerElement.textContent = parseInt(timerElement.textContent) + 1;
            }, 100);


            predictionIndex = Math.floor(Math.random() * predictions.length);
            textElement.textContent = predictions[predictionIndex].text;
        }

        function stopPrediction() {
            let timerElement = document.getElementById('timer');
            let textElement = document.getElementById('text');
            let stopButton = document.getElementById('stop');

            clearInterval(predictionTimer);
            stopButton.classList.remove('active');
            timerElement.textContent = "?";
            textElement.textContent = predictions[predictionIndex].telet
            let predictionType = predictions[predictionIndex].type;
            textElement.classList.add(predictionType);
        }