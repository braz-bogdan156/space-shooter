export const startGameTimer = (app, duration, onEnd) => {
    let timeLeft = duration;

    const timerText = new PIXI.Text(`Time: ${timeLeft}`, {
        fontFamily: "Arial",
        fontSize: 32,
        fill: "white",
    });
    timerText.x = 10;
    timerText.y = 10;
    app.stage.addChild(timerText);

    const timerInterval = setInterval(() => {
        timeLeft--;
        timerText.text = `Time: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            onEnd();
        }
    }, 1000);
};