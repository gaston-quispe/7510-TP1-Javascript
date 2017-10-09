var Regla = require('../src/regla');
var ParserDefinicion = require('../src/parserDefinicion');

var ParserRegla = function () {

	var esReglaValida = function(linea) {
		var patt = /^.*:-.*$/i;

		return patt.test(linea);
	}

	this.parsearLinea = function(linea) {
		if (!esReglaValida(linea))
			return null;

		var sinespacios = linea.replace(/\s/g, "").replace(/\.$/g, "");//.replace(/\)\.$/g, "");

		var izq_der = sinespacios.split(':-');
		var izq = izq_der[0];
		var der = izq_der[1];

		var nombre = izq.split("(")[0];
		var parametros = izq.replace(/^.*\(|\s|\)$/g, "").split(",");
		var aux = der.replace(/\),/g, "\)#").split("#");

		var parserDefinicion = new ParserDefinicion();
		definiciones = [];
		for (var i = 0; i < aux.length; i++)
			definiciones.push(parserDefinicion.parsearLinea(aux[i]));

		return new Regla(nombre, parametros, definiciones);
	}
}

module.exports = ParserRegla;
