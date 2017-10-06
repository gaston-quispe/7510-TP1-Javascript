var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Parser = require('../src/parser');
var Definicion = require('../src/definicion');
var Regla = require('../src/regla');

describe("Parser", function () {

	var parser = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
		parser = new Parser();
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('Parser test', function () {
		it('esReglaValida(\'hijo(X, Y) :- varon(X), padre(Y, X).\') should be true', function () {
			assert(parser.esReglaValida('hijo(X, Y) :- varon(X), padre(Y, X).') === true);
		});

		it('esDefinicionValida(\'padre(juan, pepe).\') should be true', function () {
			assert(parser.esDefinicionValida('padre(juan, pepe).') === true);
		});

		it('parsearDefinicion(\'padre(juan, pepe).\') should be true', function () {
			var def_parseada = parser.parsearDefinicion('padre(juan, pepe).');
			var def_creada = new Definicion("padre", ["juan", "pepe"]);
			assert(def_creada.iguales(def_parseada) === true);
		});

		it('parsearRegla(\'hijo(X, Y) :- varon(X), padre(Y, X).\') should be true', function () {
		     var regla_parseada = parser.parsearRegla('hijo(X, Y) :- varon(X), padre(Y, X).');
		     var regla_creada = new Regla("hijo", ["X","Y"], [new Definicion("varon", ["X"]), new Definicion("padre", ["Y","X"])]);
		     assert(regla_creada.iguales(regla_parseada) === true);
		});

		it('parsear(\'padre(juan, pepe).\') instanceof Definicion should be true', function () {
			var linea_parseada = parser.parsear('padre(juan, pepe).');
			assert(linea_parseada instanceof Definicion === true);
		});

		it('parsear(\'hijo(X, Y) :- varon(X), padre(Y, X).\') instanceof Regla should be true', function () {
		     var linea_parseada = parser.parsear('hijo(X, Y) :- varon(X), padre(Y, X).');
		     assert(linea_parseada instanceof Regla === true);
		});

		// it('lo que sea should be true', function () {
		// 	var r = parser.parsearRegla("hijo(X, Y) :- varon(X), padre(Y, X).")
		// 	//console.log(r instanceof Regla);
		// 	console.log(r);
		// });

	});
});
