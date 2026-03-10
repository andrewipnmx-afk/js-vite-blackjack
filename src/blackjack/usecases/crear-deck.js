import _ from "underscore";

// export const miNombre= 'Andre';



// Esta función crea un nuevo deck
/**
 * Esta función crea un nuevo deck
 * @param {array <String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array <String>} tiposEspecialeas Ejempli: ['A','J','Q','K']
 * @returns {array <String>} retorna un nuevo deck
 */

export const crearDeck = (tiposDeCarta,tiposEspecialeas) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error ('tiposDeCarta es obligatorio como un arreglo de strings');

    if ( !tiposEspecialeas || tiposEspecialeas.length === 0) 
        throw new Error ('tiposEspeciales es obligatorio como un arreglo de strings')


    let deck= [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspecialeas ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
   
    return deck;
}

// export default crearDeck;