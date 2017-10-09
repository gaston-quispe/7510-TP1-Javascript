var Diccionario = function () {
	var evaluables = new Array();

	this.addEvaluable = function (evaluable) {
		evaluables.push(evaluable);
	}

	this.consultar = function(consulta) {
		for (var i = 0; i < evaluables.length; i++)
			if (evaluables[i].evaluar(consulta, this))
				return true;

		return false;
	}
}

module.exports = Diccionario;
