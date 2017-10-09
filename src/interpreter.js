var Diccionario = require('../src/diccionario');
var Parser = require('../src/parser');
var Definicion = require('../src/definicion');
var Consulta = require('../src/consulta');
var Regla = require('../src/regla');
var ParserConsulta = require('../src/parserConsulta');
var ParserDefinicion = require('../src/parserDefinicion');
var ParserRegla = require('../src/parserRegla');


var Interpreter = function () {
	this.diccionario = new Diccionario();
	var parser = new Parser(new ParserConsulta(),
	 			[new ParserDefinicion(), new ParserRegla()]);

	this.parseDB = function (db) {
		for (var i = 0; i < db.length; i++)
			this.diccionario.addEvaluable(parser.parsearEvaluable(db[i]));
	}

	this.checkQuery = function (query) {
		var consulta = parser.parsearConsulta(query);
		return this.diccionario.consultar(consulta);
	}

}

module.exports = Interpreter;
