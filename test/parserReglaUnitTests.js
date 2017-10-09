var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ConsultaParametrica = require('../src/consultaParametrica');
var ParserRegla = require('../src/parserRegla');
var Regla = require('../src/regla');

describe("ParserRegla unit tests:", function () {

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

	describe('Creacion test', function () {
		it('parserRegla.parsearLinea(\'hijo(X, Y) :- varon(X), padre(Y, X)\') should be instanceof Regla', function () {
		     var regla_parseada = parserRegla.parsearLinea('hijo(X, Y) :- varon(X), padre(Y, X)');
		     assert(regla_parseada instanceof Regla === true );
		});

		it('parserRegla.parsearLinea(\'hijo(X, Y) :- vaX), padre(Y, X)\') should be null', function () {
		     var regla_parseada = parserRegla.parsearLinea('hijo(X, Y) :- vaX), padre(Y, X)');
		     assert(regla_parseada === null);
		});
	});
});
