var Consulta = require('../src/consulta');

var ConsultaParametrica = function (nombre, parametros) {
	// EJEMPLO SEGUN: "padre(Y, X)"
	// "padre"
	this.nombre = nombre;
	// ["Y", "X"]
	this.parametros = parametros;

	this.iguales = function (evaluable) {
		if (!evaluable instanceof ConsultaParametrica)
			return false;

		if (this.nombre !== evaluable.nombre)
			return false;

		if (this.parametros.length !== evaluable.parametros.length)
			return false;

		for (var i = 0; i < this.parametros.length; i++)
			if (this.parametros[i] !== evaluable.parametros[i])
				return false;

		return true;
	}

	this.reemplazarParametros = function (corresponencia) {
		var valores = [];

		for (var i = 0; i < this.parametros.length; i++)
			valores.push(corresponencia[this.parametros[i]]);

		return new Consulta(nombre, valores);
	}


}

module.exports = ConsultaParametrica;
