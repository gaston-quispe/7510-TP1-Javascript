var Definicion = require('../src/definicion');

var ParserDefinicion = function () {

	var esDefinicionValida = function(linea) {
		var patt = /^.*:-.*$/i;

		return !patt.test(linea);
	}

	this.parsearLinea = function(linea) {
		if (!esDefinicionValida(linea))
			return null;

		var nombre =  linea.split('(')[0];
		var valores = linea.split('(')[1].replace(" ", "").replace(/\)|\.$/g, "").split(",");
		return new Definicion(nombre, valores);
	}
}

module.exports = ParserDefinicion;
