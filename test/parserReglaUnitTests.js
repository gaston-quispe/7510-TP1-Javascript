var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ConsultaParametrica = require('../src/consultaParametrica');
var ParserRegla = require('../src/parserRegla');
var Regla = require('../src/regla');

describe("Definicion", function () {

	var parserRegla = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
		parserRegla = new ParserRegla();
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('ParserRegla test', function () {
		it('parserRegla.parsearLinea(\'hijo(X, Y) :- varon(X), padre(Y, X)\') should be OK', function () {
		     var regla_parseada = parserRegla.parsearLinea('hijo(X, Y) :- varon(X), padre(Y, X)');
		     var regla_creada = new Regla("hijo", ["X","Y"], [new ConsultaParametrica("varon", ["X"]), new ConsultaParametrica("padre", ["Y","X"])]);
		     assert(regla_creada.iguales(regla_parseada) === true);
		});

		it('parserRegla.parsearLinea(\'hijo(X, Y) :- vaX), padre(Y, X)\') should be null', function () {
		     var regla_parseada = parserRegla.parsearLinea('hijo(X, Y) :- vaX), padre(Y, X)');
		     assert(regla_parseada === null);
		});
	});
});
