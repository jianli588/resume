import LanguageLogo from '../ExperiencePageCommon/LanguageLogo.js'
import './ExperiencePageCard.css';
import './ProjectCard.css';
import { FaCode } from "react-icons/fa";
import { useState } from "react";

const ProjectCard = props =>{

    const [projectDescriptionClass, setProjectDescriptionClass] = useState("project-text");
    const [buttonText, setButtonText] = useState("Read More");
    const [textOutline, setTextOutline] = useState("project-text-outline");

    const toggleProjectText = () =>{
        setProjectDescriptionClass((prevState) => {
            if (prevState === "project-text"){
                return "project-text appear";
            };
            return "project-text";
        });

        setButtonText((prevState) => {
            if (prevState === "Read More"){
                return "Read Less";
            };
            return "Read More";
        });

        setTextOutline((prevState) => {
            if (prevState === "project-text-outline"){
                return "project-text-outline appear";
            };
            return "project-text-outline";
        });

    }


    return(        
        <div>
            <div className="project-title">
                <div className="experience-title">{props.title}</div>
                <a href={props.github} target="_blank" className="project-subtitle"><FaCode></FaCode></a>
            </div>

            <div className={"project-image-container"}>
                <img className="project-image" src={props.image}></img>
            </div>
            <div className="project-image-caption">
                <label className="experience-text">{props.imageCaption}</label>
            </div>

            <div className={projectDescriptionClass}>
                <div className={textOutline}></div>
                <div className="experience-text">{props.descriptionOne}</div>
                <div className="experience-text">{props.descriptionTwo}</div>
                <div className="experience-text">{props.descriptionThree}</div>
            </div>
            


            <div className="experience-subtitle">Technology Used</div>
            <div className="project-footer">
                <div>{props.relevantTechnology.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}</div>
                <button className="css-button-3d" onClick={toggleProjectText}>{buttonText}</button>
            </div>
        </div>
    );
}
//
export default ProjectCard;