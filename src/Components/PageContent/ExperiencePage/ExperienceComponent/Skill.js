import './Skill.css';
import LanguageLogo from  '../ExperiencePageCommon/LanguageLogo.js';


const Skill = props =>{
    
    // python, Java, html, css3, github, git
    const comfortableTool = [{key:"Python", source:"python.png"}, {key:"Java", source:"java.png"}, {key:"HTML5", source:"html5.png"},
                             {key:"css3", source:"css3.png"}, {key:"Github", source:"github.png"}, {key:"Git", source:"git.png"}];
    //Bootstrap, react, javascript, MySQL, C#, C++
    const familiarTool = [{key:"BootStrap", source:"bootstrap.png"}, {key:"React", source:"react.png"}, {key:"JavaScript", source:"javascript.png"},
                        {key:"C++", source:"c++.png"}, {key:"MySQL", source:"mysql.png"}, {key:"C#", source:"csharp.png"}];
    //firebase, Node.js, AWS, Flask
    const learnTool = [{key:"Firebase", source:"firebase.png"}, {key:"Node.js", source:"node-js.png"}, {key:"AWS", source:"aws.png"},
                    {key:"Flask", source:"flask.png"}];


    return (
        <div className="skill-container">
            <div className="experience-subtitle">Tools I have been working comfortably with</div>
            <div>{comfortableTool.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}</div>
            <br></br>
            <div className="experience-subtitle">Tools I am familiar with...</div>
            <div>{familiarTool.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}</div>
            <br></br>
            <div className="experience-subtitle">Tools I am currently learning or want to learn...</div>
            <div>{learnTool.map(dataPoint => <LanguageLogo key={dataPoint.key} source={dataPoint.source} key_value={dataPoint.key}></LanguageLogo>)}</div>
        </div>
    )
}

export default Skill