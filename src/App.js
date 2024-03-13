import React from 'react'
import PartList from "./PartList"
import Avatar from "./Avatar"
import './App.css'

function App() {
  const handleClick = (i) => {
    return i;
  };
  return (
  <div className='main'>
    <div className='avatar_wrap'>
      <Avatar />
    </div>
    <div className="partlist">
      <div><PartList keyWord="body"/></div>
      <br/>
      <div><PartList keyWord="eyes"/></div>
      <br/>
      <div><PartList keyWord="hair"/></div>
      <br/>
      <div><PartList keyWord="facialhair"/></div>
      <br/>
      <div><PartList keyWord="mouth"/></div>
      <br/>
      <div><PartList keyWord="eyebrows"/></div>
      <br/>
      <div><PartList keyWord="glasses"/></div>
      <br/>
      <div><PartList keyWord="earrings"/></div>
      <br/>
      <div><PartList keyWord="hats"/></div>
      <br/>
      <div><PartList keyWord="neckwear"/></div>
      <br/>
      <div><PartList keyWord="cloth1"/></div>
      <br/>
      <div><PartList keyWord="cloth2"/></div>
      <br/>
      <div><PartList keyWord="cloth3"/></div>
    </div>
    
  </div>
  )
}

export default App