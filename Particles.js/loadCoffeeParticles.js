document.addEventListener("DOMContentLoaded", configParticles);
document.addEventListener("mousemove", translateParticles);

/**
 * Configures the particles.
 * 
 * Configures the particles. Three layers will be present optimized
 * stereoscopically.
 * 
 * @version 0.0.2
 * @author DZ-FSDev
 */
function configParticles() {
    var json = {
        "particles": {
            "number": {
                "value": 0.25,
                "density": {
                    "enable": true,
                    "value_area": 100
                }
            },
            "color": {
                "value": "#ff9900"
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
                "value": 0.39,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.3,
                    "sync": false
                }
            },
            "size": {
                "value": 50,
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
                "speed": 10,
                "direction": "top-left",
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
                    "enable": false,
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
        "retina_detect": false
    }

    var json2 = {
        "particles": {
            "number": {
                "value": 1.25,
                "density": {
                    "enable": true,
                    "value_area": 100
                }
            },
            "color": {
                "value": "#EE8855"
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
                "value": 0.59,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.35,
                    "opacity_min": 0.3,
                    "sync": false
                }
            },
            "size": {
                "value": 50,
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
                "speed": 10,
                "direction": "top-left",
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
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
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
                    "duration": 5,
                    "opacity": 8,
                    "speed": 2
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
        "retina_detect": false
    }

    var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(json));

    particlesJS.load('particles-js', jsonUri, () => {
        console.log('callback - particles.js config loaded #1');
    });

    particlesJS.load('particles-js2', jsonUri, () => {
        console.log('callback - particles.js config loaded #2');
    });

    jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(json2));

    particlesJS.load('particles-js3', jsonUri, () => {
        console.log('callback - particles.js config loaded #3');
    });
}

/**
 * Translates the particle layers stereoscopically.
 * 
 * Translates the particle layers stereoscopically. To achieve this, the layers
 * proximal to the viewer is recommended to be exponentially blurred. Care
 * should be taken to avoid too many layers as lower powered devices render
 * blurring filters on the CPU.
 * 
 * @param {MouseEvent} e The mouse event for the particles to react to.
 * @version 0.0.3
 * @author DZ-FSDev
 */
function translateParticles(e){
    let $back = document.getElementById('particles-js');
    $back.style.left = -e.clientX / 30 + 'px';
    $back.style.top = -e.clientY / 30 + 'px';

    let $mid = document.getElementById('particles-js2');
    $mid.style.left = -e.clientX / 15 + 'px';
    $mid.style.top = -e.clientY / 15 + 'px';

    let $front = document.getElementById('particles-js3');
    $front.style.left = -e.clientX / 10 + 'px';
    $front.style.top = -e.clientY / 10 + 'px';
}
