import About from './AboutPage/About.js';
import Contact from './ContactPage/Contact.js';
import Experience from './ExperiencePage/Experience.js';
import Home from './HomePage/Home.js';

import './Page.css';

const Page = props =>{

    let selectedPage = [<Home key={props.pageNum}></Home>];
    if(props.pageNum === 1){
        selectedPage = [<Experience key={props.pageNum}></Experience>];
    }
    else if(props.pageNum === 2){
        selectedPage = [<About key={props.pageNum}></About>];
    }
    else if(props.pageNum === 3){
        selectedPage = [<Contact key={props.pageNum}></Contact>];
    }
    return (<div className='page-container'>{selectedPage}</div>);
}

export default Page;