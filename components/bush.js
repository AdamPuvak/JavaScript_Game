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

        //########    wood square     ########

        this.wood_square = document.createElement('div');
        this.wood_square.className = 'wood-square';

        //########    darker wood square     ########

        this.darker_wood_square = document.createElement('div');
        this.darker_wood_square.className = 'darker-wood-square';

        //########    lighter wood square     ########

        this.lighter_wood_square = document.createElement('div');
        this.lighter_wood_square.className = 'lighter-wood-square';

        //########    line 1    ########

        this.line_1 = document.createElement('div');
        this.line_1.className = 'line';

        for (let i = 0; i < 21; i++) {
            this.line_1.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_1.appendChild(this.black_square.cloneNode(true));
        this.line_1.appendChild(this.black_square.cloneNode(true));
        this.line_1.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 14; i++) {
            this.line_1.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 2    ########

        this.line_2 = document.createElement('div');
        this.line_2.className = 'line';

        for (let i = 0; i < 19; i++) {
            this.line_2.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.lighter_square.cloneNode(true));
        this.line_2.appendChild(this.lighter_square.cloneNode(true));
        this.line_2.appendChild(this.lighter_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        this.line_2.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 12; i++) {
            this.line_2.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 3    ########

        this.line_3 = document.createElement('div');
        this.line_3.className = 'line';

        for (let i = 0; i < 18; i++) {
            this.line_3.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_3.appendChild(this.black_square.cloneNode(true));
        this.line_3.appendChild(this.lighter_square.cloneNode(true));
        this.line_3.appendChild(this.lighter_square.cloneNode(true));
        this.line_3.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_3.appendChild(this.color_square.cloneNode(true));
        }
        this.line_3.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 11; i++) {
            this.line_3.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 4    ########

        this.line_4 = document.createElement('div');
        this.line_4.className = 'line';

        for (let i = 0; i < 16; i++) {
            this.line_4.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        this.line_4.appendChild(this.lighter_square.cloneNode(true));
        this.line_4.appendChild(this.lighter_square.cloneNode(true));
        this.line_4.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_4.appendChild(this.color_square.cloneNode(true));
        }
        this.line_4.appendChild(this.darker_square.cloneNode(true));
        this.line_4.appendChild(this.darker_square.cloneNode(true));
        this.line_4.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 10; i++) {
            this.line_4.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 5    ########

        this.line_5 = document.createElement('div');
        this.line_5.className = 'line';

        for (let i = 0; i < 14; i++) {
            this.line_5.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_5.appendChild(this.black_square.cloneNode(true));
        this.line_5.appendChild(this.black_square.cloneNode(true));
        this.line_5.appendChild(this.lighter_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.lighter_square.cloneNode(true));
        this.line_5.appendChild(this.lighter_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.color_square.cloneNode(true));
        this.line_5.appendChild(this.darker_square.cloneNode(true));
        this.line_5.appendChild(this.darker_square.cloneNode(true));
        this.line_5.appendChild(this.darker_square.cloneNode(true));
        this.line_5.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_5.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 10; i++) {
            this.line_5.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 6    ########

        this.line_6 = document.createElement('div');
        this.line_6.className = 'line';

        for (let i = 0; i < 13; i++) {
            this.line_6.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_6.appendChild(this.black_square.cloneNode(true));
        this.line_6.appendChild(this.lighter_square.cloneNode(true));
        this.line_6.appendChild(this.lighter_square.cloneNode(true));
        this.line_6.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_6.appendChild(this.color_square.cloneNode(true));
        }
        this.line_6.appendChild(this.lighter_square.cloneNode(true));
        this.line_6.appendChild(this.color_square.cloneNode(true));
        this.line_6.appendChild(this.color_square.cloneNode(true));
        this.line_6.appendChild(this.darker_square.cloneNode(true));
        this.line_6.appendChild(this.darker_square.cloneNode(true));
        this.line_6.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_6.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_6.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 9; i++) {
            this.line_6.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 7    ########

        this.line_7 = document.createElement('div');
        this.line_7.className = 'line';

        for (let i = 0; i < 7; i++) {
            this.line_7.appendChild(this.transparent_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_7.appendChild(this.black_square.cloneNode(true));
        }
        this.line_7.appendChild(this.transparent_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        this.line_7.appendChild(this.lighter_square.cloneNode(true));
        this.line_7.appendChild(this.lighter_square.cloneNode(true));
        this.line_7.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 8; i++) {
            this.line_7.appendChild(this.color_square.cloneNode(true));
        }
        this.line_7.appendChild(this.darker_square.cloneNode(true));
        this.line_7.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_7.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_7.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_7.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 9; i++) {
            this.line_7.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 8    ########

        this.line_8 = document.createElement('div');
        this.line_8.className = 'line';

        for (let i = 0; i < 5; i++) {
            this.line_8.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_8.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_8.appendChild(this.color_square.cloneNode(true));
        }
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.color_square.cloneNode(true));
        this.line_8.appendChild(this.darker_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.lighter_square.cloneNode(true));
        this.line_8.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_8.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_8.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 9; i++) {
            this.line_8.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 9    ########

        this.line_9 = document.createElement('div');
        this.line_9.className = 'line';

        for (let i = 0; i < 4; i++) {
            this.line_9.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_9.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_9.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_9.appendChild(this.color_square.cloneNode(true));
        }
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.darker_square.cloneNode(true));
        this.line_9.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        this.line_9.appendChild(this.lighter_square.cloneNode(true));
        this.line_9.appendChild(this.color_square.cloneNode(true));
        this.line_9.appendChild(this.color_square.cloneNode(true));
        this.line_9.appendChild(this.color_square.cloneNode(true));
        this.line_9.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 9; i++) {
            this.line_9.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 10    ########

        this.line_10 = document.createElement('div');
        this.line_10.className = 'line';

        for (let i = 0; i < 3; i++) {
            this.line_10.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_10.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_10.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        this.line_10.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 7; i++) {
            this.line_10.appendChild(this.color_square.cloneNode(true));
        }
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        this.line_10.appendChild(this.darker_square.cloneNode(true));
        this.line_10.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_10.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_10.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_10.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_10.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 8; i++) {
            this.line_10.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 11    ########

        this.line_11 = document.createElement('div');
        this.line_11.className = 'line';

        for (let i = 0; i < 3; i++) {
            this.line_11.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_11.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_11.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_11.appendChild(this.darker_square.cloneNode(true));
        this.line_11.appendChild(this.darker_square.cloneNode(true));
        this.line_11.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 6; i++) {
            this.line_11.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_11.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_11.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_11.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_11.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 6; i++) {
            this.line_11.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_11.appendChild(this.black_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_11.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 12    ########
        this.line_12 = document.createElement('div');
        this.line_12.className = 'line';

        for (let i = 0; i < 3; i++) {
            this.line_12.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_12.appendChild(this.black_square.cloneNode(true));
        this.line_12.appendChild(this.lighter_square.cloneNode(true));
        this.line_12.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_12.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_12.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_12.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_12.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 6; i++) {
            this.line_12.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_12.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_12.appendChild(this.lighter_square.cloneNode(true));
        this.line_12.appendChild(this.lighter_square.cloneNode(true));
        this.line_12.appendChild(this.color_square.cloneNode(true));
        this.line_12.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_12.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_12.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_12.appendChild(this.color_square.cloneNode(true));
        this.line_12.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_12.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 13    ########

        this.line_13 = document.createElement('div');
        this.line_13.className = 'line';

        for (let i = 0; i < 3; i++) {
            this.line_13.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 8; i++) {
            this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (let i = 0; i < 7; i++) {
            this.line_13.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_13.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_13.appendChild(this.color_square.cloneNode(true));
        }
        this.line_13.appendChild(this.darker_square.cloneNode(true));
        this.line_13.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_13.appendChild(this.lighter_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_13.appendChild(this.color_square.cloneNode(true));
        }
        this.line_13.appendChild(this.black_square.cloneNode(true));
        this.line_13.appendChild(this.transparent_square.cloneNode(true));
        this.line_13.appendChild(this.transparent_square.cloneNode(true));

        //########    line 14    ########   
        this.line_14 = document.createElement('div');
        this.line_14.className = 'line';

        this.line_14.appendChild(this.transparent_square.cloneNode(true));
        this.line_14.appendChild(this.transparent_square.cloneNode(true));
        this.line_14.appendChild(this.transparent_square.cloneNode(true));
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.darker_square.cloneNode(true));
        this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 6; i++) {
            this.line_14.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_14.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_14.appendChild(this.color_square.cloneNode(true));
        }
        this.line_14.appendChild(this.darker_square.cloneNode(true));
        this.line_14.appendChild(this.darker_square.cloneNode(true));
        this.line_14.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_14.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_14.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_14.appendChild(this.black_square.cloneNode(true));
        this.line_14.appendChild(this.transparent_square.cloneNode(true));

        //########    line 15    ########

        this.line_15 = document.createElement('div');
        this.line_15.className = 'line';

        this.line_15.appendChild(this.transparent_square.cloneNode(true));
        this.line_15.appendChild(this.transparent_square.cloneNode(true));
        this.line_15.appendChild(this.transparent_square.cloneNode(true));
        this.line_15.appendChild(this.black_square.cloneNode(true));
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_15.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_15.appendChild(this.color_square.cloneNode(true));
        this.line_15.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_15.appendChild(this.lighter_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_15.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 5; i++) {
            this.line_15.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_15.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_15.appendChild(this.color_square.cloneNode(true));
        }
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        this.line_15.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_15.appendChild(this.lighter_square.cloneNode(true));
        this.line_15.appendChild(this.lighter_square.cloneNode(true));
        this.line_15.appendChild(this.color_square.cloneNode(true));
        this.line_15.appendChild(this.color_square.cloneNode(true));
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        this.line_15.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_15.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_15.appendChild(this.black_square.cloneNode(true));

        //########    line 16    ######## 

        this.line_16 = document.createElement('div');
        this.line_16.className = 'line';

        for (let i = 0; i < 4; i++) {
            this.line_16.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_16.appendChild(this.color_square.cloneNode(true));
        }
        this.line_16.appendChild(this.darker_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_16.appendChild(this.color_square.cloneNode(true));
        }
        this.line_16.appendChild(this.darker_square.cloneNode(true));
        this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_16.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_16.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.lighter_square.cloneNode(true));
        this.line_16.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_16.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_16.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_16.appendChild(this.black_square.cloneNode(true));

        //########    line 17    ########

        this.line_17 = document.createElement('div');
        this.line_17.className = 'line';

        this.line_17.appendChild(this.transparent_square.cloneNode(true));
        this.line_17.appendChild(this.transparent_square.cloneNode(true));
        this.line_17.appendChild(this.black_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_17.appendChild(this.color_square.cloneNode(true));
        }
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.color_square.cloneNode(true));
        this.line_17.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_17.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_17.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_17.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_17.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_17.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.color_square.cloneNode(true));
        this.line_17.appendChild(this.color_square.cloneNode(true));
        this.line_17.appendChild(this.lighter_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        this.line_17.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_17.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_17.appendChild(this.black_square.cloneNode(true));

        //########    line 18    ########

        this.line_18 = document.createElement('div');
        this.line_18.className = 'line';

        this.line_18.appendChild(this.transparent_square.cloneNode(true));
        this.line_18.appendChild(this.transparent_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.lighter_square.cloneNode(true));
        this.line_18.appendChild(this.lighter_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.darker_square.cloneNode(true));
        this.line_18.appendChild(this.darker_square.cloneNode(true));
        this.line_18.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_18.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_18.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_18.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_18.appendChild(this.wood_square.cloneNode(true));
        this.line_18.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_18.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_18.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_18.appendChild(this.lighter_square.cloneNode(true));
        this.line_18.appendChild(this.lighter_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.darker_square.cloneNode(true));
        this.line_18.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_18.appendChild(this.darker_square.cloneNode(true));
        this.line_18.appendChild(this.lighter_square.cloneNode(true));
        this.line_18.appendChild(this.lighter_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.color_square.cloneNode(true));
        this.line_18.appendChild(this.black_square.cloneNode(true));
        this.line_18.appendChild(this.transparent_square.cloneNode(true));

        //########    line 19    ########

        this.line_19 = document.createElement('div');
        this.line_19.className = 'line';

        this.line_19.appendChild(this.transparent_square.cloneNode(true));
        this.line_19.appendChild(this.transparent_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_19.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_19.appendChild(this.color_square.cloneNode(true));
        this.line_19.appendChild(this.color_square.cloneNode(true));
        this.line_19.appendChild(this.darker_square.cloneNode(true));
        this.line_19.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 6; i++) {
            this.line_19.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_19.appendChild(this.wood_square.cloneNode(true));
        this.line_19.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));
        this.line_19.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_19.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_19.appendChild(this.lighter_square.cloneNode(true));
        this.line_19.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_19.appendChild(this.color_square.cloneNode(true));
        }
        this.line_19.appendChild(this.darker_square.cloneNode(true));
        this.line_19.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_19.appendChild(this.lighter_square.cloneNode(true));
        this.line_19.appendChild(this.lighter_square.cloneNode(true));
        this.line_19.appendChild(this.color_square.cloneNode(true));
        this.line_19.appendChild(this.color_square.cloneNode(true));
        this.line_19.appendChild(this.darker_square.cloneNode(true));
        this.line_19.appendChild(this.darker_square.cloneNode(true));
        this.line_19.appendChild(this.black_square.cloneNode(true));

        //########    line 20    ########

        this.line_20 = document.createElement('div');
        this.line_20.className = 'line';

        this.line_20.appendChild(this.transparent_square.cloneNode(true));
        this.line_20.appendChild(this.transparent_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_20.appendChild(this.lighter_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_20.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_20.appendChild(this.darker_square.cloneNode(true));
        this.line_20.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_20.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_20.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_20.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_20.appendChild(this.wood_square.cloneNode(true));
        this.line_20.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.transparent_square.cloneNode(true));
        this.line_20.appendChild(this.black_square.cloneNode(true));
        this.line_20.appendChild(this.lighter_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        this.line_20.appendChild(this.darker_square.cloneNode(true));
        this.line_20.appendChild(this.darker_square.cloneNode(true));
        this.line_20.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_20.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_20.appendChild(this.lighter_square.cloneNode(true));
        this.line_20.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_20.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_20.appendChild(this.black_square.cloneNode(true));

        //########    line 21    ########

        this.line_21= document.createElement('div');
        this.line_21.className = 'line';

        this.line_21.appendChild(this.transparent_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.lighter_square.cloneNode(true));
        this.line_21.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_21.appendChild(this.color_square.cloneNode(true));
        }
        this.line_21.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_21.appendChild(this.darker_square.cloneNode(true));
        this.line_21.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_21.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_21.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_21.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_21.appendChild(this.wood_square.cloneNode(true));
        this.line_21.appendChild(this.wood_square.cloneNode(true));
        this.line_21.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.black_square.cloneNode(true));
        this.line_21.appendChild(this.wood_square.cloneNode(true));
        this.line_21.appendChild(this.lighter_square.cloneNode(true));
        this.line_21.appendChild(this.color_square.cloneNode(true));
        this.line_21.appendChild(this.darker_square.cloneNode(true));
        this.line_21.appendChild(this.darker_darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_21.appendChild(this.lighter_square.cloneNode(true));
        }
        this.line_21.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_21.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_21.appendChild(this.black_square.cloneNode(true));

        //########    line 22    ########

        this.line_22 = document.createElement('div');
        this.line_22.className = 'line';

        this.line_22.appendChild(this.transparent_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.lighter_square.cloneNode(true));
        this.line_22.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_22.appendChild(this.color_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_22.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_22.appendChild(this.darker_wood_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_22.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_22.appendChild(this.transparent_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.wood_square.cloneNode(true));
        this.line_22.appendChild(this.wood_square.cloneNode(true));
        this.line_22.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.black_square.cloneNode(true));
        this.line_22.appendChild(this.wood_square.cloneNode(true));
        this.line_22.appendChild(this.wood_square.cloneNode(true));
        this.line_22.appendChild(this.darker_square.cloneNode(true));
        this.line_22.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_22.appendChild(this.lighter_square.cloneNode(true));
        this.line_22.appendChild(this.lighter_square.cloneNode(true));
        this.line_22.appendChild(this.color_square.cloneNode(true));
        this.line_22.appendChild(this.color_square.cloneNode(true));
        this.line_22.appendChild(this.darker_square.cloneNode(true));
        this.line_22.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_22.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_22.appendChild(this.black_square.cloneNode(true));

        //########    line 23    ########

        this.line_23 = document.createElement('div');
        this.line_23.className = 'line';

        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.lighter_square.cloneNode(true));
        this.line_23.appendChild(this.lighter_square.cloneNode(true));
        this.line_23.appendChild(this.color_square.cloneNode(true));
        this.line_23.appendChild(this.color_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_23.appendChild(this.darker_square.cloneNode(true));
        }
        this.line_23.appendChild(this.color_square.cloneNode(true));
        this.line_23.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_23.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.transparent_square.cloneNode(true));
        this.line_23.appendChild(this.transparent_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.wood_square.cloneNode(true));
        this.line_23.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.wood_square.cloneNode(true));
        this.line_23.appendChild(this.wood_square.cloneNode(true));
        this.line_23.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_23.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_23.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_23.appendChild(this.lighter_square.cloneNode(true));
        this.line_23.appendChild(this.lighter_square.cloneNode(true));
        this.line_23.appendChild(this.color_square.cloneNode(true));
        this.line_23.appendChild(this.color_square.cloneNode(true));
        this.line_23.appendChild(this.darker_square.cloneNode(true));
        this.line_23.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_23.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_23.appendChild(this.black_square.cloneNode(true));
        this.line_23.appendChild(this.transparent_square.cloneNode(true));

        //########    line 24    ########

        this.line_24 = document.createElement('div');
        this.line_24.className = 'line';

        this.line_24.appendChild(this.black_square.cloneNode(true));
        this.line_24.appendChild(this.lighter_square.cloneNode(true));
        this.line_24.appendChild(this.lighter_square.cloneNode(true));
        this.line_24.appendChild(this.color_square.cloneNode(true));
        this.line_24.appendChild(this.darker_square.cloneNode(true));
        this.line_24.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_24.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_24.appendChild(this.lighter_square.cloneNode(true));
        this.line_24.appendChild(this.color_square.cloneNode(true));
        this.line_24.appendChild(this.color_square.cloneNode(true));
        this.line_24.appendChild(this.wood_square.cloneNode(true));
        this.line_24.appendChild(this.wood_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_24.appendChild(this.black_square.cloneNode(true));
        }
        this.line_24.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_24.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_24.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_24.appendChild(this.black_square.cloneNode(true));
        this.line_24.appendChild(this.wood_square.cloneNode(true));
        this.line_24.appendChild(this.wood_square.cloneNode(true));
        this.line_24.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_24.appendChild(this.black_square.cloneNode(true));
        this.line_24.appendChild(this.black_square.cloneNode(true));
        this.line_24.appendChild(this.lighter_square.cloneNode(true));
        this.line_24.appendChild(this.lighter_square.cloneNode(true));
        this.line_24.appendChild(this.color_square.cloneNode(true));
        this.line_24.appendChild(this.color_square.cloneNode(true));
        this.line_24.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_24.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_24.appendChild(this.black_square.cloneNode(true));
        this.line_24.appendChild(this.black_square.cloneNode(true));
        this.line_24.appendChild(this.transparent_square.cloneNode(true));
        this.line_24.appendChild(this.transparent_square.cloneNode(true));

        //########    line 25    ########

        this.line_25 = document.createElement('div');
        this.line_25.className = 'line';

        this.line_25.appendChild(this.transparent_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_25.appendChild(this.darker_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_25.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_25.appendChild(this.lighter_square.cloneNode(true));
        this.line_25.appendChild(this.lighter_square.cloneNode(true));
        this.line_25.appendChild(this.darker_square.cloneNode(true));
        this.line_25.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_25.appendChild(this.wood_square.cloneNode(true));
        this.line_25.appendChild(this.wood_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_25.appendChild(this.darker_wood_square.cloneNode(true));
        }
        this.line_25.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_25.appendChild(this.wood_square.cloneNode(true));
        this.line_25.appendChild(this.wood_square.cloneNode(true));
        this.line_25.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_25.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_25.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        this.line_25.appendChild(this.wood_square.cloneNode(true));
        this.line_25.appendChild(this.lighter_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_25.appendChild(this.color_square.cloneNode(true));
        }
        this.line_25.appendChild(this.darker_square.cloneNode(true));
        this.line_25.appendChild(this.darker_square.cloneNode(true));
        this.line_25.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_25.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_25.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_25.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 26    ########

        this.line_26 = document.createElement('div');
        this.line_26.className = 'line';

        this.line_26.appendChild(this.transparent_square.cloneNode(true));
        this.line_26.appendChild(this.transparent_square.cloneNode(true));
        this.line_26.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 6; i++) {
            this.line_26.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_26.appendChild(this.darker_square.cloneNode(true));
        this.line_26.appendChild(this.darker_square.cloneNode(true));
        this.line_26.appendChild(this.darker_darker_square.cloneNode(true));
        this.line_26.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_26.appendChild(this.wood_square.cloneNode(true));
        }
        this.line_26.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_26.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_26.appendChild(this.wood_square.cloneNode(true));
        this.line_26.appendChild(this.wood_square.cloneNode(true));
        this.line_26.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_26.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_26.appendChild(this.black_square.cloneNode(true));
        this.line_26.appendChild(this.black_square.cloneNode(true));
        this.line_26.appendChild(this.wood_square.cloneNode(true));
        this.line_26.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_26.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_26.appendChild(this.lighter_square.cloneNode(true));
        this.line_26.appendChild(this.color_square.cloneNode(true));
        this.line_26.appendChild(this.darker_square.cloneNode(true));
        this.line_26.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_26.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_26.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_26.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 27    ########

        this.line_27 = document.createElement('div');
        this.line_27.className = 'line';

        for (let i = 0; i < 3; i++) {
            this.line_27.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_27.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_27.appendChild(this.darker_darker_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_27.appendChild(this.black_square.cloneNode(true));
        }
        this.line_27.appendChild(this.transparent_square.cloneNode(true));
        this.line_27.appendChild(this.black_square.cloneNode(true));
        this.line_27.appendChild(this.wood_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_27.appendChild(this.lighter_wood_square.cloneNode(true));
        }
        this.line_27.appendChild(this.wood_square.cloneNode(true));
        this.line_27.appendChild(this.lighter_wood_square.cloneNode(true));
        this.line_27.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_27.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_27.appendChild(this.wood_square.cloneNode(true));
        this.line_27.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_27.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_27.appendChild(this.black_square.cloneNode(true));
        this.line_27.appendChild(this.color_square.cloneNode(true));
        this.line_27.appendChild(this.darker_square.cloneNode(true));
        this.line_27.appendChild(this.darker_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_27.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_27.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_27.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 28    ########

        this.line_28 = document.createElement('div');
        this.line_28.className = 'line';

        for (let i = 0; i < 4; i++) {
            this.line_28.appendChild(this.transparent_square.cloneNode(true));
        }
        for (let i = 0; i < 4; i++) {
            this.line_28.appendChild(this.black_square.cloneNode(true));
        }
        for (let i = 0; i < 5; i++) {
            this.line_28.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.darker_wood_square.cloneNode(true));
        for (let i = 0; i < 4; i++) {
            this.line_28.appendChild(this.lighter_wood_square.cloneNode(true));
        }
        this.line_28.appendChild(this.wood_square.cloneNode(true));
        this.line_28.appendChild(this.lighter_wood_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_28.appendChild(this.wood_square.cloneNode(true));
        }
        this.line_28.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.transparent_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));
        this.line_28.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_28.appendChild(this.darker_darker_square.cloneNode(true));
        }
        this.line_28.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 5; i++) {
            this.line_28.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 29    ########

        this.line_29 = document.createElement('div');
        this.line_29.className = 'line';

        for (let i = 0; i < 14; i++) {
            this.line_29.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_29.appendChild(this.black_square.cloneNode(true));
        this.line_29.appendChild(this.darker_wood_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_29.appendChild(this.lighter_wood_square.cloneNode(true));
        }
        for (let i = 0; i < 5; i++) {
            this.line_29.appendChild(this.wood_square.cloneNode(true));
        }
        this.line_29.appendChild(this.darker_wood_square.cloneNode(true));
        this.line_29.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 3; i++) {
            this.line_29.appendChild(this.transparent_square.cloneNode(true));
        }
        for (let i = 0; i < 3; i++) {
            this.line_29.appendChild(this.black_square.cloneNode(true));
        }
        for (let i = 0; i < 6; i++) {
            this.line_29.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 30    ########

        this.line_30 = document.createElement('div');
        this.line_30.className = 'line';

        for (let i = 0; i < 14; i++) {
            this.line_30.appendChild(this.transparent_square.cloneNode(true));
        }
        this.line_30.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 10; i++) {
            this.line_30.appendChild(this.darker_wood_square.cloneNode(true));
        }
        this.line_30.appendChild(this.black_square.cloneNode(true));
        for (let i = 0; i < 12; i++) {
            this.line_30.appendChild(this.transparent_square.cloneNode(true));
        }

        //########    line 31    ########

        this.line_31 = document.createElement('div');
        this.line_31.className = 'line';

        for (let i = 0; i < 14; i++) {
            this.line_31.appendChild(this.transparent_square.cloneNode(true));
        }
        for (let i = 0; i < 12; i++) {
            this.line_31.appendChild(this.black_square.cloneNode(true));
        }
        for (let i = 0; i < 12; i++) {
            this.line_31.appendChild(this.transparent_square.cloneNode(true));
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
                width: 2.63%;
                height: 100%;
                background-color: #15080d;
            }

            .color-square {
                width: 2.63%;
                height: 100%;
                background-color: #349633;
            }

            .darker-square {
                width: 2.63%;
                height: 100%;
                background-color: #246135;
            }

            .darker-darker-square {
                width: 2.63%;
                height: 100%;
                background-color: #1b3b26;
            }

            .lighter-square {
                width: 2.63%;
                height: 100%;
                background-color: #56b736;
            }

            .wood-square {
                width: 2.63%;
                height: 100%;
                background-color: #8b3b30;
            }

            .darker-wood-square {
                width: 2.63%;
                height: 100%;
                background-color: #571c20;
            }

            .lighter-wood-square {
                width: 2.63%;
                height: 100%;
                background-color: #571c20;
            }

            .transparent-square {
                width: 2.63%;
                height: 100%;
                background-color: transparent;
            }

            .line {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 100%;
                height: 1.315%;
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
        this.bush.appendChild(this.line_18);
        this.bush.appendChild(this.line_19);
        this.bush.appendChild(this.line_20);
        this.bush.appendChild(this.line_21);
        this.bush.appendChild(this.line_22);
        this.bush.appendChild(this.line_23);
        this.bush.appendChild(this.line_24);
        this.bush.appendChild(this.line_25);
        this.bush.appendChild(this.line_26);
        this.bush.appendChild(this.line_27);
        this.bush.appendChild(this.line_28);
        this.bush.appendChild(this.line_29);
        this.bush.appendChild(this.line_30);
        this.bush.appendChild(this.line_31);
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

customElements.define('bush-obstacle1', Bush);