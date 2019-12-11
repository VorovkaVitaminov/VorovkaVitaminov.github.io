particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 18,
        "density": {
          "enable": true,
          "value_area": 150
        }
      },
      "color": {
        "value": "#ff9900", //random // #FFFFFF
      },
      "shape": {
        "type": "polygon", // circle edge triangle polygon star 
        "stroke": {
          "width": 30,
          "color": "#ff9900"
        },
        "polygon": {
          "nb_sides": 9
        }
      },
      "opacity": {
        "value": 50,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 400,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 200,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 700,
        "color": "#ff9900",
        "opacity": 5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 100,
        "direction": "top", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "out", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 10000,
          "rotateY": 10000
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "repulse" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 600,
        "size": 9,
        "duration": 1,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 350,
        "duration": 3
      },
      "push": {
        "particles_nb": 10
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);