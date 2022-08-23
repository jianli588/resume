import {useState} from 'react';
import './ImageColumn.css';

const ImageColumn = props =>{

    const [slideInDivClass, setSlideInDivClass] = useState("image-container");
    const resolve = () =>{
        setSlideInDivClass("image-container appear");
        console.log("appear");
    }
    setTimeout(resolve, 3500);



    return(
    <div className={slideInDivClass}>
        <div className="image-border-one"></div>
        <div className="image-border-two"></div>
        <div className="image-border-three"></div>
        <div className="image-border-four"></div>

        <img className="image-size" src="selifie.jpg" alt="Italian Trulli"></img>

    </div>);
};


export default ImageColumn;