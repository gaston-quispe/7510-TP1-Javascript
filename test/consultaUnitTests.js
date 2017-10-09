var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Consulta = require('../src/consulta');

describe("Consulta unit tests:", function () {

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
		it('new Consulta() should be instanceof Consulta', function () {
			var consulta_creada = new Consulta("hijo", ["juan","pepe"]);

			assert(consulta_creada instanceof Consulta === true);
		});
	});
});
