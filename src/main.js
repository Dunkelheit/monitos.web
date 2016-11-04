import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import App from './App';

Vue.use(VueSocketio, 'http://localhost:9183');

new Vue({
    sockets: {
        connect: function () {
            console.log('socket connected');
        }
    },
    el: '#app',
    template: '<App/>',
    components: {App}
});
