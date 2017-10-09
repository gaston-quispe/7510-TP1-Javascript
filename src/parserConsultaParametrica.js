var ConsultaParametrica = require('../src/consultaParametrica');

var ParserConsultaParametrica = function () {

	// Ejemplo valido: padre(Y, X)
	var esConsultaParametricaValida = function(linea) {
		var patt = /^\s*[a-z_]+\s*\(((\s*[A-Z]+\s*),)*((\s*[A-Z]+\s*))\)\s*$/;
		return patt.test(linea);
	}

	this.parsearLinea = function(linea) {
		if (!esConsultaParametricaValida(linea))
			return null;

		var nombre =  linea.split('(')[0];
		var valores = linea.split('(')[1].replace(" ", "").replace(/\)$/g, "").split(",");
		return new ConsultaParametrica(nombre, valores);
	}
}

module.exports = ParserConsultaParametrica;
