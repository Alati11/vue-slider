const { createApp } = Vue;

createApp({
    data() {
        return {
            activeSlide: 0,
            slides: [
                { image: 'img/01.webp' },
                { image: 'img/02.webp' },
                { image: 'img/03.webp' },
                { image: 'img/04.webp' },
                { image: 'img/05.webp' }
            ]
        };
    },
    methods: {
        nextImage() {
            this.activeSlide++;
            if (this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
        },
        prevImage() {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        },
        changeImage(index) {
            this.activeSlide = index;
        }
    },
    mounted() {
        console.log("Vue magico");
    }
}).mount('#app');

