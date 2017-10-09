var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Parser = require('../src/parser');
var Definicion = require('../src/definicion');
var Regla = require('../src/regla');
var ParserDefinicion = require('../src/parserDefinicion');
var ParserRegla = require('../src/parserRegla');
var ParserConsulta = require('../src/parserConsulta');

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
		parser = new Parser(new ParserConsulta(),
				[new ParserDefinicion(), new ParserRegla()])
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('Parser test', function () {

		it('parsear(\'padre(juan, pepe)\') instanceof Definicion should be true', function () {
			var linea_parseada = parser.parsearEvaluable('padre(juan, pepe)');
			assert(linea_parseada instanceof Definicion === true);
		});

		it('parsear(\'hijo(X, Y) :- varon(X), padre(Y, X)\') instanceof Regla should be true', function () {
		     var linea_parseada = parser.parsearEvaluable('hijo(X, Y) :- varon(X), padre(Y, X)');
		     assert(linea_parseada instanceof Regla === true);
		});

	});
});
