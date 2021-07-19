

 let a = document.querySelector('.contact__right-topic');
 console.log(a.innerHTML);

Quasar.lang.set(Quasar.lang.ru)
var app = new Vue({
    el: '#app',
    data: {
        message: 'holy shit!',
        text: '',
        ph: '',

        dense: false,
        model: null,
        options: [
            'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
        ],
        slide: 'style',
        lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
})