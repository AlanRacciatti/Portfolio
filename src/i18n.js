import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
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
            changeLanguage: "Cambiar a español",
          },
          home: {
            typeWriter: {
              first: "Full Stack Web Developer",
              second: "Blockchain Developer",
              third: "Freelancer",
            },
            aboutSection: {
              presentation: {
                heading: "Who am I?",
                mainHeading: "ABOUT ME",
              },
              description:
                "I started programming at an early age and took it as a hobby. Right now I spend my time making solutions or personal projects. I'm actually looking for new challenges to work with other people and keep learning. Take a look to my projects anytime!",
              button: {
                first: "Read more",
                second: "Projects",
              },
            },
            servicesSection: {
              presentation: {
                heading: "How can I help you?",
                mainHeading: "SERVICES",
              },
              services: {
                webDesign: {
                  title: "Frontend web development",
                  description:
                    "I can make minimalist and elegant UI's with React.js and work with libraries/tools like i18n, Chart.js, Bootrstrap, etc.",
                },
                webDevelopment: {
                  title: "Backend web development",
                  description:
                    "I have experience working as a backend developer: Creating REST API's, working with databases and maintaining servers.",
                },
                blockchainDevelopment: {
                  title: "Blockchain development",
                  description:
                    "I've made smart contracts with Solidity and deployed them to the blockchain and interacted with them using Ethers.js",
                },
              },
            },
            projectsSection: {
              presentation: {
                heading: "Where I spend 80% of my time!",
                mainHeading: "PROJECTS",
              },
              projects: {
                hedwigDashboard: {
                  title: "Hedwig Dashboard",
                  description:
                    "This dashboard requests data from the Hedwig database and shows it with tables, charts, and images!",
                },
                coinflip: {
                  title: "Coinflip",
                  description: "Flip the coin and duplicate your ETH betted!",
                },
                chainlinkLottery: {
                  title: "Chainlink Lottery",
                  description:
                    "This blockchain-based app allows users to participate in lotteries in which the winner is randomly selected with Chainlink VRF.",
                },
                hedwigLibrary: {
                  title: "Hedwig Library",
                  description:
                    "A completely functional ecommerce. It allows users to register and login, as much as adding products to his cart and buying them",
                },
                axieBot: {
                  title: "Axie Infinity Bot",
                  description:
                    "Share your stats with your friends on Discord, check token prices and more!",
                },
                ethereumWavePortal: {
                  title: "Wave Portal",
                  description:
                    "Write your message to the Ethereum blockchain and send it through a smart contract in the Rinkeby network",
                },
                lolNft: {
                  title: "Lol NFT Portal",
                  description:
                    "Mint your unique NFT on this portal and exchange it on Opensea",
                },
              },
              projectsLink: "See all my projects!",
            },
            contactSection: {
              presentation: {
                heading: "Any doubt?",
                mainHeading: "Chat with me",
              },
              contactButton: "Contact",
            },
          },
          about: {
            heading: "Who am I?",
            typeWriter: {
              first: "Commited - Curious - Disciplined",
            },
            presentation: {
              first: {
                heading: "Welcome!",
                body: "Hello dear reader! My name is Alan Racciatti and this is the section where I speak a little about me. Feel free to contact me anytime if you have any questions or comments. I'm always happy to answer them!",
              },
              second: {
                heading: "About me",
                body: "I'm a curious person. I'm interested in topics like technology, programming, videogames, music, finances, cryptocurrencies, psychology, Web3, blockchain, etc. I like both giving and receiving help.",
              },
              third: {
                body: " I perceive myself as a disciplined person, always ready to learn new things and improve my skills. I'm a person who likes to work in a team and I'm always looking for new challenges and opportunities.",
              },
              fourth: {
                body: "In 2021 my friends introduced me into programming and I took it as a hobby, but when I realized how programming changes the world I decided I wanted to be part of it. Actually I work on real projects with great people and I'm always motivated to learn new things and meet new people.",
              },
              fifth: {
                heading: "Skills",
              },
            },
          },
          projects: {
            heading: "What I do?",
          },
          contact: {
            presentation: {
              heading: "Send me a message!",
              mainHeading: "CONTACT",
            },
            form: {
              name: {
                label: "Name",
                placeholder: "Your name",
              },
              email: {
                label: "Email",
                placeholder: "Email",
              },
              message: {
                label: "Message",
                placeholder: "Your message",
              },
              button: "Send me a message",
            },
          },
        },
      },
      es: {
        translation: {
          navbar: {
            home: "Inicio",
            about: "Acerca de mi",
            services: "Servicios",
            projects: "Proyectos",
            contact: "Contacto",
            changeLanguage: "Change to english",
          },
          home: {
            typeWriter: {
              first: "Desarrollador Web Full Stack",
              second: "Desarrollador blockchain",
              third: "Freelancer",
            },
            aboutSection: {
              presentation: {
                heading: "¿Quién soy?",
                mainHeading: "ACERCA DE MI",
              },
              description:
                "Comencé a programar a temprana edad como un pasatiempo. Actualmente me dedico a crear soluciones o proyectos personales. Actualmente estoy buscando nuevos desafíos para trabajar con otras personas y seguir aprendiendo. Echale un vistazo a mis proyectos cuando quieras!",
              button: {
                first: "Leer más",
                second: "Proyectos",
              },
            },
            servicesSection: {
              presentation: {
                heading: "¿Cómo te puedo ayudar?",
                mainHeading: "SERVICIOS",
              },
              services: {
                webDesign: {
                  title: "Desarrollo web frontend",
                  description:
                    "Puedo crear interfaces de usuario elegantes y minimalistas. Utilizando variedad de librerías/herramientas como i18n, Chart.js, Bootstrap, etc.",
                },
                webDevelopment: {
                  title: "Desarrollo web backend",
                  description:
                    "Tengo experiencia trabajando como desarrollador backend. Puedo crear API's REST trabajando con bases de datos y mantener servidores.",
                },
                blockchainDevelopment: {
                  title: "Desarrollo blockchain",
                  description:
                    "He creado y desplegado smart contracts con Solidity e interactuado con ellos usando Ethers.js",
                },
              },
            },
            projectsSection: {
              presentation: {
                heading: "Donde dedico el 80% de mi tiempo!",
                mainHeading: "PROYECTOS",
              },
              projects: {
                hedwigDashboard: {
                  title: "Hedwig Dashboard",
                  description:
                    "Este dashboard solicita información de la base de datos de Hedwig y la muestra mediantes tablas, gráficos e imágenes!",
                },
                coinflip: {
                  title: "Coinflip",
                  description: "Gira la moneda y duplica tu apuesta en ETH!",
                },
                chainlinkLottery: {
                  title: "Chainlink Lottery",
                  description:
                    "Esta aplicación basada en blockchain permite a los usuarios participar de loterías, en las cuales el ganador es elegido aleatoriamente con Chainlink VRF.",
                },
                hedwigLibrary: {
                  title: "Librería Hedwig",
                  description:
                    "Un E-commerce completamente funcional. Permite a los usuarios registrarse e iniciar sesión, así como añadir productos a su carrito y comprarlos.",
                },
                axieBot: {
                  title: "Axie Infinity Bot",
                  description:
                    "¡Compartí tus estadísticas con tus amigos, mirá el precio de los tokens, y más!",
                },
                ethereumWavePortal: {
                  title: "Wave Portal",
                  description:
                    "Envía tu mensaje a la blockchain de Ethereum a través de un smart contract en la red de Rinkeby",
                },
                lolNft: {
                  title: "Lol NFT Portal",
                  description:
                    "Mintea tu NFT único en este portal e intercambialo en Opensea",
                },
              },
              projectsLink: "Mira todos mis proyectos!",
            },
            contactSection: {
              presentation: {
                heading: "¿Tenés dudas?",
                mainHeading: "Comunicate conmigo",
              },
              contactButton: "Contacto",
            },
          },
          about: {
            heading: "¿Quién soy?",
            typeWriter: {
              first: "Comprometido - Curioso - Disciplinado",
            },
            presentation: {
              first: {
                heading: "¡Bienvenido!",
                body: "¡Hola querido lector! Mi nombre es Alan Racciatti y esta es la sección en la que hablo un poco de mi. Sentite libre de contactarme en cualquier momento si tenés alguna pregunta o comentario. Siempre me alegrará responderte!",
              },
              second: {
                heading: "Sobre mí",
                body: "Soy una persona curiosa, me interesan tópicos como tecnología, programación, videojuegos, música, finanzas, criptomonedas, psicología, Web3, blockchain, etc. Me encanta tanto dar como recibir ayuda. ",
              },
              third: {
                body: "Me considero una persona disciplinada, siempre lista para adquirir nuevos conocimientos y mejorar mis habilidades. Me gusta trabajar en equipo y siempre estoy buscando nuevos desafíos y oportunidades.",
              },
              fourth: {
                body: "En 2021 mis amigos me introducieron en el mundo de la programación y lo tomé como un pasatiempo, pero cuando me di cuenta de como puede cambiar el mundo me di cuenta que quería ser parte de eso. Actualmente trabajo en proyectos reales con personas increíbles y siempre estoy motivado a aprender nuevas cosas y conocer nuevas personas.",
              },
              fifth: {
                heading: "Skills",
              },
            },
          },
          projects: {
            heading: "¿Qué hago?",
          },
          contact: {
            presentation: {
              heading: "Envíame un mensaje!",
              mainHeading: "CONTACTO",
            },
            form: {
              name: {
                label: "Nombre",
                placeholder: "Tu nombre",
              },
              email: {
                label: "Email",
                placeholder: "Email",
              },
              message: {
                label: "Mensaje",
                placeholder: "Tu mensaje",
              },
              button: "Enviame un mensaje",
            },
          },
        },
      },
    },
  });

export default i18n;
