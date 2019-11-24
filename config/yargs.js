const  direccion = {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    };

const argv = require('yargs')
                .command('ciudad','Describe las coordenadas de una ciudad', { direccion })
                .help()
                .argv;

module.exports = {
    argv,
}