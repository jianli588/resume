

import './ResumeSidebar.css'
const ResumeSidebar = props =>{

    return (
            <div>
                <div className="resume-navbar-margin sticky">
                    <ul className="resume-nav">
                        <li><a href="#workDiv" className= {props.experienceClass}>Experience</a></li>    
                        <li><a href="#projectDiv"  className= {props.projectClass}>Projects</a></li>    
                        <li><a href="#educationDiv" className= {props.educationClass}>Education</a></li>
                        <li><a href="#skillDiv" className= {props.skillsClass}>Skills</a></li>  
                    </ul>
                </div>
            </div>
    );
}


export default ResumeSidebar;