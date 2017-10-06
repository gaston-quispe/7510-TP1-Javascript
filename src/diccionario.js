var Diccionario = function (nombre, listaValores) {
	this.listaCheckeables = new Array();

	this.consultar = function(consulta) {
		for (var i = 0; i < this.listaCheckeables.length; i++) {
			if (this.listaCheckeables[i].consultar(this, consulta))
				return true;
		}
		return false;
	}
}

module.exports = Diccionario;
