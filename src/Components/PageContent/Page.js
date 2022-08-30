
import Experience from './ExperiencePage/Experience.js';
import Home from './HomePage/Home.js';

import './Page.css';

const Page = props =>{

    let selectedPage = [<Home key={props.pageNum}  choosePage={props.choosePage}></Home>];
    if(props.pageNum === 1){
        selectedPage = [<Experience key={props.pageNum}></Experience>];
    }
    return (<div className='page-container'>{selectedPage}</div>);
}

export default Page;