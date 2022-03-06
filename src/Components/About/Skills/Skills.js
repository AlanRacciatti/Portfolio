import React from 'react'
import './Skills.css'
import SkillsItems from './SkillsItems'

const Skills = () => {
  return (
    <div className="skills-container">
        {SkillsItems.map((item, index) => {
            return (
                <div key={index} className="skills-section-container">
                    <p className="skills-area">{item.title}</p>
                    <div className="skills-cards">
                    {item.items.map((item, index) => {
                        return (
                            <div key={index} className="skills-card">
                                <img src={item.image} alt={item.title} className="skill-img" />    
                                <p className='skill-item'>{item.title}</p>
                            </div>
                        )
                        })}
                    </div>
                </div>
            )
        })}
        <div className="skills-cards">
            <div className="skills-card">
            </div>
        </div>
    </div>
  )
}

export default Skills