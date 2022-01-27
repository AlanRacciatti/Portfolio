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
                                title: "Web design",
                                description: "Get your high-quality website and start showing yourself in the search engines! (e.g., presentation website, landing page)"
                            },
                            webDevelopment: {
                                title: "Web development",
                                description: "I can create and mantain your interactive website and save + read data with a database (e.g., e-commerce, blog)"
                            },
                            blockchainDevelopment: {
                                title: "Blockchain development",
                                description: "Dive into blockchain solutions and integrate them in your service! (e.g., manage crypto payments, nft collection portal)"
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
                            lolNftCollection: {
                                title: "League Of Legends NFT collection",
                                description: "Through this website users can mint an unique randomly-generated NFT and show it in the Opensea marketplace"
                            }
                        },
                        projectsLink: "See all my projects!"
                    },
                    contactSection: {
                        presentation: {
                            heading: "You have the idea",
                            mainHeading: "I make it real"
                        },
                        contactButton: "Contact me"
                    }
                }
            }
        },
        es: {
            translation: {
                navbar: {
                    home: "Inicio",
                    about: "Acerca de mi",
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
                                title: "Diseño web",
                                description: "Solicitá tu sitio web de alta calidad y comenzá a aparecer en los motores de búsqueda! (ejemplos: promoción de producto/servicio, página de presentación"
                            },
                            webDevelopment: {
                                title: "Desarrollo web",
                                description: "Puedo crear y mantener tu página web interactiva y guardar y mostrar información mediante una base de datos! (ejemplos: blog, e-commerce)"
                            },
                            blockchainDevelopment: {
                                title: "Desarrollo blockchain",
                                description: "Descubrí las soluciones que ofrece la blockchain e integralas en tu servicio! (ejemplo: administrar pagos en criptomonedas, colecciones nft)"
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
                            lolNftCollection: {
                                title: "Colección NFT League Of Legends",
                                description: "A través de este sitio los usuarios pueden mirar un NFT aleatorio el cual pueden ver en el marketplace Opensea."
                            }
                        },
                        projectsLink: "Mira todos mis proyectos!" 
                    },
                    contactSection: {
                        presentation: {
                            heading: "Vos tenés la idea",
                            mainHeading: "Yo la hago realidad"
                        },
                        contactButton: "Contactame"
                    }
                }
            }
        }
    }
})

export default i18n;