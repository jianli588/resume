import {useState} from 'react';
import './TextColumn.css';
import TypeWriterEffect from 'react-typewriter-effect';
import LinkIcon from '../../Common/LinkIcon.js'

const TextColumn = props =>{

    const [slideInDivClass, setSlideInDivClass] = useState("slide-from-left");
    const resolve = () =>{
        setSlideInDivClass("slide-from-left appear");
    }
    setTimeout(resolve, 3000);



    return (

        
        <div className="text-column-container">
            <div className="text-column-margin">
                <div className="typewriter-container">
                    <div className="typewriter title">
                        <TypeWriterEffect
                            startDelay={100}
                            cursorColor="black"
                            text="Hello!!!"
                            typeSpeed={100}
                            hideCursorAfterText={true}
                        />
                    </div>
                    <div className="typewriter">
                        <TypeWriterEffect
                            startDelay={1000}
                            cursorColor="black"
                            text="My Name is John,"
                            typeSpeed={100}
                            hideCursorAfterText={true}
                        />
                    </div>
                </div>
                <div className={slideInDivClass}>
                    <p>I am a student majoring in Computer Science at UTSC</p>
                    <LinkIcon></LinkIcon>
                </div>
            </div>
        </div>
    );
}

export default TextColumn;