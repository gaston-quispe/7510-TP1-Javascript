var Diccionario = function () {
	this.evaluables = new Array();

	this.addEvaluable = function (evaluable) {
		this.evaluables.push(evaluable);
	}

	this.consultar = function(consulta) {
		for (var i = 0; i < this.evaluables.length; i++)
			if (this.evaluables[i].evaluar(consulta, this))
				return true;

		return false;
	}
}

module.exports = Diccionario;
