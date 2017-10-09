var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ParserConsulta = require('../src/parserConsulta');
var Consulta = require('../src/consulta');
var Definicion = require('../src/definicion');
var Regla = require('../src/regla');

describe("ParserConsulta unit tests:", function () {

	var parserConsulta = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
		parserConsulta = new ParserConsulta();
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('Creacion test', function () {
		it('parsear(\'padre(juan, pepe)\') instanceof Consulta should be true', function () {
			var linea_parseada = parserConsulta.parsearLinea('padre(juan, pepe)');
			assert(linea_parseada instanceof Consulta === true);
		});
	});
});
