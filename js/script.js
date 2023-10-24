
const { createApp } = Vue

createApp({
    data: function() {
        return {
            currentIndex: 0,
            slides: [
                { // 0
                    image: 'img/01.webp',
                }, { // 1
                    image: 'img/02.webp',
                }, {
                    image: 'img/03.webp',
                }, {
                    image: 'img/04.webp',
                }, {
                    image: 'img/05.webp',
                }
            ],
        }
    },
    methods: {
        nextImage() {
            this.currentIndex++;
            if (this.currentIndex > this.currentIndex.slides.image.length-1 ) {
                this.currentIndex = 0;
            }
        },
        prevImage() {
            this.currentIndex--;
            if (this.currentIndex < 0 ) {
                this.currentIndex === this.currentIndex.slides.image.length -1;
            }        
        },
        changeImage() {
            this.currentIndex = thumbIndex;
        },
     },
    //  mounted ( ) {
    //     console.log (" Vue magico")
    //  }
}).mount('#app');
