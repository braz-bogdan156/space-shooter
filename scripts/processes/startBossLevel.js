import {createBoss} from '../objects/boss.js';

export function startBossLevel(app) {
    const boss = createBoss(app);
    app.stage.addChild(boss);

    let bossHP = 4;
    const bossHPBar = new PIXI.Text(`Boss HP: ${bossHP}`, {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 'red'
    });
    bossHPBar.x = 20;
    bossHPBar.y = 20;
    app.stage.addChild(bossHPBar);

    app.ticker.add(() => {
        boss.x += (Math.random() > 0.5 ? 1 : -1) * 2;
        if (boss.x < 0) boss.x = 0;
        if (boss.x > app.screen.width - boss.width) boss.x = app.screen.width - boss.width;
    });

    let bossFireInterval = setInterval(() => {
        const bossBullet = new PIXI.Graphics();
        bossBullet.beginFill(0xff0000);
        bossBullet.drawCircle(0, 0, 10);
        bossBullet.endFill();
        bossBullet.x = boss.x + boss.width / 2;
        bossBullet.y = boss.y + boss.height;
        app.stage.addChild(bossBullet);

        app.ticker.add(() => {
            bossBullet.y += 5;
            if (bossBullet.y > app.screen.height) {
                app.stage.removeChild(bossBullet);
            }
        });
    }, 2000);
}