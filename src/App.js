import React, {useState} from 'react'
import PartList from "./PartList"
import Avatar from "./Avatar"
import './App.css'

function App() {
  const [body, setBody] = useState(1)
  const [hair, setHair] = useState(1)
  const [eyes, setEyes] = useState(1)
  const [facialhair, setFacialHair] = useState(1)
  const [mouth, setMouth] = useState(1)
  const [eyebrows, setEyebrows] = useState(1)
  const [glass, setGlass] = useState(1)
  const [earring, setEarring] = useState(1)
  const [hat, setHat] = useState(1)
  const [neckwear, setNeckwear] = useState(1)
  const [cloth1, setCloth1] = useState(1)
  const [cloth2, setCloth2] = useState(1)
  const [cloth3, setCloth3] = useState(1)
  

  const handleClick = (i) => {
    return i;
  };

  return (
  <div className='main'>
    <div className='avatar_wrap'>
      <Avatar 
        body={body} 
        hair={hair} 
        eyes={eyes} 
        facialhair={facialhair} 
        mouth={mouth} 
        eyebrows={eyebrows} 
        glass={glass} 
        earring={earring} 
        hat={hat} 
        neckwear={neckwear} 
        cloth1={cloth1} 
        cloth2={cloth2} 
        cloth3={cloth3}
      />
    </div>
    <div className="partlist">
      <div><PartList setBody={setBody} keyWord="body"/></div>
      <br/>
      <div><PartList setEyes={setEyes} keyWord="eyes"/></div>
      <br/>
      <div><PartList setHair={setHair} keyWord="hair"/></div>
      <br/>
      <div><PartList setFacialHair={setFacialHair}keyWord="facialhair"/></div>
      <br/>
      <div><PartList setMouth={setMouth} keyWord="mouth"/></div>
      <br/>
      <div><PartList setEyebrows={setEyebrows} setkeyWord="eyebrows"/></div>
      <br/>
      <div><PartList setGlass={setGlass} keyWord="glasses"/></div>
      <br/>
      <div><PartList setEarring={setEarring} keyWord="earrings"/></div>
      <br/>
      <div><PartList setHat={setHat} keyWord="hats"/></div>
      <br/>
      <div><PartList setNeckwear={setNeckwear} keyWord="neckwear"/></div>
      <br/>
      <div><PartList setCloth1={setCloth1} keyWord="cloth1"/></div>
      <br/>
      <div><PartList setCloth2={setCloth2} keyWord="cloth2"/></div>
      <br/>
      <div><PartList setCloth3={setCloth3} keyWord="cloth3"/></div>
    </div>
    
  </div>
  )
}

export default App