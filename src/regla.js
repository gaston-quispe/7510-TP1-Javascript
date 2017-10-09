var Definicion = require('../src/definicion');

var Regla = function (nombre, parametros, consultasParametricas) {
	// EJEMPLO SEGUN: "hijo(X, Y) :- varon(X), padre(Y, X)"
	// "hijo"
	var nombre = nombre;
	// ["x", "Y"]
	var parametros = parametros;
	// [{nombre: "varon" parametros: ["X"]}, {nombre: "padre" parametros:["Y", "X"]}]
	var consultasParametricas = consultasParametricas;

	this.generarCorresponencia = function(parametros, valores) {
		var corresponencia = {};
		for (var i = 0; i < parametros.length; i++)
			corresponencia[parametros[i]] = valores[i];
		return corresponencia;
	}

	this.generarConsultas = function(consultaBase) {
		var corresponencia = this.generarCorresponencia(parametros, consultaBase.getValores());
		var nuevasConsultas = [];
		for (var i = 0; i < consultasParametricas.length; i++) {
			nuevasConsultas.push(consultasParametricas[i].reemplazarParametros(corresponencia));
		}
		return nuevasConsultas;
	}

	this.evaluar = function(consulta, diccionario) {
		if (consulta.getNombre() !== nombre)
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
