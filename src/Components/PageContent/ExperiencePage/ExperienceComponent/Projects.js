import ProjectCard from './ProjectCard.js';

const Projects = props =>{

    const ProjectData = [
        {title:"TLDR bot",
        key:1,
        github:"https://github.com/jianli588/TLDR_BOT",
        descriptionOne:"TLDR bot is a python API that summarizes an article using the <a className='project-card-link' href='https://smmry.com/about' target='_blank'>SMMRY algorithm</a>",
        descriptionTwo:"The project was created as I became intrested in  macroeconomics, where I have to read a lot of articles. Not liking to read, I chose to write this API to summarize the articles for me",
        descriptionThree:"I chose to use python because a lot of the tedious stuff could be taken care of for me by the vast amounts of libraries in Python,"
         + " One of the most notable one would be associating words with their word roots using spaCy, i.e: associating \"said\" with \"say\"",
        RelevantTech: [{key:"Python", source:"python.png"},{key:"flask", source:"flask.png"},
                                {key:"beautifulSoup", source:"beautifulSoup.png"},{key:"spaCy", source:"spaCy.png"}]}, 
                
        {title:"John Li Resume",
        key:2,
        github:"https://github.com/jianli588/resume",
        decriptionOne:"John Li Resume is my portfolio website aimed to demonstrate my abilities as a web developer and to showcase some of my recent projects, yhe project was created just after I have finished an Udemy course on React.",
        descriptionTwo:"Although I have learned Bootstrap, I have elected to not use it in this project as I realize that I had been primairly dependent on it and did not actually learn much css",
        descriptionThree:" I consider this project the product of my learning journey of web development over the last few month. I am happy to see this project come to life and you can see my work. I will continually improve upon this website as I become more proficient in web development.",
        RelevantTech: [{key:"JavaScript", source:"javascript.png"},{key:"React", source:"react.png"},
                                {key:"css3", source:"css3.png"}]}
        

    ];


    return (
        <div>
            {ProjectData.map(dataPoint => <ProjectCard relevantTechnology={dataPoint.RelevantTech} key={dataPoint.key}></ProjectCard>)}
        </div>

    );
}

export default Projects;