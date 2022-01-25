import nftProject from '../../../assets/nft-project.PNG';
import hiltonMachine from '../../../assets/hilton-machine.PNG';
import hedwigDashboard from '../../../assets/Hedwig-dashboard.PNG'

export const projectsItems = [
    {
        title: "Hilton Machine",
        url: {
            app: "https://hilton-machine.web.app",
            github: "https://github.com/AlanRacciatti/Ethereum-Wave-Portal"
        },
        img: hiltonMachine,
        projectDescription: "A minimalist and simple landing page for a grass cutting machine"
    },
    {
        title: "Hedwig Dashboard",
        url: {
            app: "https://hedwig-dashboard.web.app/",
            github: "https://github.com/AlanRacciatti/Hedwig-Dashboard-React"
        },
        img: hedwigDashboard,
        projectDescription: "This dashboard request data from the Hedwig database and shows it with Tables, Charts and Images!"
    },
    {
        title: "Ethereum Wave Portal",
        url: {
            app: "https://chin-nft-project.web.app/",
            github: "https://github.com/AlanRacciatti/Ethereum-Wave-Portal"
        },
        img: nftProject,
        projectDescription: "Wave me from the blockchain with this Ethereum dApp Portal! Remember that you can only Wave once every 15 minutes"
    }
]