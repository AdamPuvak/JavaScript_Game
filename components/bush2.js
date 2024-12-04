class Bush extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.lane = this.getAttribute('lane') ? parseInt(this.getAttribute('lane')) : 3;

        this.left_align = 0;

        switch(this.lane) {
            case 1:
                this.left_align = 4.4 ;
                break;
            case 2:
                this.left_align = 13.2 ;
                break;
            case 3:
                this.left_align = 22 ;
                break;
            case 4:
                this.left_align = 30.8 ;
                break;
            case 5:
                this.left_align = 39.6 ;
                break;
            default:
                this.left_align = 22 ;
                break;
        }

        //########    bush    ########

        this.bush = document.createElement('div');
        this.bush.className = 'bush';

        //########    black square    ########

        this.black_square = document.createElement('div');
        this.black_square.className = 'black-square';

        //########    color square    ########

        this.color_square = document.createElement('div');
        this.color_square.className = 'color-square';

        //########    darker square    ########

        this.darker_square = document.createElement('div');
        this.darker_square.className = 'darker-square';

        //########    darker darker square    ########

        this.darker_darker_square = document.createElement('div');
        this.darker_darker_square.className = 'darker-darker-square';

        //########    lighter square    ########

        this.lighter_square = document.createElement('div');
        this.lighter_square.className = 'lighter-square';

        //########    transparent square    ########

        this.transparent_square = document.createElement('div');
        this.transparent_square.className = 'transparent-square';

        //########    line 1    ########

        this.line_1 = document.createElement('div');
        this.line_1.className = 'line';

        for (var i = 0; i < 17; i++) {
            this.line_1.appendChild(this.transparent_square.cloneNode(true));
        }
        for (var i = 0; i < 5; i++) {
            this.line_1.appendChild(this.black_square.cloneNode(true));
        }
        for (var i = 0; i < 17; i++) {
            this.line_1.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 2    ########

        this.line_2 = document.createElement('div');
        this.line_2.className = 'line';

        for (var i = 0; i < 15; i++) {
            this.line_2.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.lighter_square.cloneNode(true));
        this.line_2.appendChild(this.lighter_square.cloneNode(true));
        for (var i = 0; i < 3; i++) {
            this.line_2.appendChild(this.color_square.cloneNode(true));
        }
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 15; i++) {
            this.line_2.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 3    ########

        this.line_3 = document.createElement('div');
        this.line_3.className = 'line';

        for (var i = 0; i < 13; i++) {
            this.line_3.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_3.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 5; i++) {
            this.line_3.appendChild(this.color_square.cloneNode(true));
        }
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 13; i++) {
            this.line_3.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 4    ########

        this.line_4 = document.createElement('div');
        this.line_4.className = 'line';

        for (var i = 0; i < 12; i++) {
            this.line_4.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_4.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_4.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 8; i++) {
            this.line_4.appendChild(this.color_square.cloneNode(true));
        }
        this.line_4.appendChild(this.darker_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 12; i++) {
            this.line_4.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 5    ########

        this.line_5 = document.createElement('div');
        this.line_5.className = 'line';

        for (var i = 0; i < 11; i++) {
            this.line_5.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_5.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_5.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 7; i++) {
            this.line_5.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_5.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_5.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 11; i++) {
            this.line_5.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 6    ########

        this.line_6 = document.createElement('div');
        this.line_6.className = 'line';

        for (var i = 0; i < 10; i++) {
            this.line_6.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_6.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_6.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 8; i++) {
            this.line_6.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 5; i++) {
            this.line_6.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_6.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 10; i++) {
            this.line_6.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 7    ########

        this.line_7 = document.createElement('div');
        this.line_7.className = 'line';

        for (var i = 0; i < 3; i++) {
            this.line_7.appendChild(this.transparent_square.cloneNode(true));
        }
        for (var i = 0; i < 7; i++) {
            this.line_7.appendChild(this.black_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_7.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 9; i++) {
            this.line_7.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 5; i++) {
            this.line_7.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_7.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 10; i++) {
            this.line_7.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 8    ########

        this.line_8 = document.createElement('div');
        this.line_8.className = 'line';

        this.line_8.appendChild(this.transparent_square.cloneNode(true));
        this.line_8.appendChild(this.transparent_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_8.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        for (var i = 0; i < 11; i++) {
            this.line_8.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 5; i++) {
            this.line_8.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_8.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 10; i++) {
            this.line_8.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 9    ########

        this.line_9 = document.createElement('div');
        this.line_9.className = 'line';

        this.line_9.appendChild(this.transparent_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 5; i++) {
            this.line_9.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_9.appendChild(this.color_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        for (var i = 0; i < 13; i++) {
            this.line_9.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 6; i++) {
            this.line_9.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.transparent_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_9.appendChild(this.black_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_9.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 10    ########

        this.line_10 = document.createElement('div');
        this.line_10.className = 'line';

        this.line_10.appendChild(this.transparent_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_10.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_10.appendChild(this.color_square.cloneNode(true));
        this.line_10.appendChild(this.color_square.cloneNode(true));
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        for (var i = 0; i < 10; i++) {
            this.line_10.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 9; i++) {
            this.line_10.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_10.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.transparent_square.cloneNode(true));
        this.line_10.appendChild(this.transparent_square.cloneNode(true));

        //########    line 11    ########

        this.line_11 = document.createElement('div');
        this.line_11.className = 'line';

        this.line_11.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_11.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_11.appendChild(this.color_square.cloneNode(true));
        this.line_11.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_11.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 7; i++) {
            this.line_11.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 10; i++) {
            this.line_11.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_11.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 6; i++) {
            this.line_11.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_11.appendChild(this.color_square.cloneNode(true));
        this.line_11.appendChild(this.color_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.transparent_square.cloneNode(true));

        //########    line 12    ########
        this.line_12 = document.createElement('div');
        this.line_12.className = 'line';

        this.line_12.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 3; i++) {
            this.line_12.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_12.appendChild(this.color_square.cloneNode(true));
        this.line_12.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 5; i++) {
            this.line_12.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 6; i++) {
            this.line_12.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 7; i++) {
            this.line_12.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_12.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_12.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_12.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_12.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_12.appendChild(this.black_square.cloneNode(true));

        //########    line 13    ########

        this.line_13 = document.createElement('div');
        this.line_13.className = 'line';

        this.line_13.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 3; i++) {
            this.line_13.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_13.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_13.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        for (var i = 0; i < 6; i++) {
            this.line_13.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 7; i++) {
            this.line_13.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 2; i++) {
            this.line_13.appendChild(this.lighter_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_13.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_13.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));

        //########    line 14    ########   
        this.line_14 = document.createElement('div');
        this.line_14.className = 'line';

        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.color_square.cloneNode(true));
        this.line_14.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 3; i++) {
            this.line_14.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_14.appendChild(this.color_square.cloneNode(true));
        }
        this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_14.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 10; i++) {
            this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 5; i++) {
            this.line_14.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_14.appendChild(this.black_square.cloneNode(true));

        //########    line 15    ########

        this.line_15 = document.createElement('div');
        this.line_15.className = 'line';

        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.lighter_square.cloneNode(true));
        this.line_15.appendChild(this.lighter_square.cloneNode(true));
        this.line_15.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 6; i++) {
            this.line_15.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_15.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 13; i++) {
            this.line_15.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 4; i++) {
            this.line_15.appendChild(this.color_square.cloneNode(true));
        }
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        for (var i = 0; i < 6; i++) {
            this.line_15.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_15.appendChild(this.black_square.cloneNode(true));

        //########    line 16    ######## 

        this.line_16 = document.createElement('div');
        this.line_16.className = 'line';

        this.line_16.appendChild(this.transparent_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        for (var i = 0; i < 6; i++) {
            this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 5; i++) {
            this.line_16.appendChild(this.color_square.cloneNode(true));
        }
        for (var i = 0; i < 9; i++) {
            this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (var i = 0; i < 3; i++) {
            this.line_16.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_16.appendChild(this.color_square.cloneNode(true));
        for (var i = 0; i < 4; i++) {
            this.line_16.appendChild(this.darker_square.cloneNode(true));
        }
        for (var i = 0; i < 6; i++) {
            this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.transparent_square.cloneNode(true));

        //########    line 17    ########

        this.line_17 = document.createElement('div');
        this.line_17.className = 'line';

        for (var i = 0; i < 3; i++) {
            this.line_17.appendChild(this.transparent_square.cloneNode(true));
        }
        for (var i = 0; i < 34; i++) {
            this.line_17.appendChild(this.black_square.cloneNode(true));
        }
        for (var i = 0; i < 2; i++) {
            this.line_17.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    style    ########     38 c 31 r

        const style = document.createElement('style');
        style.innerHTML = `
            .bush {
                position: relative;
                left: ${this.left_align}vw;
                width: 5vw;
                height: 10vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                z-index: 3;
            }

            .black-square {
                width: 2.56%;
                height: 100%;
                background-color: #15080d;
            }

            .color-square {
                width: 2.56%;
                height: 100%;
                background-color: #349633;
            }

            .darker-square {
                width: 2.56%;
                height: 100%;
                background-color: #246135;
            }

            .darker-darker-square {
                width: 2.56%;
                height: 100%;
                background-color: #1b3b26;
            }

            .lighter-square {
                width: 2.56%;
                height: 100%;
                background-color: #56b736;
            }

            .transparent-square {
                width: 2.56%;
                height: 100%;
                background-color: transparent;
            }

            .line {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 100%;
                height: 1.28%;
            }
        `;
        this.shadowRoot.appendChild(style);
        this.bush.appendChild(this.line_1);
        this.bush.appendChild(this.line_2);
        this.bush.appendChild(this.line_3);
        this.bush.appendChild(this.line_4);
        this.bush.appendChild(this.line_5);
        this.bush.appendChild(this.line_6);
        this.bush.appendChild(this.line_7);
        this.bush.appendChild(this.line_8);
        this.bush.appendChild(this.line_9);
        this.bush.appendChild(this.line_10);
        this.bush.appendChild(this.line_11);
        this.bush.appendChild(this.line_12);
        this.bush.appendChild(this.line_13);
        this.bush.appendChild(this.line_14);
        this.bush.appendChild(this.line_15);
        this.bush.appendChild(this.line_16);
        this.bush.appendChild(this.line_17);
        this.shadowRoot.appendChild(this.bush);
    }

    laneChange(lane) {

        this.lane = lane;
        switch(this.lane) {
            case 1:
                this.left_align = 4.4 ;
                break;
            case 2:
                this.left_align = 13.2 ;
                break;
            case 3:
                this.left_align = 22 ;
                break;
            case 4:
                this.left_align = 30.8 ;
                break;
            case 5:
                this.left_align = 39.6 ;
                break;
            default:
                this.left_align = 22 ;
                break;
        }
        this.shadowRoot.querySelector('.bush').style.left = this.left_align + 'vw';
    }
}

customElements.define('bush-obstacle2', Bush);