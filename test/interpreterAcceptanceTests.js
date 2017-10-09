var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Interpreter = require('../src/interpreter');


describe("Interpreter:", function () {

    var db = [
        "varon(juan).",
        "varon(pepe).",
        "varon(hector).",
        "varon(roberto).",
        "varon(alejandro).",
        "mujer(maria).",
        "mujer(cecilia).",
        "padre(juan, pepe).",
        "padre(juan, pepa).",
        "padre(hector, maria).",
        "padre(roberto, alejandro).",
        "padre(roberto, cecilia).",
        "hijo(X, Y) :- varon(X), padre(Y, X).",
        "hija(X, Y) :- mujer(X), padre(Y, X)."
    ];

    var interpreter = null;

    before(function () {
        // runs before all tests in this block
    });

    after(function () {
        // runs after all tests in this block
    });

    beforeEach(function () {
        // runs before each test in this block
        interpreter = new Interpreter();
        interpreter.parseDB(db);
    });

    afterEach(function () {
        // runs after each test in this block
    });


    describe('Interpreter Facts', function () {

        it('varon(juan) should be true', function () {
            assert(interpreter.checkQuery('varon(juan)'));
        });

        it('varon(maria) should be false', function () {
            assert(interpreter.checkQuery('varon(maria)') === false);
        });

        it('mujer(cecilia) should be true', function () {
            assert(interpreter.checkQuery('mujer(cecilia)'));
        });

        it('padre(juan, pepe) should be true', function () {
            assert(interpreter.checkQuery('padre(juan, pepe)') === true);
        });

        it('padre(mario, pepe) should be false', function () {
            assert(interpreter.checkQuery('padre(mario, pepe)') === false);
        });

    });

    describe('Interpreter Rules', function () {

        it('hijo(pepe, juan) should be true', function () {
            assert(interpreter.checkQuery('hijo(pepe, juan)') === true);
        });
        it('hija(maria, roberto) should be false', function () {
            assert(interpreter.checkQuery('hija(maria, roberto)') === false);
        });
        it('hijo(pepe, juan) should be true', function () {
            assert(interpreter.checkQuery('hijo(pepe, juan)'));
        });

    });

    describe('Broken db', function () {

	    it('interpreter.parseDB(db_broken) should be raise Error', function () {
		    var db_broken = [
			    "varon(juan).",
		            "varon(pepe).",
		            "hija(X, Y) :- mujer("
		    ];

		    var interpreter = new Interpreter();

		    expect(function () { interpreter.parseDB(db_broken); })
		    	.to.throw(Error)
			.with.property('message', 'Error al intentar parsear la linea numero 3: hija(X, Y) :- mujer(');
	    });

	    it('if db is broken => hijo(pepe, juan) should be null', function () {

		    var db_broken = [
			    "varon(juan).",
		            "varon(pepe).",
		            "padre(juan, pepe).",
		            "padre(juan, pepa).",
		            "hijo(X, Y) :- varon(X), padre(Y, X).",
		            "hija(X, Y) :- mujer("
		    ];
		    var interpreter = new Interpreter();

		    try {
			interpreter.parseDB(db_broken);
		    } catch(error) {
			// Ignoro Excepcion
			assert(interpreter.checkQuery('hijo(pepe, juan)') === null);
		    }
	    });

    });

    describe('Broken query', function () {
	    it('interpreter.checkQuery(\'hijo(pepe,) juan)\') should be raise Error', function () {

		    expect(function () { interpreter.checkQuery('hijo(pepe,) juan)'); })
			.to.throw(Error)
			.with.property('message', 'Consulta malformada!');
	    });
    });

});
