var Consulta = require('../src/consulta');

var ConsultaParametrica = function (nombre, parametros) {
	// EJEMPLO SEGUN: "padre(Y, X)"
	// "padre"
	var nombre = nombre;
	// ["Y", "X"]
	var parametros = parametros;

	this.getNombre = function() {
		return nombre;
	}

	this.reemplazarParametros = function (corresponencia) {
		var valores = [];

		for (var i = 0; i < parametros.length; i++)
			valores.push(corresponencia[parametros[i]]);

		return new Consulta(nombre, valores);
	}


}

module.exports = ConsultaParametrica;
