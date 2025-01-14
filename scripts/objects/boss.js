export function createBoss(app) {
    const boss = new PIXI.Sprite(PIXI.Texture.from('assets/images/boss.png'));
    boss.width = 150;
    boss.height = 150;
    boss.x = app.screen.width / 2 - boss.width / 2;
    boss.y = 50;
    return boss;
}