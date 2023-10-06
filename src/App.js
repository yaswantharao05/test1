import './App.css';
import F1 from './components/F1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Blog } from './F2';
import "../node_modules/axios/dist/axios";
import Contact from './Contact';

// '../' --> goes back in folder


function App() {
  return (
    <div>
      {/* <Contact/> */}
      {/* <F1/>
      <br/>
      <Nav/> */}
      <HashRouter> {/* Since its a HashRouter we need to use the '#'(hashtag) http://localhost:3000/#/about to get components */}
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {/*
          http://localhost:3000/ =>  Opens Home component 
          http://localhost:3000/home =>  Opens Home component 
          http://localhost:3000/about =>  Opens About component 
          http://localhost:3000/blog =>  Opens Blog component 
          */}
         </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
