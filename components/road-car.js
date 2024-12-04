class RoadCar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.road_car = document.createElement('div');
        this.road_car.className = 'road-car';

        let lane = parseInt(this.getAttribute('lane'));
        if (isNaN(lane)) {
            lane = 3;
        }
        this.lane = lane;
        
        //########    road    ########

        this.road = document.createElement('game-road');
        this.road.className = 'road';

        //########    style    ########

        const style = document.createElement('style');
        style.innerHTML = `
            .road-car {
                width: 49vw;
                height: 10vw;
                z-index: 1;
                position: relative;
            }

            .car{
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
        this.road_car.appendChild(this.road);
        this.shadowRoot.appendChild(this.road_car);

    }

    laneChange(lane) {
        this.lane = lane;
        for (var i = 0; i < this.lane.length; i++) {
            var car = document.createElement('car-obstacle');
            car.className = 'car';
            car.laneChange(parseInt(this.lane[i]));
            this.road_car.appendChild(car);
        }
    }

}

customElements.define('road-car', RoadCar);