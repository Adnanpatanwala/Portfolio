// import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import SingleProjectPage from "./pages/SingleProjectPage";
function App() {
  return ( 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/project" element={<Projects/>}/>
      <Route path="/project/:id" element={<SingleProjectPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
