import './Home.css';
import TextColumn from './TextColumn.js';
import ImageColumn from './ImageColumn.js';
import './Home.js';
const Home = props =>{

    return (
    <div className="home-container">
        
        <TextColumn choosePage={props.choosePage}></TextColumn>
        <ImageColumn></ImageColumn>
    </div>
    );
}

export default Home;