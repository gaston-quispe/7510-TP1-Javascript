var Consulta = function (nombre, valores) {
	this.nombre = nombre;
	this.valores = valores;

	this.iguales = function (evaluable) {
		if (!evaluable instanceof Consulta)
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
}

module.exports = Consulta;
