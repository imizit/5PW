"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global Storage */



// Define the Particles JS Configurations used in the game
let particles = {
	"universe": {
		"particles": {
			"number": {
				"value": 0,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}
};

// Define the music used in the game.
const music = {
	"Theme": "_ghost_-_Reverie_(small_theme).mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};




// Define the backgrounds for each scene.
const scenes = {
	"Main": "monogatari-promo.svg",
	"background1": "background1.jpg",
	"background2": "background2.jpg",
	"background3": "background3.jpg",
	"background4": "background4.jpg",
	"background5": "background5.jpg"
};

// Define the Characters
const characters = {
	"p": {
		"Name": "{{player.name}}",
		"Color": "#ff3951"
	},
	"e": {
		"Name": "{{evelyn_name}}",
		"Color": "#00bfff",
		"Directory": "Character",
		"Images": {
			"smile": "eyes-close-smile.png",
			"mclose": "mouth-close.png",
			"mopen": "mouth-open.png",
			"dc": "dc.png"
		}
	}
};

let script = {
	// The game starts here.
	"English": {
		"Start": [
			{
				"Conditional": {
					"Condition": function () {
						return Storage.get("played") == "true";
					},
					"True": {
						"Choice": {
							"Text": "It seems you have already played the demo, do you wish to skip the introduction?",
							"Skip": {
								"Text": "Skip",
								"Do": "jump Topics"
							},
							"Continue": {
								"Text": "Continue",
								"Do": "jump Introduction"
							}
						}
					},
					"False": "jump Introduction"
				}
			}
		],

		"Introduction": [
			"clear",
			"scene black with fadeIn",
			{"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("PlayerName", input);
					storage.player.name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}},
			"centered You know?...",
			"centered At first, there was nothing, only void. A void so dark and silent...",
			"particles universe",
			"centered Then, suddenly, they started to appear...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 0;
					return true;
				},
			}},
			"particles universe",
			"p Is this a planet? It was not visible at first but little by little, it appeared well...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
			}},
			"particles universe",
			"p Exceptional colors and shapes, wow...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 50;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
			}},
			"particles universe",
			"p Everything I see indicates life...",
			"p Soon, we will get there...",
			"stop particles",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.line_linked.enable = true;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.line_linked.enable = false;
					return true;
				},
			}},
			"particles universe",
			"p Fasten your seatbelts and get ready...",
			"stop particles",

			"play music Theme",
			"scene background1",
			"show e smile center with fadeIn",
			
			"e Hey my friend {{PlayerName}}, welcome to our planet!",

			"p Wait... what? planet? Life on a planet other than Earth?",

			"show e mopen center with fadeIn",
			"e Welcome to Nebulithoria, explorers! Follow me to explore the wonders of our extraordinary planet and our unique way of life. Together, let's redefine our existence in this exceptional adventure.",
			"show e smile with fadeIn",
			"p Can you introduce me to your planet Nebulithoria?",
			"show e dc with fadeIn",
			"scene background2",
			"e In Nebulithoria, our planet is a hidden gem in a remote corner of the universe,",
			"e with vast turquoise fields bathed in sunlight by day and illuminated by two radiant moons at night.",
			"e Join me to explore our world's fascinating natural phenomena.",
			"scene background3",
			{"Function": {
				"Apply": function () {
					particles.universe.particles.number.value = 20;
					return true;
				},
				"Reverse": function () {
					particles.universe.particles.number.value = 10;
					return true;
				},
			}},
			"particles universe",
			"show e smile at center with fadeIn",
			"e Rain is a marvel in Nebulithoria. Low gravity allows giant, translucent drops to dance with the light as they gracefully fall to the ground.",

			"e Have you noticed how each drop becomes an ephemeral work of art, sculpting the beauty of our world?",
			"p Yes, I have indeed noticed how each drop becomes an ephemeral work of art, btw what is your name?",
			"e I don't have a name yet, but you can choose one for me.",
			
			{"Input": {
				"Text": "What should be my name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					Storage.set ("Evelyn_Name", input);
					storage.evelyn_name = input;
					return true;
				},
				"Warning": "Choose a nice name for me please."
			}},
			
			"show e Normal with fadeIn",
			"e {{evelyn_name}}... That's a lovely name! I love it!",
			"e Now, let's continue our journey.",
			"scene background4",
			"e Discover Bietra, a spherical turquoise plant thriving on the surface of yellow seas.",

			"e Its extraordinary leaves provide a majestic refuge for all forms of life.",
			"show e Happy with fadeIn",
			"scene background5",
			"e Welcome to our neighborhood, where homes reflect local geology, harmoniously blending human architecture with nature.",
			"e As guardians of this way of life, we've coexisted with our planet for centuries.",
			"e Your visit to Nebulithoria concludes here, but your cosmic exploration begins.",
			"e Imagination leads us toward a brighter future. It's an open invitation for all, young and old, to embark on a quest to discover the wonders of the universe.",
			"jump Topics",
		],

		"Topics": [
			"scene Classroom",
			"show e Happy with fadeIn",
			function () {
				Storage.set ("played", true);
				return true;
			},
			{"Choice":{
				"Text":	"Create your own world as part of the game.",
				"Animations":{
					"Text": "Create my own world",
					"Do": "link ./puzzle/"
				}
			}}
		]
	},
};
