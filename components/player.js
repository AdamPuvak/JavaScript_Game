class Player extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.color = this.getAttribute('color') ? this.getAttribute('color') : 'red';
        this.lane = 3;
        this.row = 3;
        this.left_align = 22;

        //#########    player car    #########

        this.container = document.createElement('div');
        this.container.className = 'car-container';

        //#########    black square    #########

        this.black_square = document.createElement('div');
        this.black_square.className = 'black-square';

        //#########    white square    #########

        this.white_square = document.createElement('div');
        this.white_square.className = 'white-square';

        //#########    color square    #########

        this.color_square = document.createElement('div');
        this.color_square.className = 'color-square';

        //#########    darker color square    #########

        this.darker_square = document.createElement('div');
        this.darker_square.className = 'darker-square';
        switch (this.color) {
            case 'red':
                this.darker_square.style.backgroundColor = '#b30000';
                break;
            case 'blue':
                this.darker_square.style.backgroundColor = '#0000b3';
                break;
            case 'green':
                this.darker_square.style.backgroundColor = '#00b300';
                break;
            case 'yellow':
                this.darker_square.style.backgroundColor = '#b3b300';
                break;
            case 'black':
                this.darker_square.style.backgroundColor = '#555555';
                break;
        }

        //#########    lighter color square    #########

        this.lighter_square = document.createElement('div');
        this.lighter_square.className = 'lighter-square';
        switch (this.color) {
            case 'red':
                this.lighter_square.style.backgroundColor = '#ff5656';
                break;
            case 'blue':
                this.lighter_square.style.backgroundColor = '#0000ff';
                break;
            case 'green':
                this.lighter_square.style.backgroundColor = '#00ff00';
                break;
            case 'yellow':
                this.lighter_square.style.backgroundColor = '#ffff00';
                break;
            case 'black':
                this.lighter_square.style.backgroundColor = '#888888';
                break;
        }

        //#########    window square    #########

        this.window_square = document.createElement('div');
        this.window_square.className = 'window-square';

        //#########    window darker square    #########

        this.window_darker_square = document.createElement('div');
        this.window_darker_square.className = 'window-darker-square';

        //#########    line 1    #########

        this.line_1 = document.createElement('div');
        this.line_1.className = 'line';

        for (let i = 0; i < 17; i++) {
            this.line_1.appendChild(this.black_square.cloneNode(true));
        }

        //#########    line 2    #########

        this.line_2 = document.createElement('div');
        this.line_2.className = 'line';

        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.color_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_2.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.white_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 1; i++) {
            this.line_2.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_2.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.lighter_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));

        //#########    line 3    #########

        this.line_3 = document.createElement('div');
        this.line_3.className = 'line';

        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.darker_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_3.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 2; i++) {
            this.line_3.appendChild(this.color_square.cloneNode(true));
        }
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.white_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 2; i++) {
            this.line_3.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_3.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.lighter_square.cloneNode(true));
        this.line_3.appendChild(this.black_square.cloneNode(true));

        //#########    line 4    #########

        this.line_4 = document.createElement('div');
        this.line_4.className = 'line';

        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.darker_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.darker_square.cloneNode(true));
        this.line_4.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_4.appendChild(this.color_square.cloneNode(true));
        }
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.white_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_4.appendChild(this.color_square.cloneNode(true));
        }
        this.line_4.appendChild(this.lighter_square.cloneNode(true));
        this.line_4.appendChild(this.lighter_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.lighter_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));

        //#########    line 5    #########

        this.line_5 = document.createElement('div');
        this.line_5.className = 'line';

        this.line_5.appendChild(this.black_square.cloneNode(true));
        this.line_5.appendChild(this.darker_square.cloneNode(true));
        this.line_5.appendChild(this.black_square.cloneNode(true));
        this.line_5.appendChild(this.darker_square.cloneNode(true));
        this.line_5.appendChild(this.darker_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 7; i++) {
            this.line_5.appendChild(this.black_square.cloneNode(true));
        }
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.lighter_square.cloneNode(true));
        this.line_5.appendChild(this.lighter_square.cloneNode(true));
        this.line_5.appendChild(this.black_square.cloneNode(true));
        this.line_5.appendChild(this.lighter_square.cloneNode(true));
        this.line_5.appendChild(this.black_square.cloneNode(true));

        //#########    line 6    #########

        this.line_6 = document.createElement('div');
        this.line_6.className = 'line';

        this.line_6.appendChild(this.black_square.cloneNode(true));
        this.line_6.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_6.appendChild(this.black_square.cloneNode(true));
        }
        this.line_6.appendChild(this.color_square.cloneNode(true));
        this.line_6.appendChild(this.black_square.cloneNode(true));
        this.line_6.appendChild(this.black_square.cloneNode(true));
        this.line_6.appendChild(this.white_square.cloneNode(true));
        this.line_6.appendChild(this.black_square.cloneNode(true));
        this.line_6.appendChild(this.black_square.cloneNode(true));
        this.line_6.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_6.appendChild(this.black_square.cloneNode(true));
        }
        this.line_6.appendChild(this.lighter_square.cloneNode(true));
        this.line_6.appendChild(this.black_square.cloneNode(true));

        //#########    line 7    #########

        this.line_7 = document.createElement('div');
        this.line_7.className = 'line';

        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.darker_square.cloneNode(true));
        this.line_7.appendChild(this.darker_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_7.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_7.appendChild(this.color_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.white_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_7.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.lighter_square.cloneNode(true));
        this.line_7.appendChild(this.lighter_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));

        //#########    line 8    #########

        this.line_8 = document.createElement('div');
        this.line_8.className = 'line';

        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_8.appendChild(this.color_square.cloneNode(true));
        }
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.white_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 2; i++) {
            this.line_8.appendChild(this.color_square.cloneNode(true));
        }
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));

        //#########    line 9    #########

        this.line_9 = document.createElement('div');
        this.line_9.className = 'line';

        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_9.appendChild(this.color_square.cloneNode(true));
        }
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.white_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 2; i++) {
            this.line_9.appendChild(this.color_square.cloneNode(true));
        }
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));

        //#########    line 10    #########

        this.line_10 = document.createElement('div');
        this.line_10.className = 'line';

        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.window_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_10.appendChild(this.color_square.cloneNode(true));
        }
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.white_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_10.appendChild(this.color_square.cloneNode(true));
        }
        this.line_10.appendChild(this.lighter_square.cloneNode(true));
        this.line_10.appendChild(this.lighter_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));
        this.line_10.appendChild(this.window_square.cloneNode(true));
        this.line_10.appendChild(this.black_square.cloneNode(true));

        //#########    line 11    #########

        this.line_11 = document.createElement('div');
        this.line_11.className = 'line';

        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.window_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_11.appendChild(this.color_square.cloneNode(true));
        }
        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.white_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_11.appendChild(this.color_square.cloneNode(true));
        }
        this.line_11.appendChild(this.lighter_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));
        this.line_11.appendChild(this.window_square.cloneNode(true));
        this.line_11.appendChild(this.black_square.cloneNode(true));

        //#########    line 12    #########

        this.line_12 = document.createElement('div');
        this.line_12.className = 'line';

        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.white_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_12.appendChild(this.color_square.cloneNode(true));
        }
        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.white_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_12.appendChild(this.color_square.cloneNode(true));
        }
        this.line_12.appendChild(this.lighter_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.white_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));

        //#########    line 13    #########

        this.line_13 = document.createElement('div');
        this.line_13.className = 'line';

        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_13.appendChild(this.color_square.cloneNode(true));
        }
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.white_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_13.appendChild(this.color_square.cloneNode(true));
        }
        this.line_13.appendChild(this.lighter_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.black_square.cloneNode(true));

        //#########    line 14    #########

        this.line_14 = document.createElement('div');
        this.line_14.className = 'line';

        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.window_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.darker_square.cloneNode(true));
        this.line_14.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_14.appendChild(this.color_square.cloneNode(true));
        }
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.white_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_14.appendChild(this.color_square.cloneNode(true));
        }
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.window_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));

        //#########    line 15    #########

        this.line_15 = document.createElement('div');
        this.line_15.className = 'line';

        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.window_square.cloneNode(true));
        this.line_15.appendChild(this.window_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_15.appendChild(this.color_square.cloneNode(true));
        }
        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.white_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_15.appendChild(this.color_square.cloneNode(true));
        }
        this.line_15.appendChild(this.lighter_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.window_square.cloneNode(true));
        this.line_15.appendChild(this.window_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));

        //#########    line 16    #########

        this.line_16 = document.createElement('div');
        this.line_16.className = 'line';

        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.window_square.cloneNode(true));
        this.line_16.appendChild(this.white_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_16.appendChild(this.color_square.cloneNode(true));
        }
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.white_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 2; i++) {
            this.line_16.appendChild(this.color_square.cloneNode(true));
        }
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));
        this.line_16.appendChild(this.white_square.cloneNode(true));
        this.line_16.appendChild(this.window_square.cloneNode(true));
        this.line_16.appendChild(this.black_square.cloneNode(true));

        //#########    line 17    #########

        this.line_17 = document.createElement('div');
        this.line_17.className = 'line';

        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.white_square.cloneNode(true));
        this.line_17.appendChild(this.window_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        this.line_17.appendChild(this.color_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.white_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.color_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.window_square.cloneNode(true));
        this.line_17.appendChild(this.white_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));

        //#########    line 18    #########

        this.line_18 = document.createElement('div');
        this.line_18.className = 'line';

        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.window_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.window_darker_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.white_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.window_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.window_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));

        //#########    line 19    #########

        this.line_19 = document.createElement('div');
        this.line_19.className = 'line';

        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.window_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.window_darker_square.cloneNode(true));
        this.line_19.appendChild(this.window_darker_square.cloneNode(true));
        this.line_19.appendChild(this.window_darker_square.cloneNode(true));
        this.line_19.appendChild(this.window_square.cloneNode(true));
        for (let i = 0; i < 7; i++) {
            this.line_19.appendChild(this.black_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_19.appendChild(this.window_square.cloneNode(true));
        }
        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.window_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));

        //#########    line 20    #########

        this.line_20 = document.createElement('div');
        this.line_20.className = 'line';

        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.window_darker_square.cloneNode(true));
        this.line_20.appendChild(this.window_darker_square.cloneNode(true));
        this.line_20.appendChild(this.window_darker_square.cloneNode(true));
        for (let i = 0; i < 9; i++) {
            this.line_20.appendChild(this.window_square.cloneNode(true));
        }
        this.line_20.appendChild(this.white_square.cloneNode(true));
        this.line_20.appendChild(this.window_square.cloneNode(true));
        this.line_20.appendChild(this.window_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));

        //#########    line 21    #########

        this.line_21 = document.createElement('div');
        this.line_21.className = 'line';

        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.window_darker_square.cloneNode(true));
        this.line_21.appendChild(this.window_darker_square.cloneNode(true));
        this.line_21.appendChild(this.window_darker_square.cloneNode(true));
        for (let i = 0; i < 11; i++) {
            this.line_21.appendChild(this.window_square.cloneNode(true));
        }
        this.line_21.appendChild(this.white_square.cloneNode(true));
        this.line_21.appendChild(this.window_square.cloneNode(true));
        this.line_21.appendChild(this.window_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));

        //#########    line 22    #########

        this.line_22 = document.createElement('div');
        this.line_22.className = 'line';

        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.window_darker_square.cloneNode(true));
        this.line_22.appendChild(this.window_darker_square.cloneNode(true));
        this.line_22.appendChild(this.window_darker_square.cloneNode(true));
        for (let i = 0; i < 11; i++) {
            this.line_22.appendChild(this.window_square.cloneNode(true));
        }
        this.line_22.appendChild(this.white_square.cloneNode(true));
        this.line_22.appendChild(this.window_square.cloneNode(true));
        this.line_22.appendChild(this.window_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));

        //#########    line 23    #########

        this.line_23 = document.createElement('div');
        this.line_23.className = 'line';

        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.window_darker_square.cloneNode(true));
        this.line_23.appendChild(this.window_darker_square.cloneNode(true));
        this.line_23.appendChild(this.window_darker_square.cloneNode(true));
        for (let i = 0; i < 14; i++) {
            this.line_23.appendChild(this.window_square.cloneNode(true));
        }
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));

        //#########    line 24    #########

        this.line_24 = document.createElement('div');
        this.line_24.className = 'line';

        for (let i = 0; i < 4; i++) {
            this.line_24.appendChild(this.black_square.cloneNode(true));
        }
        this.line_24.appendChild(this.window_darker_square.cloneNode(true));
        for (let i = 0; i < 12; i++) {
            this.line_24.appendChild(this.window_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_24.appendChild(this.black_square.cloneNode(true));
        }

        //#########    line 25    #########

        this.line_25 = document.createElement('div');
        this.line_25.className = 'line';

        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.darker_square.cloneNode(true));
        this.line_25.appendChild(this.darker_square.cloneNode(true));
        this.line_25.appendChild(this.darker_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 7; i++) {
            this.line_25.appendChild(this.window_square.cloneNode(true));
        }
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.lighter_square.cloneNode(true));
        this.line_25.appendChild(this.lighter_square.cloneNode(true));
        this.line_25.appendChild(this.lighter_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));

        //#########    line 26    #########

        this.line_26 = document.createElement('div');
        this.line_26.className = 'line';

        this.line_26.appendChild(this.black_square.cloneNode(true));
        this.line_26.appendChild(this.darker_square.cloneNode(true));
        this.line_26.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_26.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 7; i++) {
            this.line_26.appendChild(this.black_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_26.appendChild(this.color_square.cloneNode(true));
        }
        this.line_26.appendChild(this.lighter_square.cloneNode(true));
        this.line_26.appendChild(this.lighter_square.cloneNode(true));
        this.line_26.appendChild(this.black_square.cloneNode(true));

        //#########    line 27    #########

        this.line_27 = document.createElement('div');
        this.line_27.className = 'line';

        this.line_27.appendChild(this.black_square.cloneNode(true));
        this.line_27.appendChild(this.darker_square.cloneNode(true));
        this.line_27.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_27.appendChild(this.color_square.cloneNode(true));
        }
        this.line_27.appendChild(this.black_square.cloneNode(true));
        this.line_27.appendChild(this.black_square.cloneNode(true));
        this.line_27.appendChild(this.white_square.cloneNode(true));
        this.line_27.appendChild(this.black_square.cloneNode(true));
        this.line_27.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_27.appendChild(this.color_square.cloneNode(true));
        }
        this.line_27.appendChild(this.lighter_square.cloneNode(true));
        this.line_27.appendChild(this.lighter_square.cloneNode(true));
        this.line_27.appendChild(this.black_square.cloneNode(true));

        //#########    line 28    #########

        this.line_28 = document.createElement('div');
        this.line_28.className = 'line';

        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.darker_square.cloneNode(true));
        this.line_28.appendChild(this.darker_square.cloneNode(true));
        this.line_28.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_28.appendChild(this.color_square.cloneNode(true));
        }
        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.white_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_28.appendChild(this.color_square.cloneNode(true));
        }
        this.line_28.appendChild(this.lighter_square.cloneNode(true));
        this.line_28.appendChild(this.lighter_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));

        //#########    line 29    #########

        this.line_29 = document.createElement('div');
        this.line_29.className = 'line';

        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.darker_square.cloneNode(true));
        this.line_29.appendChild(this.darker_square.cloneNode(true));
        this.line_29.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_29.appendChild(this.color_square.cloneNode(true));
        }
        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.white_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_29.appendChild(this.color_square.cloneNode(true));
        }
        this.line_29.appendChild(this.lighter_square.cloneNode(true));
        this.line_29.appendChild(this.lighter_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));

        //#########    line 30    #########

        this.line_30 = document.createElement('div');
        this.line_30.className = 'line';

        this.line_30.appendChild(this.black_square.cloneNode(true));
        this.line_30.appendChild(this.color_square.cloneNode(true));
        this.line_30.appendChild(this.black_square.cloneNode(true));
        this.line_30.appendChild(this.darker_square.cloneNode(true));
        this.line_30.appendChild(this.darker_square.cloneNode(true));
        this.line_30.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 2; i++) {
            this.line_30.appendChild(this.color_square.cloneNode(true));
        }
        this.line_30.appendChild(this.black_square.cloneNode(true));
        this.line_30.appendChild(this.black_square.cloneNode(true));
        this.line_30.appendChild(this.white_square.cloneNode(true));
        this.line_30.appendChild(this.black_square.cloneNode(true));
        this.line_30.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 2; i++) {
            this.line_30.appendChild(this.color_square.cloneNode(true));
        }
        this.line_30.appendChild(this.lighter_square.cloneNode(true));
        this.line_30.appendChild(this.lighter_square.cloneNode(true));
        this.line_30.appendChild(this.lighter_square.cloneNode(true));
        this.line_30.appendChild(this.black_square.cloneNode(true));
        this.line_30.appendChild(this.lighter_square.cloneNode(true));
        this.line_30.appendChild(this.black_square.cloneNode(true));

        //#########    line 31    #########

        this.line_31 = document.createElement('div');
        this.line_31.className = 'line';

        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.darker_square.cloneNode(true));
        this.line_31.appendChild(this.color_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.darker_square.cloneNode(true));
        this.line_31.appendChild(this.darker_square.cloneNode(true));
        this.line_31.appendChild(this.darker_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.white_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.color_square.cloneNode(true));
        this.line_31.appendChild(this.lighter_square.cloneNode(true));
        this.line_31.appendChild(this.lighter_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));
        this.line_31.appendChild(this.lighter_square.cloneNode(true));
        this.line_31.appendChild(this.color_square.cloneNode(true));
        this.line_31.appendChild(this.black_square.cloneNode(true));

        //#########    line 32    #########

        this.line_32 = document.createElement('div');
        this.line_32.className = 'line';

        this.line_32.appendChild(this.black_square.cloneNode(true));
        this.line_32.appendChild(this.darker_square.cloneNode(true));
        this.line_32.appendChild(this.color_square.cloneNode(true));
        this.line_32.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 11; i++) {
            this.line_32.appendChild(this.black_square.cloneNode(true));
        }
        this.line_32.appendChild(this.lighter_square.cloneNode(true));
        this.line_32.appendChild(this.lighter_square.cloneNode(true));
        this.line_32.appendChild(this.color_square.cloneNode(true));
        this.line_32.appendChild(this.black_square.cloneNode(true));

        //#########    line 33    #########

        this.line_33 = document.createElement('div');
        this.line_33.className = 'line';

        this.line_33.appendChild(this.black_square.cloneNode(true));
        this.line_33.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 13; i++) {
            this.line_33.appendChild(this.color_square.cloneNode(true));
        }
        this.line_33.appendChild(this.darker_square.cloneNode(true));
        this.line_33.appendChild(this.black_square.cloneNode(true));

        //#########    line 34    #########

        this.line_34 = document.createElement('div');
        this.line_34.className = 'line';

        this.line_34.appendChild(this.black_square.cloneNode(true));
        this.line_34.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 11; i++) {
            this.line_34.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_34.appendChild(this.black_square.cloneNode(true));
        this.line_34.appendChild(this.black_square.cloneNode(true));

        //#########    line 35    #########

        this.line_35 = document.createElement('div');
        this.line_35.className = 'line';

        for (let i = 0; i < 11; i++) {
            this.line_35.appendChild(this.black_square.cloneNode(true));
        }

        //#########    style    #########

        const style = document.createElement('style');
        style.innerHTML = `

            @keyframes moveForward {
                0% {
                    transform: translateY(10vw);
                    filter: brightness(1);
                }
                100% {
                    transform: translateY(0);
                    filter: brightness(0.8);
                }
            }
            
            .car-container.move-forward {
                animation: moveForward 0.3s ease-in-out;
            }
            
            @keyframes moveBackward {
                0% {
                    transform: translateY(-10vw);
                    filter: brightness(1);
                }
                100% {
                    transform: translateY(0);
                    filter: brightness(0.8);
                }
            }
            
            .car-container.move-backward {
                animation: moveBackward 0.3s ease-in-out;
            }

            @keyframes left_turn {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(-20deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }

            @keyframes right_turn {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(20deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }

            .left-turn {
                animation: left_turn 0.5s;
            }

            .right-turn {
                animation: right_turn 0.5s;
            }

            .car-container {
                position: absolute;
                left: ${this.left_align}vw;
                bottom: 20vw;               /* switch row of car */
                width: 5vw;
                height: 10vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                z-index: 3;
                transition: left 0.5s, transform 0.5s;
            }
            .black-square {
                width: 4%;
                height: 100%;
                background-color: black;
            }

            .white-square {
                width: 4%;
                height: 100%;
                background-color: white;
            }

            .color-square {
                width: 4%;
                height: 100%;
                background-color: ${this.color};
            }

            .darker-square {
                width: 4%;
                height: 100%;
            }

            .lighter-square {
                width: 4%;
                height: 100%;
            }

            .window-square {
                width: 4%;
                height: 100%;
                background-color: rgb(126, 255, 255);
            }

            .window-darker-square {
                width: 4%;
                height: 100%;
                background-color: rgb(0, 255, 255);
            }

            .line {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 100%;
                height: 2%;
            }
            
        `;
        this.shadowRoot.appendChild(style);

        this.container.appendChild(this.line_35);
        this.container.appendChild(this.line_34);
        this.container.appendChild(this.line_33);
        this.container.appendChild(this.line_32);
        this.container.appendChild(this.line_31);
        this.container.appendChild(this.line_30);
        this.container.appendChild(this.line_29);
        this.container.appendChild(this.line_28);
        for (let i = 0; i < 4; i++) {
            this.container.appendChild(this.line_27.cloneNode(true));
        }
        this.container.appendChild(this.line_26);
        this.container.appendChild(this.line_25);
        this.container.appendChild(this.line_24);
        this.container.appendChild(this.line_23);
        this.container.appendChild(this.line_22);
        this.container.appendChild(this.line_21);
        this.container.appendChild(this.line_20);
        this.container.appendChild(this.line_19);
        this.container.appendChild(this.line_18);
        this.container.appendChild(this.line_17);
        this.container.appendChild(this.line_16);
        this.container.appendChild(this.line_15);
        this.container.appendChild(this.line_14);
        this.container.appendChild(this.line_10);
        this.container.appendChild(this.line_13);
        this.container.appendChild(this.line_11);
        this.container.appendChild(this.line_11.cloneNode(true));
        this.container.appendChild(this.line_12);
        this.container.appendChild(this.line_11.cloneNode(true));
        this.container.appendChild(this.line_10.cloneNode(true));
        this.container.appendChild(this.line_10.cloneNode(true));
        this.container.appendChild(this.line_9);
        this.container.appendChild(this.line_8);
        this.container.appendChild(this.line_7);
        this.container.appendChild(this.line_6);
        this.container.appendChild(this.line_5);
        for (let i = 0; i < 3; i++) {
            this.container.appendChild(this.line_4.cloneNode(true));
        }
        this.container.appendChild(this.line_3);
        this.container.appendChild(this.line_2);
        this.container.appendChild(this.line_1);

        this.shadowRoot.appendChild(this.container);


    }

    laneChange(lane) {
        if (this.lane < lane) {
            // add class right-turn
            this.shadowRoot.querySelector('.car-container').className = 'car-container';
            requestAnimationFrame(() => {
                this.shadowRoot.querySelector('.car-container').className = 'car-container right-turn';
            });
        } else {
            // add class left-turn
            this.shadowRoot.querySelector('.car-container').className = 'car-container';
            requestAnimationFrame(() => {
                this.shadowRoot.querySelector('.car-container').className = 'car-container left-turn';
            });
        }

        this.lane = lane;

        switch (this.lane) {
            case 1:
                this.left_align = 4.4;
                break;
            case 2:
                this.left_align = 13.2;
                break;
            case 3:
                this.left_align = 22;
                break;
            case 4:
                this.left_align = 30.8;
                break;
            case 5:
                this.left_align = 39.6;
                break;
            default:
                this.left_align = 22;
                break;
        }
        this.shadowRoot.querySelector('.car-container').style.left = this.left_align + 'vw';
    }

    rowChange(row) {
        if (this.row < row) {
            // add class move-forward
            this.shadowRoot.querySelector('.car-container').className = 'car-container';
            requestAnimationFrame(() => {
                this.shadowRoot.querySelector('.car-container').className = 'car-container move-forward';
            });
        } else {
            // add class move-backward
            this.shadowRoot.querySelector('.car-container').className = 'car-container';
            requestAnimationFrame(() => {
                this.shadowRoot.querySelector('.car-container').className = 'car-container move-backward';
            });
        }

        this.row = row;

        switch (this.row) {
            case 2:
                this.bottom = 10;
                break;
            case 3:
                this.bottom = 20;
                break;
            case 4:
                this.bottom = 30;
                break;
            case 5:
                this.bottom = 40;
                break;
        }
        this.shadowRoot.querySelector('.car-container').style.bottom = this.bottom + 'vw';
    }

    handleKeyDown(event) {
        let lane;
        let row;

        switch (event.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (this.row < 5) {
                    row = this.row + 1;
                    this.rowChange(row);
                }
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (this.row > 3) {
                    row = this.row - 1;
                    this.rowChange(row);
                }
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (this.lane !== 1) {
                    lane = this.lane - 1;
                    this.laneChange(lane);
                }
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (this.lane !== 5) {
                    lane = this.lane + 1;
                    this.laneChange(lane);
                }
                break;
        }
    }

    handleMouseMovement(event) {
        const x = ((event.x / window.innerWidth) * 1000).toFixed(0);
        let lane;

        switch (true) {
            case (x < 369):
                if (this.lane != 1) {
                    lane = 1;
                    this.laneChange(lane);
                }
                break;
            case (369 <= x && x < 454):
                if (this.lane != 2) {
                    lane = 2;
                    this.laneChange(lane);
                }
                break;
            case (454 <= x && x < 541):
                if (this.lane != 3) {
                    lane = 3;
                    this.laneChange(lane);
                }
                break;
            case (541 <= x && x < 632):
                if (this.lane != 4) {
                    lane = 4;
                    this.laneChange(lane);
                }
                break;
            case (632 <= x):
                if (this.lane != 5) {
                    lane = 5;
                    this.laneChange(lane);
                }
                break;
        }
    }

    handleGyro(event) {
        const angle = event.beta.toFixed(0);
        let lane;

        switch (true) {
            case  (angle <= -20):
                if (this.lane !== 1) {
                    lane = 1;
                    this.laneChange(lane);
                }
                break;
            case (-20 < angle && angle <= -10):
                if (this.lane !== 2) {
                    lane = 2;
                    this.laneChange(lane);
                }
                break;
            case (-10 < angle && angle <= 10):
                if (this.lane !== 3) {
                    lane = 3;
                    this.laneChange(lane);
                }
                break;
            case (10 < angle && angle <= 20):
                if (this.lane !== 4) {
                    lane = 4;
                    this.laneChange(lane);
                }
                break;
            case (20 < angle):
                if (this.lane !== 5) {
                    lane = 5;
                    this.laneChange(lane);
                }
                break;
        }
    }

}

customElements.define('player-car', Player);