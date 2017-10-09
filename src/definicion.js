var Definicion = function (nombre, valores) {
	// EJEMPLO SEGUN: "padre(roberto, alejandro)"
	// "padre"
	this.nombre = nombre;
	// ["roberto", "alejandro"]
	this.valores = valores;

	this.iguales = function (evaluable) {
		if (!evaluable instanceof Definicion)
			return false;

		if (this.nombre !== evaluable.nombre)
			return false;

		if (this.valores.length !== evaluable.valores.length)
			return false;

		for (var i = 0; i < this.valores.length; i++)
			if (this.valores[i] !== evaluable.valores[i])
				return false;

		return true;
	}

	this.evaluar = function(consulta, diccionario) {
		if (consulta.nombre != this.nombre)
			return false;

		if (this.valores.length !== consulta.valores.length)
			return false;

		for (var i = 0; i < this.valores.length; i++)
			if (this.valores[i] !== consulta.valores[i])
				return false;

		return true;
	}


	this.reemplazarValores = function (corresponencia) {
		var nuevosValores = [];

		for (var i = 0; i < this.valores.length; i++)
			nuevosValores.push(corresponencia[this.valores[i]]);

		return new Definicion(nombre, nuevosValores);
	}


}

module.exports = Definicion;
