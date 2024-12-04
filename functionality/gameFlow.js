class GameFlow {
    constructor(lvl) {
        this.roadCars = [];
        this.startGame(lvl);
    }

    startGame(lvl) {

        fetch('./data/levels.json')
            .then(response => response.json())
            .then(data => {
                this.levels = data.levels;
                if (lvl >= this.levels.length) {
                    localStorage.setItem('lvl', 0);
                    lvl = localStorage.getItem('lvl');
                }
                this.startLevel(lvl);
            });
    }

    startLevel(lvl) {
        // stop theme song
        stopTheme();
        //check difficulty

        if (localStorage.getItem('dificulty') == 'easy') {
            this.difficulty = 600;
        }
        else if (localStorage.getItem('dificulty') == 'medium') {
            this.difficulty = 400;
        }
        else {
            this.difficulty = 200;
        }

        const playerCar = document.createElement('player-car');
        document.getElementById('track').appendChild(playerCar);
        this.roadCars.push(playerCar);

        // first 6 roads
        var road_index;
        for (road_index = 0; road_index < 6; road_index++) {
            this.addRoad(this.levels[lvl], road_index);
        }
        //Countdown
        var countdown = 3;
        let count = setInterval(() => {
            if (countdown == 3) {
                playCount();
            }
            document.getElementById('countdown-text').innerHTML = countdown;
            document.getElementById('countdown').style.visibility = 'visible';
            if (countdown == 0) {
                document.getElementById('countdown-text').innerHTML = 'GO!';
            }
            if (countdown == -1) {
                document.getElementById('countdown').style.visibility = 'hidden';
                // start game song
                playGame();

                const eventkey = (e) => {
                    playerCar.handleKeyDown(e);
                    if (this.checkCollision()) {
                        clearInterval(intervalId);
                        stopGame();
                        window.removeEventListener('keydown', eventkey);
                        window.removeEventListener('mousemove', eventmouse);
                        window.removeEventListener('deviceorientation', eventgyro);
                        this.lost();
                    }
                };

                const eventmouse = (e) => {
                    playerCar.handleMouseMovement(e);
                    if (this.checkCollision()) {
                        clearInterval(intervalId);
                        stopGame();
                        window.removeEventListener('keydown', eventkey);
                        window.removeEventListener('mousemove', eventmouse);
                        window.removeEventListener('deviceorientation', eventgyro);
                        this.lost();
                    }
                };

                const eventgyro = (e) => {
                    setTimeout(() => {
                        playerCar.handleGyro(e);
                        if (this.checkCollision()) {
                            clearInterval(intervalId);
                            stopGame();
                            window.removeEventListener('keydown', eventkey);
                            window.removeEventListener('mousemove', eventmouse);
                            window.removeEventListener('deviceorientation', eventgyro);
                            this.lost();
                        }
                    }, 100);
                };

                // Keyboard control
                if (localStorage.getItem('control') == 'keyboard') {
                    window.addEventListener('keydown', eventkey);
                }

                // Mouse movement control
                if (localStorage.getItem('control') == 'mouse' || localStorage.getItem('control') == 'tap') {
                    window.addEventListener('mousemove', eventmouse);
                }

                // Gyro control
                if (localStorage.getItem('control') == 'gyro') {
                    window.addEventListener('deviceorientation', eventgyro);
                }


                let intervalId = setInterval(() => {
                    this.addRoad(this.levels[lvl], road_index);
                    this.removeLastRoadCar();

                    if (this.checkCollision()) {
                        clearInterval(intervalId);
                        stopGame();
                        window.removeEventListener('keydown', eventkey);
                        window.removeEventListener('mousemove', eventmouse);
                        window.removeEventListener('deviceorientation', eventgyro);
                        this.lost();
                    }

                    road_index++;

                    if (road_index === this.levels[lvl].rows.length) {
                        clearInterval(intervalId);
                        stopGame();
                        window.removeEventListener('keydown', eventkey);
                        window.removeEventListener('mousemove', eventmouse);
                        window.removeEventListener('deviceorientation', eventgyro);
                        this.win();
                    }
                }, this.difficulty);
                clearInterval(count);
            }
            countdown--;
        }, 1000);
    }

    win() {
        this.clearTrack();
        playWin();
        this.showNextLevel();
        if (localStorage.getItem('lvl') == this.levels.length - 1 && localStorage.getItem('playedall') != 'true') {
            document.getElementById('credits').style.visibility = 'visible';
            localStorage.setItem('playedall', 'true');
        }
        else {
            document.getElementById('win').style.visibility = 'visible';
        }
    }

    showNextLevel() {
        if (parseInt(localStorage.getItem('lvl')) + 1 < this.levels.length) {
            document.getElementById('level' + (parseInt(localStorage.getItem('lvl')) + 2)).style.backgroundColor = '#87cc76';
            document.getElementById('level' + (parseInt(localStorage.getItem('lvl')) + 2)).style.color = 'black';
            document.getElementById('level' + (parseInt(localStorage.getItem('lvl')) + 2)).innerHTML = parseInt(localStorage.getItem('lvl')) + 2;
            document.getElementById('level' + (parseInt(localStorage.getItem('lvl')) + 2)).addEventListener('click', () => {
                document.getElementById('levels').style.visibility = 'hidden';
                localStorage.setItem('lvl', parseInt(localStorage.getItem('lvl')) + 1);
                new GameFlow(localStorage.getItem('lvl'));
            });
            localStorage.setItem('level' + parseInt(localStorage.getItem('lvl')), 'true');
        }
    }

    lost() {
        this.clearTrack();
        playLost();
        document.getElementById('lost').style.visibility = 'visible';
    }

    clearTrack() {
        this.roadCars.forEach(car => car.remove());
        this.roadCars = [];
    }



    addRoad(level, i) {
        var track = document.getElementById('track');

        switch (level.rows[i].type) {
            case 'null':
                var road = document.createElement('game-road');
                break;
            case 'start':
                var road = document.createElement('road-start');
                break;
            case 'road-car':
                var road = document.createElement('road-car');
                road.setAttribute('lane', level.rows[i].lane);
                road.laneChange(level.rows[i].lane);
                break;
            case 'road-bush':
                var road = document.createElement('road-bush');
                road.setAttribute('lane', level.rows[i].lane);
                road.laneChange(level.rows[i].lane);
                break;
            case 'road-mix':
                var road = document.createElement('road-mix');
                road.setAttribute('lane', level.rows[i].lane);
                road.laneChange(level.rows[i].lane);
                break;
        }
        track.prepend(road);
        this.roadCars.unshift(road);
    }

    removeLastRoadCar() {
        const lastCar = this.roadCars[this.roadCars.length - 1];

        if (lastCar && lastCar.tagName !== 'PLAYER-CAR') {
            lastCar.remove();
            this.roadCars.pop();
        }
        else {
            const secondLastCar = this.roadCars[this.roadCars.length - 2];
            if (secondLastCar) {
                secondLastCar.remove();
                this.roadCars.splice(-2, 1);
            }
        }
    }

    checkCollision() {
        const playerCar = document.querySelector('player-car');
        const rowContent = this.roadCars[6 - playerCar.row];

        if (rowContent && (rowContent.tagName === 'ROAD-CAR' || rowContent.tagName === 'ROAD-BUSH' || rowContent.tagName === 'ROAD-MIX')) {
            for (var i = 0; i < rowContent.lane.length; i++) {
                if (playerCar.lane === rowContent.lane[i]) {
                    return true;
                }
            }
        }
        return false;
    }

}

var themeSong = new Audio('./sound/theme.mp3');
var winSound = new Audio('./sound/win.mp3');
var lostSound = new Audio('./sound/lost.mp3');
var gameSound = new Audio('./sound/game.mp3');
var countSound = new Audio('./sound/count.mp3');


if (!localStorage.getItem('lvl')) {
    localStorage.setItem('lvl', 0);
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('title').style.visibility = 'hidden';
    new GameFlow(localStorage.getItem('lvl'));
});

document.getElementById('next').addEventListener('click', () => {
    document.getElementById('win').style.visibility = 'hidden';
    localStorage.setItem('lvl', parseInt(localStorage.getItem('lvl')) + 1);
    new GameFlow(localStorage.getItem('lvl'));
});

document.getElementById('settingsbut').addEventListener('click', () => {
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('settings').style.visibility = 'visible';
});

document.getElementById('back').addEventListener('click', () => {
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('settings').style.visibility = 'hidden';
});

document.getElementById('back2').addEventListener('click', () => {
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('levels').style.visibility = 'hidden';
});

document.getElementById('restart').addEventListener('click', () => {
    document.getElementById('win').style.visibility = 'hidden';
    new GameFlow(localStorage.getItem('lvl'));
});

document.getElementById('restart2').addEventListener('click', () => {
    document.getElementById('lost').style.visibility = 'hidden';
    new GameFlow(localStorage.getItem('lvl'));
});

document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('win').style.visibility = 'hidden';
    document.getElementById('title').style.visibility = 'visible';
    playTheme();
});

document.getElementById('menu2').addEventListener('click', () => {
    document.getElementById('lost').style.visibility = 'hidden';
    document.getElementById('title').style.visibility = 'visible';
    playTheme();
});

document.getElementById('menu3').addEventListener('click', () => {
    document.getElementById('credits').style.visibility = 'hidden';
    document.getElementById('title').style.visibility = 'visible';
    playTheme();
});

document.getElementById('levelsbut').addEventListener('click', () => {
    document.getElementById('title').style.visibility = 'hidden';
    document.getElementById('levels').style.visibility = 'visible';
});

document.getElementById('diffbut').addEventListener('click', () => {
    if (localStorage.getItem('dificulty') == 'easy') {
        localStorage.setItem('dificulty', 'medium');
        document.getElementById('difftext').innerHTML = 'MEDIUM';
    }
    else if (localStorage.getItem('dificulty') == 'medium') {
        localStorage.setItem('dificulty', 'hard');
        document.getElementById('difftext').innerHTML = 'HARD';
    }
    else {
        localStorage.setItem('dificulty', 'easy');
        document.getElementById('difftext').innerHTML = 'EASY';
    }
});

document.getElementById('soundbut').addEventListener('click', () => {
    if (localStorage.getItem('sound') == 'on') {
        localStorage.setItem('sound', 'off');
        document.getElementById('soundtext').innerHTML = 'OFF';
        stopTheme();
    }
    else {
        localStorage.setItem('sound', 'on');
        document.getElementById('soundtext').innerHTML = 'ON';
        playTheme();
    }
});

document.getElementById('controlbut').addEventListener('click', () => {
    if (localStorage.getItem('control') == 'keyboard') {
        localStorage.setItem('control', 'mouse');
        document.getElementById('controltext').innerHTML = 'MOUSE';
        document.getElementById('controlhelp').innerHTML = 'Use your mouse to move the car';
    }
    else if (localStorage.getItem('control') == 'mouse') {
        localStorage.setItem('control', 'keyboard');
        document.getElementById('controltext').innerHTML = 'KEYBOARD';
        document.getElementById('controlhelp').innerHTML = 'Use arrow keys or WASD to move the car';
    }
    else if (localStorage.getItem('control') == 'gyro') {
        localStorage.setItem('control', 'tap');
        document.getElementById('controltext').innerHTML = 'TOUCH';
        document.getElementById('controlhelp').innerHTML = 'Tap on the lane to move the car';
    }
    else if (localStorage.getItem('control') == 'tap') {
        localStorage.setItem('control', 'gyro');
        document.getElementById('controltext').innerHTML = 'GYRO';
        document.getElementById('controlhelp').innerHTML = 'Tilt your device to move the car';
    }
});
document.getElementById('startScreen').addEventListener('click', () => {
    document.getElementById('startScreen').style.visibility = 'hidden';
    document.getElementById('title').style.visibility = 'visible';
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    playTheme();
});

function playTheme() {
    if (localStorage.getItem('sound') == 'on') {
        themeSong.loop = true;
        themeSong.play();
    }
}

function stopTheme() {
    themeSong.pause();
}

function playWin() {
    if (localStorage.getItem('sound') == 'on') {
        winSound.load();
        winSound.play();
    }
}

function playLost() {
    if (localStorage.getItem('sound') == 'on') {
        lostSound.load();
        lostSound.play();
    }
}

function playGame() {
    if (localStorage.getItem('sound') == 'on') {
        gameSound.loop = true;
        gameSound.play();
    }
}

function stopGame() {
    gameSound.pause();
}

function playCount() {
    if (localStorage.getItem('sound') == 'on') {
        countSound.load();
        countSound.play();
    }
}

fetch('./data/levels.json')
    .then(response => response.json())
    .then(data => {
        addlevels(data.levels.length);
        unlockLevels(data.levels.length);
    });

function addlevels(levellen) {
    for (let i = 1; i < levellen + 1; i++) {
        document.getElementById('levels-menu').innerHTML += '<div id="level' + i + '" class="level-mini">X</div>';
    }
}

function unlockLevels(levellen) {
    //var leveldiv = document.getElementById('levels-menu');
    //unlock first level by default
    if (levellen > 0) {
        document.getElementById('level1').style.backgroundColor = '#87cc76';
        document.getElementById('level1').style.color = 'black';
        document.getElementById('level1').innerHTML = '1';
        document.getElementById('level1').addEventListener('click', () => {
            document.getElementById('levels').style.visibility = 'hidden';
            localStorage.setItem('lvl', 0);
            new GameFlow(localStorage.getItem('lvl'));
        });
    }
    for (let i = 0; i < (levellen - 1); i++) {
        if (localStorage.getItem('level' + (i)) == 'true') {
            document.getElementById('level' + (i + 2)).style.backgroundColor = '#87cc76';
            document.getElementById('level' + (i + 2)).style.color = 'black';
            document.getElementById('level' + (i + 2)).innerHTML = i + 2;
            document.getElementById('level' + (i + 2)).addEventListener('click', () => {
                document.getElementById('levels').style.visibility = 'hidden';
                localStorage.setItem('lvl', (i + 1));
                console.log(localStorage.getItem('lvl'));
                new GameFlow(localStorage.getItem('lvl'));
            });
            localStorage.setItem('lvl', i + 1);
        }
        else
            break;
    }
}

//check dificulty and sound

if (!localStorage.getItem('dificulty')) {
    localStorage.setItem('dificulty', 'easy');
    document.getElementById('difftext').innerHTML = 'EASY';
}
else {
    document.getElementById('difftext').innerHTML = localStorage.getItem('dificulty').toUpperCase();
}
if (!localStorage.getItem('sound')) {
    localStorage.setItem('sound', 'on');
    document.getElementById('soundtext').innerHTML = 'ON';
}
else {
    document.getElementById('soundtext').innerHTML = localStorage.getItem('sound').toUpperCase();
}

if (!localStorage.getItem('control')) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        localStorage.setItem('control', 'gyro');
        document.getElementById('controltext').innerHTML = 'GYRO';
        document.getElementById('controlhelp').innerHTML = 'Tilt your device to move the car';
    }
    else {
        localStorage.setItem('control', 'keyboard');
        document.getElementById('controltext').innerHTML = 'KEYBOARD';
        document.getElementById('controlhelp').innerHTML = 'Use arrow keys or WASD to move the car';
    }
}
else {
    document.getElementById('controltext').innerHTML = localStorage.getItem('control').toUpperCase();
    if (localStorage.getItem('control') == 'gyro') {
        document.getElementById('controlhelp').innerHTML = 'Tilt your device to move the car';
    }
    else if (localStorage.getItem('control') == 'tap') {
        document.getElementById('controlhelp').innerHTML = 'Tap on the lane to move the car';
    }
    else if (localStorage.getItem('control') == 'mouse') {
        document.getElementById('controlhelp').innerHTML = 'Use your mouse to move the car';
    }
    else if (localStorage.getItem('control') == 'keyboard') {
        document.getElementById('controlhelp').innerHTML = 'Use arrow keys or WASD to move the car';
    }
}