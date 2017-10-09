var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ParserDefinicion = require('../src/parserDefinicion');
var Definicion = require('../src/definicion');
var Regla = require('../src/regla');

describe("ParserDefinicion unit tests:", function () {

	var parserRegla = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
		parserRegla = new ParserDefinicion();
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('Creacion test', function () {
		it('parsear(\'padre(juan, pepe)\') instanceof Definicion should be true', function () {
			var linea_parseada = parserRegla.parsearLinea('padre(juan, pepe)');
			assert(linea_parseada instanceof Definicion === true);
		});
	});
});
