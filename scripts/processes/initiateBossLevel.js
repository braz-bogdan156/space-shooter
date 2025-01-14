export function initiateBossLevel(message, color) {
    let endMessage = new PIXI.Text(message, { fontFamily: 'Arial', fontSize: 36, fill: color, align: 'center' });
    endMessage.x = app.screen.width / 2 - endMessage.width / 2;
    endMessage.y = app.screen.height / 2 - endMessage.height / 2;
    app.stage.addChild(endMessage);

    if (message === "YOU WIN") {
        let nextLevelButton = new PIXI.Text("Next Level", { fontFamily: 'Arial', fontSize: 24, fill: 'blue', align: 'center' });
        nextLevelButton.x = app.screen.width / 2 - nextLevelButton.width / 2;
        nextLevelButton.y = endMessage.y + endMessage.height + 20;
        nextLevelButton.interactive = true;
        nextLevelButton.buttonMode = true;
        nextLevelButton.on('pointerdown', startBossLevel);
        app.stage.addChild(nextLevelButton);
    }
}
