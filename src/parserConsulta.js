var Consulta = require('../src/consulta');

var ParserConsulta = function () {

	var esConsultaValida = function(linea) {
		var patt = /^.*:-.*$/i;

		return !patt.test(linea);
	}

	this.parsearLinea = function(linea) {
		if (!esConsultaValida(linea))
			return null;

		var nombre =  linea.split('(')[0];
		var valores = linea.split('(')[1].replace(" ", "").replace(/\)|\.$/g, "").split(",");

		return new Consulta(nombre, valores);
	}
}

module.exports = ParserConsulta;
