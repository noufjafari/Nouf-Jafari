import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Educations from "./Educations";
import WorkExper from "./WorkExper";
import Projects from './Projects';
import ProDetails from "./proDetails";
import '../App.css';

export default function BrowserRouter() {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Educations" element={<Educations />}></Route>
        <Route path="/Work-Exper" element={<WorkExper />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>

        <Route path="/Project" element={<ProDetails/>} ></Route>
        <Route path="/Project/:id" element={<ProDetails/>}></Route>
        </Routes>

    </div>
  )
}
