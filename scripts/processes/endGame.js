export const endGame = (app, message) => {
    const endText = new PIXI.Text(message, {
        fontFamily: "Arial",
        fontSize: 64,
        fill: "red",
        align: "center",
    });

    endText.x = app.screen.width / 2 - endText.width / 2;
    endText.y = app.screen.height / 2 - endText.height / 2;

    app.stage.addChild(endText);

    app.ticker.stop(); // Зупиняємо оновлення сцени
};