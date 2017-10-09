var Consulta = require('../src/consulta');

var ParserConsulta = function () {

	var esConsultaValida = function(linea) {
		var patt = /^\s*[a-z_]+\s*\(((\s*[a-z_]+\s*),)*((\s*[a-z_]+\s*))\)\s*$/;
		return patt.test(linea);
	}

	this.parsearLinea = function(linea) {
		if (!esConsultaValida(linea))
			throw new Error( "Consulta malformada!");

		var nombre =  linea.split('(')[0];
		var valores = linea.split('(')[1].replace(" ", "").replace(/\)|\.$/g, "").split(",");

		return new Consulta(nombre, valores);
	}
}

module.exports = ParserConsulta;
