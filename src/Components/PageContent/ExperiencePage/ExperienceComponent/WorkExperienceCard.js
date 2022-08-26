import LanguageLogo from '../ExperiencePageCommon/LanguageLogo.js'
import './WorkExperienceCard.css'

const WorkExperienceCard = props =>{

    
    return(
        <div className="work-card-margin">
            <div className="work-card-grid">
                <div className="company-info">
                    <div className="job-title">{props.jobTitle}</div>
                    <div className="job-subtitle">{props.location}</div>
                </div>

                <div>
                    <div className="date-info job-subtitle">{props.date}</div>
                </div>
                <div className="job-text">
                    <div className="job-subtitle">Job Description</div>
                    <div className="job-text">{props.description}</div>
                </div>
                <div className="job-text">
                    <div className="job-subtitle">Achievements</div>
                    <ul className="achievement-list">{props.achievement.map(dataPoint => <li className="achievement-list-item" key={dataPoint.key}>{dataPoint.data}</li>)}</ul>
                </div>
                
                
            </div>
            <div className="job-subtitle">Technology Used</div>
            <div>{props.relevantTechnology.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}</div>
        </div>

    );

}

export default WorkExperienceCard;