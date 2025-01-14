export function checkLevelCompletion() {
    if (asteroids.length === 0 && spaceship.bullets.length === 0 
        && asteroidData.spawnedAsteroids >= totalAsteroids) {
        clearLevel();
        startBossLevel(app);  
    }
}