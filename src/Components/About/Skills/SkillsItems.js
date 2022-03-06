import htmlImg from '../../../assets/html-5.png'
import cssImg from '../../../assets/css-3.png'
import jsImg from '../../../assets/js.png'
import reactImg from '../../../assets/physics.png'
import nodeImg from '../../../assets/nodejs.png'
import expressImg from '../../../assets/express.jpg'
import mySqlImg from '../../../assets/mysql.png'
import sequelizeImg from '../../../assets/images.png'
import solidityImg from '../../../assets/descarga (5).png'
import bootstrapImg from '../../../assets/bootstrap.jpg'

const SkillsItems = [
    {
        title: 'Frontend',
        items: [
            {
                title: 'HTML5',
                image: htmlImg,
            },
            {
                title: 'CSS3',
                image: cssImg,
            },
            {
                title: 'Bootstrap',
                image: bootstrapImg,
            },
            {
                title: 'JavaScript',
                image: jsImg,
            },
            {
                title: 'React',
                image: reactImg,
            },
        ],
    },
    {
        title: 'Backend',
        items: [
            {
                title: 'NodeJS',
                image: nodeImg,
            },
            {
                title: 'Express',
                image: expressImg,
            },
            {
                title: 'MySQL',
                image: mySqlImg,
            },
            {
                title: 'Sequelize',
                image: sequelizeImg,
            },
            {
                title: 'Solidity',
                image: solidityImg,
            },
        ]
    }
]

export default SkillsItems