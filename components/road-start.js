class RoadStart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.road = document.createElement('div');
        this.road.className = 'road-container';

        //########    road sides    ########
        this.road_side = document.createElement('div');
        this.road_side.className = 'road-side';

        //########    white side    ########

        this.white_side_1 = document.createElement('div');
        this.white_side_1.className = 'white-side-1';

        this.white_side_2 = document.createElement('div');
        this.white_side_2.className = 'white-side-2';

        this.road_side.appendChild(this.white_side_1);
        this.road_side.appendChild(this.white_side_2);

        //########    road line    ########

        this.road_line = document.createElement('div');
        this.road_line.className = 'road-line';

        //########    white line    ########

        this.white_line_1 = document.createElement('div');
        this.white_line_1.className = 'white-line-1';
        
        this.white_line_2 = document.createElement('div');
        this.white_line_2.className = 'white-line-2';

        this.road_line.appendChild(this.white_line_1);
        this.road_line.appendChild(this.white_line_2);

        //########    asphalt    ########

        this.asphalt = document.createElement('div');
        this.asphalt.className = 'asphalt';

        //########    finish start line    ########

        this.finish_start_line = document.createElement('div');
        this.finish_start_line.className = 'finish-start-line';


        //########    style    ########

        const style = document.createElement('style');
        style.innerHTML = `
            .road-container {
                position: relative;
                width: 49vw;
                height: 10vw;
                background-color: white;
                z-index: 1;
                display: flex;
                flex-direction: row;
            }

            .finish-start-line {
                position: absolute;
                top: 3.55vw;
                left: 4vw;
                width: 41vw;
                height: 2.9vw;
                background-image: url('./images/CHECKERED.jpg');
                background-repeat: cover;
                background-position: center;

            }

            .road-side {
                width: 4vw;
                height: 10vw;
                background-color: red;
            }

            .road-line {
                width: 3vw;
                height: 10vw;
                background-color: #7d7d7d;
            }

            .asphalt {
                width: 5.8vw;
                height: 10vw;
                background-color: #7d7d7d;
            }

            .white-line-1 {
                width: 1vw;
                height: 2vw;
                background-color: white;
                position: relative;
                top: 1.5vw;
                left: 1vw;
            }

            .white-line-2 {
                width: 1vw;
                height: 2vw;
                background-color: white;
                position: relative;
                top: 4.5vw;
                left: 1vw;
            }

            .white-side-1 {
                width: 4vw;
                height: 2.5vw;
                background-color: white;
                position: relative;
                top: 1.25vw;
                left: 0;
            }

            .white-side-2 {
                width: 4vw;
                height: 2.5vw;
                background-color: white;
                position: relative;
                top: 3.75vw;
                left: 0;
            }


    `;
        this.road.appendChild(this.road_side);
        this.road.appendChild(this.asphalt);
        this.road.appendChild(this.road_line);
        this.road.appendChild(this.asphalt.cloneNode(true));
        this.road.appendChild(this.road_line.cloneNode(true));
        this.road.appendChild(this.asphalt.cloneNode(true));
        this.road.appendChild(this.road_line.cloneNode(true));
        this.road.appendChild(this.asphalt.cloneNode(true));
        this.road.appendChild(this.road_line.cloneNode(true));
        this.road.appendChild(this.asphalt.cloneNode(true));
        this.road.appendChild(this.road_side.cloneNode(true));
        this.road.appendChild(this.finish_start_line.cloneNode(true));


        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(this.road);
    }
}
customElements.define('road-start', RoadStart);