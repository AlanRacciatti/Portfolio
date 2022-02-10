import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                navbar: {
                    home: "Home",
                    about: "About",
                    services: "Services",
                    projects: "Projects",
                    contact: "Contact",
                    changeLanguage: "Cambiar a español"
                },
                home: {
                    typeWriter: {
                        first: "Full Stack Web Developer",
                        second: "Blockchain Developer",
                        third: "Freelancer"
                    },
                    aboutSection: {
                        presentation: {
                            heading: "Who am I?",
                            mainHeading: "ABOUT ME"
                        },
                        description: "I started programming at an early age and took it as a hobby. Right now I spend my time making solutions or personal projects. I offer diverse services as a freelancer. Take a look to my projects anytime!",
                        button: {
                            first: "Read more",
                            second: "Projects"
                        }
                    },
                    servicesSection: {
                        presentation: {
                            heading: "How can I help you?",
                            mainHeading: "SERVICES"
                        },
                        services: {
                            webDesign: {
                                title: "Frontend web development",
                                description: "I can make minimalist and elegant UI's with React.js and work with libraries/tools like i18n, Chart.js, MUI, etc."
                            },
                            webDevelopment: {
                                title: "Backend web development",
                                description: "I have experience working as a backend developer: Creating REST API's, working with databases and maintaining servers."
                            },
                            blockchainDevelopment: {
                                title: "Blockchain development",
                                description: "I've made smart contracts with Solidity and deployed them to the blockchain and interacted with them using Ethers.js"
                            }
                        }
                    },
                    projectsSection: {
                        presentation: {
                            heading: "Where I spend 80% of my time!",
                            mainHeading: "PROJECTS"
                        },
                        projects: {
                            hiltonMachine: {
                                title: "Hilton Machine",
                                description: "A minimalist and simple landing page for a grass cutting machine"
                            },
                            hedwigDashboard: {
                                title: "Hedwig Dashboard",
                                description: "This dashboard requests data from the Hedwig database and shows it with tables, charts, and images!"
                            },
                            hedwigLibrary: {
                                title: "Hedwig Library",
                                description: "A completely functional ecommerce. It allows users to register and login, as much as adding products to his cart and buying them"
                            }
                        },
                        projectsLink: "See all my projects!"
                    },
                    contactSection: {
                        presentation: {
                            heading: "Any doubt?",
                            mainHeading: "Chat with me"
                        },
                        contactButton: "Contact"
                    }
                }
            }
        },
        es: {
            translation: {
                navbar: {
                    home: "Inicio",
                    about: "Acerca de mi",
                    services: "Servicios",
                    projects: "Proyectos",
                    contact: "Contacto",
                    changeLanguage: "Change to english"
                },
                home: {
                    typeWriter: {
                        first: "Desarrollador Web Full Stack",
                        second: "Desarrollador blockchain",
                        third: "Freelancer"
                    },
                    aboutSection: {
                        presentation: {
                            heading: "¿Quién soy?",
                            mainHeading: "ACERCA DE MI"
                        },
                        description: "Comencé a programar a temprana edad como un pasatiempo. Actualmente me dedico a crear soluciones o proyectos personales. Ofrezco diversos servicios como freelancer. Echale un vistazo a mis proyectos cuando quieras!",
                        button: {
                            first: "Leer más",
                            second: "Proyectos"
                        }
                    },
                    servicesSection: {
                        presentation: {
                            heading: "¿Cómo te puedo ayudar?",
                            mainHeading: "SERVICIOS"
                        },
                        services: {
                            webDesign: {
                                title: "Desarrollo web frontend",
                                description: "Puedo crear interfaces de usuario elegantes y minimalistas. Utilizando variedad de librerías/herramientas como i18n, Chart.js, MUI, etc."
                            },
                            webDevelopment: {
                                title: "Desarrollo web backend",
                                description: "Tengo experiencia trabajando como desarrollador backend. Puedo crear API's REST trabajando con bases de datos y mantener servidores."
                            },
                            blockchainDevelopment: {
                                title: "Desarrollo blockchain",
                                description: "He creado y desplegado smart contracts con Solidity e interactuado con ellos usando Ethers.js"
                            }
                        }
                    },
                    projectsSection: {
                        presentation: {
                            heading: "Donde dedico el 80% de mi tiempo!",
                            mainHeading: "PROYECTOS"
                        },
                        projects: {
                            hiltonMachine: {
                                title: "Hilton Machine",
                                description: "Una landing page simple y minimalista para una máquina de cortar pasto."
                            },
                            hedwigDashboard: {
                                title: "Hedwig Dashboard",
                                description: "Este dashboard solicita información de la base de datos de Hedwig y la muestra mediantes tablas, gráficos e imágenes!"
                            },
                            hedwigLibrary: {
                                title: "Librería Hedwig",
                                description: "Un E-commerce completamente funcional. Permite a los usuarios registrarse e iniciar sesión, así como añadir productos a su carrito y comprarlos."
                            }
                        },
                        projectsLink: "Mira todos mis proyectos!" 
                    },
                    contactSection: {
                        presentation: {
                            heading: "¿Tenés dudas?",
                            mainHeading: "Comunicate conmigo"
                        },
                        contactButton: "Contacto"
                    }
                }
            }
        }
    }
})

export default i18n;