var Definicion = require('../src/definicion');

var Regla = function (nombre, parametros, definiciones) {
	this.nombre = nombre;
	this.parametros = parametros;
	this.definiciones = definiciones;

	this.iguales = function (evaluable) {
		if (!evaluable instanceof Regla)
			return false;

		if (this.nombre !== evaluable.nombre)
			return false;

		if (this.parametros.length !== evaluable.parametros.length)
			return false;

		if (this.definiciones.length !== evaluable.definiciones.length)
			return false;

		for (var i = 0; i < this.parametros.length; i++)
			if (this.parametros[i] !== evaluable.parametros[i])
				return false;

		for (var i = 0; i < this.definiciones.length; i++)
			if (!this.definiciones[i].iguales(evaluable.definiciones[i]))
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
		for (var i = 0; i < definiciones.length; i++)
			nuevasConsultas.push(definiciones[i].reemplazarParametros(corresponencia));

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
