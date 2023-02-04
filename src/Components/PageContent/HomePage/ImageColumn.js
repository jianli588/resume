import {useState} from 'react';
import './ImageColumn.css';

const ImageColumn = props =>{

    const [slideInDivClass, setSlideInDivClass] = useState("image-container");
    const resolve = () =>{
        setSlideInDivClass("image-container appear");
    }
    setTimeout(resolve, 3500);



    return(
    <div className={slideInDivClass}>
        <img className="image-size" src="selfie.jpg" alt="Image of John"></img>
    </div>);
};


export default ImageColumn;