var Parser = function (parserConsulta, parsersDB) {
	var parserConsulta = parserConsulta
	var parsersDB = parsersDB;

	this.parsearConsulta = function (linea){
		return parserConsulta.parsearLinea(linea);
	}

	this.parsearEvaluable = function (linea) {
		for (var i = 0; i < parsersDB.length; i++) {
			var evaluable = parsersDB[i].parsearLinea(linea);
			if (evaluable)
				return evaluable;
		}
		return null;
	}
}

module.exports = Parser;
