var Diccionario = require('../src/diccionario');
var Parser = require('../src/parser');
var Definicion = require('../src/definicion');
var Consulta = require('../src/consulta');
var Regla = require('../src/regla');


var Interpreter = function () {
	this.diccionario = new Diccionario();
	var parser = new Parser();

	this.parseDB = function (db) {
		for (var i = 0; i < db.length; i++)
			this.diccionario.addEvaluable(parser.parsear(db[i]));
	}

	this.checkQuery = function (query) {
		var consulta = parser.parsearConsulta(query);
		return this.diccionario.consultar(consulta);
	}

}

module.exports = Interpreter;
