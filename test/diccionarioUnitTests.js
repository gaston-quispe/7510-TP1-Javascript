var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Diccionario = require('../src/diccionario');
var Parser = require('../src/parser');
var Definicion = require('../src/definicion');
var Consulta = require('../src/consulta');
var Regla = require('../src/regla');

describe("Diccionario", function () {

	var diccionario = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
		diccionario = new Diccionario();

		diccionario.addEvaluable(new Definicion("varon", ["juan"]));
		diccionario.addEvaluable(new Definicion("varon", ["pepe"]));
		diccionario.addEvaluable(new Definicion("varon", ["hector"]));
		diccionario.addEvaluable(new Definicion("varon", ["roberto"]));
		diccionario.addEvaluable(new Definicion("varon", ["alejandro"]));
		diccionario.addEvaluable(new Definicion("mujer", ["maria"]));
		diccionario.addEvaluable(new Definicion("mujer", ["cecilia"]));
		diccionario.addEvaluable(new Definicion("padre", ["juan", "pepe"]));
		diccionario.addEvaluable(new Definicion("padre", ["juan", "pepa"]));
		diccionario.addEvaluable(new Definicion("padre", ["hector", "maria"]));
		diccionario.addEvaluable(new Definicion("padre", ["roberto", "alejandro"]));
		diccionario.addEvaluable(new Definicion("padre", ["roberto", "cecilia"]));
		diccionario.addEvaluable(new Regla("hijo", ["X","Y"], [new Definicion("varon", ["X"]), new Definicion("padre", ["Y","X"])]));
		diccionario.addEvaluable(new Regla("hija", ["X","Y"], [new Definicion("mujer", ["X"]), new Definicion("padre", ["Y","X"])]));

	});

	afterEach(function () {
		// runs after each test in this block
	});


	describe('Diccionario tests', function () {

		it('consultar(new Definicion("varon", ["roberto"])) should be true', function () {
			var c = new Consulta("varon", ["roberto"]);
			assert(diccionario.consultar(c) === true);
		});

		// TODO: SOPORTAR NOMBRES CON ESPACIOS???????????????
		it('consultar(new Definicion("varon", ["facundo"])) should be false', function () {
			var c = new Consulta("varon", ["facundo"]);
			assert(diccionario.consultar(c) === false);
		});

		it('consultar(new Consulta("alien", ["roberto"])) should be false', function () {
			var c = new Consulta("alien", ["roberto"]);
			assert(diccionario.consultar(c) === false);
		});

		it('consultar(new Consulta("hija", ["cecilia", "roberto"])) should be true', function () {
			var c = new Consulta("hija", ["cecilia", "roberto"]);
			assert(diccionario.consultar(c) === true);
		});

		it('consultar(new Consulta("hija", ["cecilia", "juan"])) should be false', function () {
			var c = new Consulta("hija", ["cecilia", "juan"]);
			assert(diccionario.consultar(c) === false);
		});

		it('consultar(new Consulta("hijo", ["juan", "pepe"])) should be true', function () {
			var c = new Consulta("hijo", ["pepe", "juan"]);
			assert(diccionario.consultar(c) === true);
		});


	});


});
