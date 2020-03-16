import React from 'react';
import LeftLayer from './Views/LeftLayer';
import HomeContent from './Views/HomeContent';
import RightLayer from './Views/RightLayer';
import {} from 'reactstrap';
import "./assets/_less/master.css";

function App() {
  // let titleCategory = "Category List"
  let productInfo = {title:"Category List",name:"Adana"}
  return (
    <div>
      <div className="wrapper">
        <LeftLayer/>
        <HomeContent/>
        <RightLayer/>
      </div>    
    </div>
  );
}

export default App;