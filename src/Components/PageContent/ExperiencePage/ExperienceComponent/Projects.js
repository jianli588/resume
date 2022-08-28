import ProjectCard from './ProjectCard.js';

import './Projects.css';

const Projects = props =>{

    const ProjectData = [
        {title:"TLDR bot",
        key:1,
        github:"https://github.com/jianli588/TLDR_BOT",
        image:"TLDR_bot_API.png",
        imageCaption:"This is an image of the output after the API is given the URL to a CNN article.",
        descriptionOne:"TLDR bot is a python API that summarizes an article using the algorithm on SMMRY.com.",
        descriptionTwo:"The project was created as I became intrested in  macroeconomics, where I have to read a lot of articles. Not liking to read, I chose to write this API to summarize the articles for me.",
        descriptionThree:"I chose to use python because a lot of the tedious stuff could be taken care of for me by the vast amounts of libraries in Python,"
         + " One of the most notable one would be associating words with their word roots using spaCy, i.e: associating \"said\" with \"say\".",
        RelevantTech: [{key:"Python", source:"python.png"},{key:"flask", source:"flask.png"},
                                {key:"beautifulSoup", source:"beautifulSoup.png"},{key:"spaCy", source:"spaCy.png"}]}, 
                
        {title:"John Li Resume",
        key:2,
        github:"https://github.com/jianli588/resume",
        image:"John_Li_Resume.png",
        imageCaption:"This is an image of the home page of John Li Resume.",
        descriptionOne:"John Li Resume is my portfolio website aimed to demonstrate my abilities as a web developer and to showcase some of my recent projects, the project was created just after I have finished an Udemy course on React.",
        descriptionTwo:"Although I have learned Bootstrap, I have elected to not use it in this project as I realize that I had been primairly dependent on it and did not actually know much css. After completing this project, I feel that my CSS skills already improved significantly.",
        descriptionThree:" I consider this project the product of my learning journey of web development over the last few month. I am happy to see this project come to life and you can see my work. I will continually improve upon this website as I become more proficient in web development.",
        RelevantTech: [{key:"JavaScript", source:"javascript.png"},{key:"React", source:"react.png"},
                                {key:"css3", source:"css3.png"}]}
        

    ];


    return (
        <div className="project-margin">
            {ProjectData.map(dataPoint => <ProjectCard imageCaption={dataPoint.imageCaption} image={dataPoint.image} title={dataPoint.title} github={dataPoint.github} descriptionOne={dataPoint.descriptionOne} descriptionTwo={dataPoint.descriptionTwo} descriptionThree = {dataPoint.descriptionThree} relevantTechnology={dataPoint.RelevantTech} key={dataPoint.key}></ProjectCard>)}
        </div>

    );
}

export default Projects;