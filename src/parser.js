+
var Definicion = require('../src/definicion');
var Regla = require('../src/regla');var Consulta = require('../src/consulta');

var Parser = function () {

	this.parsearConsulta = function(linea) {
		var nombre =  linea.split('(')[0];
		var valores = linea.split('(')[1].replace(" ", "").replace(/\)|\.$/g, "").split(",");
		return new Consulta(nombre, valores);
	}

	this.esDefinicionValida = function(linea) {
		return !this.esReglaValida(linea);
	}

	this.esReglaValida = function(linea) {
		var patt = /^.*:-.*$/i;

		return patt.test(linea);
	}

	this.parsearDefinicion = function(linea) {
		var nombre =  linea.split('(')[0];
		var valores = linea.split('(')[1].replace(" ", "").replace(/\)|\.$/g, "").split(",");
		return new Definicion(nombre, valores);
	}

	this.parsearRegla = function(linea) {
		var sinespacios = linea.replace(/\s/g, "").replace(/\.$/g, "");//.replace(/\)\.$/g, "");

		var izq_der = sinespacios.split(':-');
		var izq = izq_der[0];
		var der = izq_der[1];

		var nombre = izq.split("(")[0];
		var parametros = izq.replace(/^.*\(|\s|\)$/g, "").split(",");
		var aux = der.replace(/\),/g, "\)#").split("#");

		definiciones = [];
		for (var i = 0; i < aux.length; i++)
			definiciones.push(this.parsearDefinicion(aux[i]));

		return new Regla(nombre, parametros, definiciones);
	}

	this.parsear = function (linea) {
		if (this.esDefinicionValida(linea)) {
			return this.parsearDefinicion(linea);
		} else if (this.esReglaValida(linea)) {
			return this.parsearRegla(linea);
		} else {
			return nil;
		}
	}
}

module.exports = Parser;
