'use strict';

const Monito = require('monitos.io');

const api = {};

let monito;

api.openSocket = function (server, options) {
    Monito.openSocket(server, options);
};

api.closeSocket = function (server, options) {
    Monito.closeSocket(server, options);
};

api.start = function () {
    function delay(done) {
        setTimeout(done, 400);
    }
    monito = new Monito({
        register: (monito, next) => {
            delay(() => {
                next(null, 'getProfile');
            });
        },
        getProfile: (monito, next) => {
            delay(() => {
                next(null, {
                    browse: 4
                }, 'shop');
            });
        },
        browse: (monito, next) => {
            delay(() => {
                next(null, {
                    browse: (/* monito */) => 6
                }, 'shop');
            });
        },
        shop: (monito, next) => {
            delay(() => {
                next(null, 'logout');
            });
        },
        logout: (monito, next) => {
            delay(() => {
                next(null, 'register');
            });
        }
    }, 'register');
    monito.start();
};

api.stop = function () {

};

api.openSocket(9183);
api.start();

module.exports = api;