var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Interpreter = require('../src/interpreter');


describe("Interpreter Pokemon", function () {

    var db = [
	    	"varon(ash).",
	    	"varon(tracey).",
	    	"mujer(misty).",
	    	"mujer(yenni).",
	    	"entrenador(ash).",
	    	"entrenador(misty).",
		"campeon(ash)",
	    	"pokemon(pikachu).",
	    	"pokemon(raichu).",
	    	"pokemon(bulbasaur).",
	    	"pokemon(charmander).",
	    	"pokemon(starmie).",
	    	"pokemon(psyduck).",
	    	"pokemon(gyarados).",
	    	"evolucion(pikachu, raichu).",
	    	"duenio(ash, pikachu).",
	    	"duenio(ash, balbasour).",
	    	"duenio(ash, charmander).",
	    	"duenio(misty, staryu).",
	    	"duenio(misty, psyduck).",
	    	"duenio(misty, goldeen).",
	    	"tipo(electrico).",
	    	"tipo(planta).",
	    	"tipo(fuego).",
	    	"tipo(agua).",
	    	"tipo(psiquico).",
	    	"tipo(volador).",
	    	"pokemon_tipo(pikachu, electrico).",
	    	"pokemon_tipo(raichu, electrico).",
	    	"pokemon_tipo(bulbasaur, planta).",
	    	"pokemon_tipo(charmander, fuego).",
	    	"pokemon_tipo(starmie, agua).",
	    	"pokemon_tipo(starmie, psiquico).",
	    	"pokemon_tipo(psyduck, agua).",
	    	"pokemon_tipo(gyarados, agua).",
	    	"pokemon_tipo(gyarados, volador).",
	    	"fuerte_contra(electrico, agua).",
	    	"fuerte_contra(agua, fuego).",
	    	"fuerte_contra(fuego, planta).",
	    	"fuerte_contra(volador, planta).",
	    	"fuerte_contra(volador, fuego).",
	    	"es_entrenador_mujer(X) :- mujer(X), entrenador(X).",
	    	"es_entrenador_varon(X) :- varon(X), entrenador(X).",
	    	"entrenador_x_tiene_pokemon_y_de_tipo_z(X, Y, Z) :- entrenador(X), pokemon(Y), tipo(Z), pokemon_tipo(Y,Z), duenio(X, Y).",
	    	"pokemon_x_de_tipo_y_es_fuerte_contra_tipo_z(X,Y,Z) :- pokemon(X), tipo(Y), tipo(Z), fuerte_contra(Y, Z).",
	    	"los_dos_pokemones_son_del_tipo_z(X,Y,Z) :- pokemon(X), pokemon(Y), pokemon_tipo(X,Z), pokemon_tipo(Y,Z).",
	    	"pokemon_x_evoluciona_a_y_de_tipo_z(X, Y, Z) :- pokemon(X), pokemon(Y), evolucion(X, Y), pokemon_tipo(Y,Z).",
		// Reglas anidadas
		"es_entrenador_mujer_x_de_pokemon_y_de_tipo_z(X,Y,Z) :- es_entrenador_mujer(X), pokemon_tipo(Y,Z)",
		"mastro_pokemon(X) :- es_entrenador_varon(X), campeon(X)",
		"maestra_pokemon(Y) :- es_entrenador_mujer(Y), campeon(Y)"
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

        it('entrenador(misty) should be true', function () {
            assert(interpreter.checkQuery('entrenador(misty)') === true);
        });

        it('entrenador(tracey) should be false', function () {
            assert(interpreter.checkQuery('entrenador(tracey)') === false);
        });

        it('fuerte_contra(agua, fuego) should be true', function () {
            assert(interpreter.checkQuery('fuerte_contra(agua, fuego)'));
        });

        it('     fuerte_contra      (     agua    ,    fuego    )    should be true', function () {
            assert(interpreter.checkQuery('     fuerte_contra      (     agua    ,    fuego    )   ') === true);
        });

    });

    describe('Interpreter Rules', function () {

	it('es_entrenador_mujer(misty) should be true', function () {
	    assert(interpreter.checkQuery('es_entrenador_mujer(misty)') === true);
	});
	it('es_entrenador_mujer(ash) should be false', function () {
	    assert(interpreter.checkQuery('es_entrenador_mujer(ash)') === false);
	});
	it('entrenador_x_tiene_pokemon_y_de_tipo_z(ash, pikachu, electrico) should be true', function () {
	    assert(interpreter.checkQuery('entrenador_x_tiene_pokemon_y_de_tipo_z(ash, pikachu, electrico)') === true);
	});
	it('pokemon_x_de_tipo_y_es_fuerte_contra_tipo_z(ash, humano, gaviotas) should be false', function () {
	    assert(interpreter.checkQuery('pokemon_x_de_tipo_y_es_fuerte_contra_tipo_z(ash, humano, gaviotas)') === false);
	});
	it('los_dos_pokemones_son_del_tipo_z(psyduck, gyarados, agua) should be true', function () {
	    assert(interpreter.checkQuery('los_dos_pokemones_son_del_tipo_z(psyduck, gyarados, agua)') === true);
	});
	it('   los_dos_pokemones_son_del_tipo_z   (     psyduck   ,   gyarados,     agua    )    should be true', function () {
	    assert(interpreter.checkQuery('   los_dos_pokemones_son_del_tipo_z   (     psyduck   ,   gyarados,     agua    )   ') === true);
	});
	it('pokemon_x_evoluciona_a_y_de_tipo_z(pikachu, raichu, electrico) should be true', function () {
	    assert(interpreter.checkQuery('pokemon_x_evoluciona_a_y_de_tipo_z(pikachu, raichu, electrico)') === true);
	});
	it('pokemon_x_evoluciona_a_y_de_tipo_z(pikachu, raichu, agua) should be false', function () {
	    assert(interpreter.checkQuery('pokemon_x_evoluciona_a_y_de_tipo_z(pikachu, raichu, agua)') === false);
	});

    });

    describe('Consultas no localizadas', function () {

	it('entrenador(no_estoy_en_la_base) should be false', function () {
	assert(interpreter.checkQuery('entrenador(no_estoy_en_la_base)') === false);
	});
	it('es_entrenador_mujer(no_estoy_en_la_base) should be false', function () {
	assert(interpreter.checkQuery('es_entrenador_mujer(no_estoy_en_la_base)') === false);
	});
	it('no_estoy_en_la_base(ash) should be false', function () {
	assert(interpreter.checkQuery('no_estoy_en_la_base(ash)') === false);
	});
	it('no_estoy_en_la_base(tampoco_estoy_en_la_base) should be false', function () {
	assert(interpreter.checkQuery('no_estoy_en_la_base(tampoco_estoy_en_la_base)') === false);
	});
	it('entrenador_x_tiene_pokemon_y_de_tipo_z(ash, pikachu) should be false', function () {
	assert(interpreter.checkQuery('entrenador_x_tiene_pokemon_y_de_tipo_z(ash, pikachu)') === false);
	});

    });

     describe('Consultas invalidas', function () {
	it('cosas_sin_formato_asdasd3$·$·$DASDWQW)EQWE)(()()) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('cosas_sin_formato_asdasd3$·$·$DASDWQW)EQWE)(()()');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('es_entrenador_mujer(maYuscula) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('es_entrenador_mujer(maYuscula)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('maYuscua(ash) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('maYuscua(ash)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('entrenador(maYuscua) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('entrenador(maYuscua)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('num3ro5(ash) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('num3ro5(ash)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('entrenador(num3ro) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('entrenador(num3ro)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('entrenador(num3ro) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('entrenador(num3ro)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('entrenador() should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('entrenador())');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	it('entrenador(,,) should be raise exception', function () {
	     var error = false;
	     try {
		    interpreter.checkQuery('entrenador(,,)');
	     } catch(e) {
		    error = true;
	     }
	     assert(error);
	});
	});

     describe('Reglas anidadas', function () {
	it('es_entrenador_mujer_x_de_pokemon_y_de_tipo_z(misty,starmie,agua) should be true', function () {
	 assert(interpreter.checkQuery('es_entrenador_mujer_x_de_pokemon_y_de_tipo_z(misty,starmie,agua)') === true);
	});
	it('mastro_pokemon(ash) should be true', function () {
	 assert(interpreter.checkQuery('mastro_pokemon(ash)') === true);
	});
	it('maestra_pokemon(misty) should be false', function () {
	 assert(interpreter.checkQuery('mastra_pokemon(misty)') === false);
	});
     });
});
