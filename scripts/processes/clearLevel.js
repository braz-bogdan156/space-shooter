export function clearLevel() {
    // Видалити всі астероїди з екрану
    asteroids.forEach(asteroid => {
        app.stage.removeChild(asteroid);
    });
    asteroids = [];
}