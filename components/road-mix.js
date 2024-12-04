class RoadObstacle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.road_obstacle = document.createElement('div');
        this.road_obstacle.className = 'road-obstacle';

        let lane = parseInt(this.getAttribute('lane'));
        if (isNaN(lane)) {
            lane = 3;
        }

        this.lane = lane;

        //########    road    ########

        this.road = document.createElement('game-road');
        this.road.className = 'road';

        //########    obstacles    ########

        this.obstacles = [];

        //########    style    ########

        const style = document.createElement('style');
        style.innerHTML = `
            .road-obstacle {
                width: 49vw;
                height: 10vw;
                z-index: 1;
                position: relative;
            }

            .obstacle{
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
            }

            .road {
                position: relative;
                top: 0;
                left: 0;
                z-index: 1;
            }

        `;
        this.shadowRoot.appendChild(style);
        this.road_obstacle.appendChild(this.road);
        this.shadowRoot.appendChild(this.road_obstacle);

    }

    laneChange(lane) {
        this.lane = lane;
        for (var i = 0; i < lane.length; i++) {
            var randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber < 3) {
                var obstacle = document.createElement('car-obstacle');
            }
            else {
                if (Math.random() < 0.5) {
                    var obstacle = document.createElement('bush-obstacle1');
                }
                else {
                    var obstacle = document.createElement('bush-obstacle2');
                }
            }
            obstacle.className = 'obstacle';
            obstacle.laneChange(parseInt(lane[i]));
            this.obstacles.push(obstacle);
            this.road_obstacle.appendChild(obstacle);
        }
    }
}


customElements.define('road-mix', RoadObstacle);