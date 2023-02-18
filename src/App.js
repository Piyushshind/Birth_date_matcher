
import React from "react";
//import Home from "./Componants/Pages/Home";
import Registration from "./Componants/Registration/Registration";
import {RecoilRoot} from 'recoil'
import './index.css';
function App() {
  return (

 <>
 <RecoilRoot>
     <Registration />

  {/* <Home /> */}
  </RecoilRoot>
  </>
  )
  }
   



export default App;
