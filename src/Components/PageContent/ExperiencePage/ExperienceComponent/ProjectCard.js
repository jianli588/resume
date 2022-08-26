import LanguageLogo from '../ExperiencePageCommon/LanguageLogo.js'

const ProjectCard = props =>{

    return(        
        <div>
            <div className="job-subtitle">Technology Used</div>
            <div>
                {props.relevantTechnology.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}
            </div>
        </div>
    );
}
//
export default ProjectCard;