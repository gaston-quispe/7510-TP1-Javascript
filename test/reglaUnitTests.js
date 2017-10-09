var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var ConsultaParametrica = require('../src/consultaParametrica');
var Regla = require('../src/regla');

describe("Regla unit tests:", function () {

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

	describe('Creacion test', function () {
		it('new Regla() should be instanceof Regla', function () {
			var regla_creada = new Regla("hijo", ["X","Y"], [new ConsultaParametrica("varon", ["X"]), new ConsultaParametrica("padre", ["Y","X"])]);

			assert(regla_creada instanceof Regla === true);
		});
	});
});
