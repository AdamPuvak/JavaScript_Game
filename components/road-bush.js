class RoadBush extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.road_bush = document.createElement('div');
        this.road_bush.className = 'road-bush';

        let lane = parseInt(this.getAttribute('lane'));
        if (isNaN(lane)) {
            lane = 3;
        }

        this.lane = lane;
        
        //########    road    ########

        this.road = document.createElement('game-road');
        this.road.className = 'road';

        //########    bush's    ########

        this.bushs=[];

        //########    style    ########

        const style = document.createElement('style');
        style.innerHTML = `
            .road-bush {
                width: 49vw;
                height: 10vw;
                z-index: 1;
                position: relative;
            }

            .bush{
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
        this.road_bush.appendChild(this.road);
        this.shadowRoot.appendChild(this.road_bush);

    }

    laneChange(lane) {
        this.lane = lane;
        for (var i = 0; i < this.lane.length; i++) {
            if(Math.random() < 0.5){
                var bush = document.createElement('bush-obstacle1');
            }
            else{
                var bush = document.createElement('bush-obstacle2');
            }
            bush.className = 'bush';
            bush.laneChange(parseInt(this.lane[i]));
            this.bushs.push(bush);
            this.road_bush.appendChild(bush);
        }
    }
}

customElements.define('road-bush', RoadBush);