import './WorkExperience.css';
import WorkExperienceCard from './WorkExperienceCard.js';
//images from https://iconscout.com/icons
const WorkExperience = props =>{

        const jobOneDescription = "Working individually, I learned and extended upon the Supplier Registration Information Website while communicating with clients about the new features that should be added."
        const achievement = [
            {   key:1,
                data:"Successfully integrated a new section into the Supplier Registration Information using ColdFusion and PostgreSQL"},
                {   key:2,
                    data:"Contacted and discussed with clients about what should be integrated into the new page"}
                            ];
        const workOneRelevantTech = [{key:"ColdFusion", source:"coldfusion.png"},{key:"css3", source:"css3.png"},
                                {key:"Java", source:"java.png"},{key:"html5", source:"html5.png"}, {key:"PostgreSQL", source:"postgresql.png"}];
        

                          
    return (
        <div className="work-experience-container">
            <WorkExperienceCard
                jobTitle="Web Developer" 
                location="Public Service and Procurement Canada"
                date="2022-01 to 2022-04"
                description={jobOneDescription}
                achievement={achievement}
                relevantTechnology={workOneRelevantTech}
             ></WorkExperienceCard>
        </div>
    )
}
export default WorkExperience;