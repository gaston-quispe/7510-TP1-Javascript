var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Parser = require('../src/parser');

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
	         assert(parser.esReglaValida('hijo(X, Y) :- varon(X), padre(Y, X). should be true') === true);
	     });

	     it('esDefinicionValida(\'padre(juan, pepe).\') should be true', function () {
 	         assert(parser.esDefinicionValida('padre(juan, pepe).') === true);
 	     });

	//      it('parsearDefinicion(\'padre(juan, pepe).\') should be true', function () {
 // 	         assert(parser.esDefinicionValida('padre(juan, pepe).') === true);
 // 	     });
	     //
	//      it('lo que sea should be true', function () {
	//          console.log(parser.parsearRegla("hijo(X, Y) :- varon(X), padre(Y, X)."));
	//      });

    });
});
