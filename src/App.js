import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar/Navbar.js'
import Page from './Components/PageContent/Page.js'

function App() {

  const [page, setPage] = useState(0);

  console.log(page);

  return (
    <div>
      <Navbar choosePage={setPage} pageNum={page}></Navbar>
      <Page pageNum={page}></Page>
    </div>
  );
}

export default App;
