const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        
        return `El clima de ${coords.direccion} es de ${temp}ºC`;
    } catch (error) {   
        return `No se pudo determinar la temperatura de ${direccion}`;
    } 
};

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
