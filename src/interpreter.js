var Diccionario = require('../src/diccionario');
var Parser = require('../src/parser');
var ParserConsulta = require('../src/parserConsulta');
var ParserDefinicion = require('../src/parserDefinicion');
var ParserRegla = require('../src/parserRegla');

var Interpreter = function () {
	var broken = false;
	var diccionario = new Diccionario();

	var parser = new Parser(new ParserConsulta(),
	 			[new ParserDefinicion(), new ParserRegla()]);

	this.parseDB = function (db) {
		for (var i = 0; i < db.length; i++) {
			var evaluable = parser.parsearEvaluable(db[i].replace(/\.$/, ""));
			if (evaluable === null) {
				broken = true;
				throw new Error("Error al intentar parsear la linea numero " + (i + 1) + ": " + db[i]);
			}
			diccionario.addEvaluable(evaluable);
		}
	}

	this.checkQuery = function (query) {
		if (broken)
			return null;
		var consulta = parser.parsearConsulta(query);
		return diccionario.consultar(consulta);
	}

}

module.exports = Interpreter;
