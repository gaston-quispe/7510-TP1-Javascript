var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Parser = require('../src/parser');
var Definicion = require('../src/definicion');
var Consulta = require('../src/consulta');
var Regla = require('../src/regla');

describe("Definicion", function () {

	var parser = null;

	before(function () {
		// runs before all tests in this block
	});

	after(function () {
		// runs after all tests in this block
	});

	beforeEach(function () {
		// runs before each test in this block
	});

	afterEach(function () {
		// runs after each test in this block
	});

	describe('Consulta test', function () {
		it('evaluar() should be true', function () {
			var d = new Definicion("padre", ["juan", "pepe"]);
			var c = new Consulta("padre", ["juan", "pepe"]);
			assert(d.evaluar(c) === true);
		});
	});
});
