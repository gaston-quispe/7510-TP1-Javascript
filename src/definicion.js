var Definicion = function (nombre, valores) {
	// EJEMPLO SEGUN: "padre(roberto, alejandro)"
	// "padre"
	var nombre = nombre;
	// ["roberto", "alejandro"]
	var valores = valores;

	this.evaluar = function(consulta, diccionario) {
		if (consulta.getNombre() != nombre)
			return false;

		if (valores.length !== consulta.getValores().length)
			return false;

		for (var i = 0; i < valores.length; i++)
			if (valores[i] !== consulta.getValores()[i])
				return false;

		return true;
	}


	this.reemplazarValores = function (corresponencia) {
		var nuevosValores = [];

		for (var i = 0; i < valores.length; i++)
			nuevosValores.push(corresponencia[valores[i]]);

		return new Definicion(nombre, nuevosValores);
	}


}

module.exports = Definicion;
