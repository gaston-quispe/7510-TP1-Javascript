var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ParserConsultaParametrica = require('../src/parserConsultaParametrica');
var ConsultaParametrica = require('../src/consultaParametrica');

describe("ParserConsultaParametrica unit tests:", function () {

	var parserConsultaParametrica = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
		parserConsultaParametrica = new ParserConsultaParametrica();
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('Creacion test', function () {
		it('parsear(\'padre(X, Y)\') instanceof ConsultaParametrica should be true', function () {
			var linea_parseada = parserConsultaParametrica.parsearLinea('padre(X, Y)');
			assert(linea_parseada instanceof ConsultaParametrica === true);
		});
	});
});
