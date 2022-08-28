import LanguageLogo from '../ExperiencePageCommon/LanguageLogo.js';
import './WorkExperienceCard.css';
import './ExperiencePageCard.css';

const WorkExperienceCard = props =>{

    
    return(
        <div className="work-card-margin">
            <div className="work-card-grid">
                <div className="company-info">
                    <div className="experience-title">{props.jobTitle}</div>
                    <div className="experience-subtitle">{props.location}</div>
                </div>

                <div>
                    <div className="date-info experience-subtitle">{props.date}</div>
                </div>
                <div className="experience-text">
                    <div className="experience-subtitle">Job Description</div>
                    <div className="experience-text">{props.description}</div>
                </div>
                <div className="experience-text">
                    <div className="experience-subtitle">Achievements</div>
                    <ul className="achievement-list">{props.achievement.map(dataPoint => <li className="achievement-list-item" key={dataPoint.key}>{dataPoint.data}</li>)}</ul>
                </div>
                
                
            </div>
            <div className="experience-subtitle">Technology Used</div>
            <div>{props.relevantTechnology.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}</div>
        </div>

    );

}

export default WorkExperienceCard;