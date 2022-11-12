import MainHeader from "./Header/MainHeader";
import PageTotal from "./Page1/PageTotal";
import WebFontend from "./Detail/WebFontend";
import WebBackend from "./Detail/WebBackend";
import WebFullStack from "./Detail/WebFullStack";
import {  useSelector } from 'react-redux'
import { OpenClose } from './sideBarTrueFalse'
import SideBar from "./SideBar";
import { Routes , Route } from "react-router-dom"
function App() {
  const OpenCloseT = useSelector(OpenClose)
  return (
    <div className={`overflow-hidden  ${OpenCloseT ? 'h-screen md:h-auto ' : '' }`} id='MainScrool'  >
          <SideBar />
          <MainHeader />
         
        <Routes>
           <Route path="/" element={<PageTotal />} />
           <Route path="/WebFontend" element={<WebFontend />} />
           <Route path="/WebBackend" element={<WebBackend />} />
           <Route path="/WebFullStack" element={<WebFullStack />} />
        </Routes>  
    </div>
  );
}

export default App;
