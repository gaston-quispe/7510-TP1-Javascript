var Definicion = require('../src/definicion');

var Regla = function (nombre, parametros, consultasParametricas) {
	// EJEMPLO SEGUN: "hijo(X, Y) :- varon(X), padre(Y, X)"
	// "hijo"
	this.nombre = nombre;
	// ["x", "Y"]
	this.parametros = parametros;
	// [{nombre: "varon" parametros: ["X"]}, {nombre: "padre" parametros:["Y", "X"]}]
	this.consultasParametricas = consultasParametricas;

	this.iguales = function (evaluable) {
		if (!evaluable instanceof Regla)
			return false;

		if (this.nombre !== evaluable.nombre)
			return false;

		if (this.parametros.length !== evaluable.parametros.length)
			return false;

		if (this.consultasParametricas.length !== evaluable.consultasParametricas.length)
			return false;

		for (var i = 0; i < this.parametros.length; i++)
			if (this.parametros[i] !== evaluable.parametros[i])
				return false;

		for (var i = 0; i < this.consultasParametricas.length; i++)
			if (!this.consultasParametricas[i].iguales(evaluable.consultasParametricas[i]))
				return false;

		return true;
	}

	//TODO: Checkear igual cantidad de elementos en parametros y valores
	this.generarCorresponencia = function(parametros, valores) {
		var corresponencia = {};
		for (var i = 0; i < parametros.length; i++)
			corresponencia[parametros[i]] = valores[i];
		return corresponencia;
	}

	this.generarConsultas = function(consultaBase) {
		var corresponencia = this.generarCorresponencia(this.parametros, consultaBase.valores);
		var nuevasConsultas = [];
		for (var i = 0; i < this.consultasParametricas.length; i++) {
			nuevasConsultas.push(this.consultasParametricas[i].reemplazarParametros(corresponencia));
		}
		return nuevasConsultas;
	}

	this.evaluar = function(consulta, diccionario) {
		if (consulta.nombre !== this.nombre)
			return false;

		nuevasConsultas = this.generarConsultas(consulta);

		var exitos = 0;
		for (var i = 0; i < nuevasConsultas.length; i++)
			if (diccionario.consultar(nuevasConsultas[i]))
				exitos++;

		return exitos === nuevasConsultas.length;
	}

}

module.exports = Regla;
