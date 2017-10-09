var Consulta = function (nombre, valores) {

	// EJEMPLO SEGUN: "padre(juan, pepe)"
	// "padre"
	var nombre = nombre;
	// ["juan", "pepe"]
	var valores = valores;

	this.getNombre = function() {
		return nombre;
	}

	this.getValores = function() {
		return valores;
	}
}

module.exports = Consulta;
