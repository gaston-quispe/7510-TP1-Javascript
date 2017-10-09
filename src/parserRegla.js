var Regla = require('../src/regla');
var ParserConsultaParametrica = require('../src/parserConsultaParametrica');

var ParserRegla = function () {

	var esReglaValida = function(linea) {
		var patt = /^.*:-.*$/i;

		if (patt.test(linea)) {
			var izq_der = linea.split(':-');
			var izq = izq_der[0];
			var der = izq_der[1];

			patt_izq = /^\s*[a-z_]+\s*\(((\s*[A-Z]+\s*),)*((\s*[A-Z]+\s*))\)\s*$/;
			patt_der = /^\s*([a-z_]+\s*\(((\s*[A-Z]+\s*),\s*)*((\s*[A-Z]+\s*))\)\s*,\s*)*[a-z_]+\s*\(((\s*[A-Z]+\s*),)*((\s*[A-Z]+\s*))\)\s*$/;

			if (patt_izq.test(izq) && patt_der.test(der))
				return true;
		}
		return false;
	}

	var laReglaEsRecursiva = function (nombreRegla, consultasParametricas) {
		for (var i = 0; i < consultasParametricas.length; i++)
			if (consultasParametricas[i].getNombre() === nombreRegla)
				return true;
				
		return false;
	}

	this.parsearLinea = function(linea) {
		if (!esReglaValida(linea))
			return null;

		var sinespacios = linea.replace(/\s/g, "");
		var izq_der = sinespacios.split(':-');
		var izq = izq_der[0];
		var der = izq_der[1];

		var nombre = izq.split("(")[0];
		var parametros = izq.replace(/^.*\(|\s|\)$/g, "").split(",");
		var aux = der.replace(/\),/g, "\)#").split("#");

		var parserConsultaParametrica = new ParserConsultaParametrica();
		var consultasParametricas = [];
		for (var i = 0; i < aux.length; i++)
			consultasParametricas.push(parserConsultaParametrica.parsearLinea(aux[i]));

		if (laReglaEsRecursiva(nombre, consultasParametricas))
			return null;

		return new Regla(nombre, parametros, consultasParametricas);
	}
}

module.exports = ParserRegla;
