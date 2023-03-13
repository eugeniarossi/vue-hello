'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Titolo random',
            altImg: 'random image',
            imgUrl: 'https://picsum.photos/id/237/200/300'       
        }
    }
}).mount('#app')