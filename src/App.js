import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';
import Navbar from './Components/Navbar/Navbar.js'
import Page from './Components/PageContent/Page.js'
import Contact from './Components/Footer/Contact.js'

function App() {

  const [page, setPage] = useState(0);

  const myRef = useRef(null);
  const topOfPage = useRef(null);

  const selectPage = pageIndex =>
  {
    if(pageIndex === 3){
       myRef.current.scrollIntoView() 
    }
    else{
      setPage(pageIndex);
      topOfPage.current.scrollIntoView();
    }
  };



  return (
    <div>
      <div ref={topOfPage}></div>
      <Navbar choosePage={selectPage} pageNum={page}></Navbar>
      
      <Page pageNum={page} choosePage={selectPage}></Page>
      <Contact></Contact>
      <div ref={myRef}></div>
    </div>
  );
}

export default App;
