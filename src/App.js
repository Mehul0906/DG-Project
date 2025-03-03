import logo from './logo_favion.png';
import './App.css';
// import Route from './com/Route';
import Router from './com/Route';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useCallback, useEffect } from 'react';
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";


function App() {
  useEffect(() => {
    Aos.init();
  })
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  
  return (
   <>



   <Router/>
   <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#ffffff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                  number: {
                    value: 20,
                    density: {
                      enable: true,
                      value_area: 700
                    }
                  },
                  color: {
                    value: "#132f54"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 1,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 0.3248308849205381,
                      opacity_min: 0.016241544246026904,
                      sync: false
                    }
                  },
                  size: {
                    value: 4.0085330152163807,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 30,
                      size_min: 0.8,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 0,
                    color: "#132f54",
                    opacity: 1,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 2.4,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 1840,
                      rotateY: 1840
                    } 
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab"
                    },
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 170.53621458328246,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 730.8694910712106,
                    size: 255.8043218749237,
                      duration: 3.816762897816322,
                      opacity: 0.2679854800594439,
                      speed: 3
                    },
                    repulse: {
                      distance: 138,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true
            }}
        />
   </>
  );
}

export default App;
