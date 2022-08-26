import {useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

import './Experience.css'
import ResumeSidebar from './ResumeSidebar.js'
import WorkExperience from './ExperienceComponent/WorkExperience.js'
import Projects from './ExperienceComponent/Projects.js'
import Education from './ExperienceComponent/Education.js'
import Skill from './ExperienceComponent/Skill.js'


const Experience = props =>{

    const [experienceClass, setExperienceClass] = useState("list-item");
    const [projectClass, setProjectClass] = useState("list-item");
    const [educationClass, setEducationClass] = useState("list-item");
    const [skillsClass, setSkillsClass] = useState("list-item");


    const [ workRef, workInView] = useInView();
    const [projectRef, projectInView] = useInView();
    const [ educationRef, educationInView] = useInView();
    const [ skillRef, skillInView] = useInView();

    const restoreDefault = () =>{
        setExperienceClass("list-item")
        setProjectClass("list-item")
        setEducationClass("list-item")
        setSkillsClass("list-item")


    };

    useEffect( () =>{
        restoreDefault();
        if (workInView){
            setExperienceClass("list-item in-view");
        }
        else if (projectInView){
            setProjectClass("list-item in-view");
        }

        else if (educationInView){
            setEducationClass("list-item in-view");
        }
        else if (skillInView){
            setSkillsClass("list-item in-view");
        }

    }, [workInView, projectInView, educationInView, skillInView]);


    return <div className="experience-container">
        <ResumeSidebar experienceClass={experienceClass} projectClass={projectClass} educationClass={educationClass} skillsClass={skillsClass}></ResumeSidebar>
        <div margin-top="4em">
            <div ref={workRef} id="workDiv"><WorkExperience></WorkExperience></div>

            <div ref={projectRef} id="projectDiv"><Projects></Projects></div>
            <div ref={educationRef} id="educationDiv"><Education></Education></div>
            <div ref={skillRef} id="skillDiv"><Skill ></Skill></div>
        </div>
    </div>
}




export default Experience;