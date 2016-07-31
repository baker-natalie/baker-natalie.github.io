/* Welcome! This is the third project for Udacity's Front-End Developer Nanodegree progrom. Create a frogger-style game using Object Oriented JavaScript and HTML5 Canvas. Students are provided with images and a game loop engine, and must build the game from there.

All external sources referenced in code comments are linked in the project README at https://github.com/baker-natalie/udacity-coursework/tree/master/arcade-clone-project */
// Canvas variables
// -Canvas Grid Unit Size
// -grid and movement layout by tile size based upon project by github user micyong
var canvasY = 83;
var canvasX = 101;
// -Grid Image Overlap
var canvasTopOverlay = 50;
var canvasBottomUnderlay = 20;
// -Player Movement Boundaries
var playerMoveYMin = 0 * canvasY + canvasTopOverlay;
var playerMoveYMax = 5 * canvasY - canvasBottomUnderlay;
var playerMoveXMin = 0;
var playerMoveXMax = 4 * canvasX;

// Player Contstants
// -Player Image
var playerSprite = 'images/char-boy.png';
// -Player Start Location
var startLocX = canvasX * 2;
var startLocY = canvasY * 5 - canvasBottomUnderlay;

// NPC Constants
// -NPC Image
var bug = 'images/enemy-bug.png'
    // -Speed Constants
var npcMinSpd = 150;
var npcMaxSpd = 500;
// -NPC Spawn (total number in play at any time)
var npcSpawn = 3;

// Returns a random integer between min (included) and max (excluded)
// Learn more about Math.random on Mozilla Develper Network!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Catalyst Super Class
var Catalyst = function(x, y, img) {
    this.x = x;
    this.y = y;
    this.sprite = img;
};

Catalyst.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Player Class
var Player = function(x, y) {
    Catalyst.call(this, x, y, playerSprite);
};

Player.prototype = Object.create(Catalyst.prototype);
Player.prototype.constructor = Player;
// -handleInput function modified to fit grid layout as originally created by github user micyong
Player.prototype.handleInput = function(keyCode) {
    if (keyCode == 'up' && this.y > playerMoveYMin) this.y = this.y - canvasY;
    else if (keyCode == 'down' && this.y < playerMoveYMax) this.y = this.y + canvasY;
    else if (keyCode == 'left' && this.x > playerMoveXMin) this.x = this.x - canvasX;
    else if (keyCode == 'right' && this.x < playerMoveXMax) this.x = this.x + canvasX;
};

Player.prototype.update = function() {
    // If player crosses the board this resets the game ("Win")
    if (this.y <= canvasTopOverlay) {
        this.x = startLocX;
        this.y = startLocY;
        this.sprite = playerSprite;
    }
};

// Enemy Class
var Enemy = function(x, y) {
    Catalyst.call(this, x, y, 'images/enemy-bug.png');

    // Sets a random speed for each enemy generated
    this.speed = getRandomInt(npcMinSpd, npcMaxSpd);
};

// Creates an Enemy object as a subclass of Catalyst
Enemy.prototype = Object.create(Catalyst.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.update = function(dt) {

    // Loops enemies to keep crossing the board
    if (this.x > canvasX * 5) {
        this.x = canvasX * -1;
        this.y = canvasY * getRandomInt(1, 4) - canvasBottomUnderlay;
        this.speed = getRandomInt(npcMinSpd, npcMaxSpd);
    }
    this.x = this.x + this.speed * dt;

    // Checks to see if player and enemy collide, resets game ('lose')
    // -based upon collision function from project by github user danceoval
    if (player.x >= this.x - 50 && player.x <= this.x + 50) {
        if (player.y >= this.y - 50 && player.y <= this.y + 50) {
            player.x = startLocX;
            player.y = startLocY;
        }
    }
};

// Game Initialization- calls the functions for Player and Enemy subclasses and instantiates them in the game
var player = new Player(startLocX, startLocY);

// -This function is based on the allEnemies function in the project by github user micyong
var allEnemies = [];
for (var i = 0; i < npcSpawn; i++)
    allEnemies.push(new Enemy(canvasX * -1, canvasY * getRandomInt(1, 4) - canvasBottomUnderlay));

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});