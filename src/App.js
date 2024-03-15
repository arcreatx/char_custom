import React, {useState, useEffect} from 'react'
import PartList from "./PartList"
import Avatar from "./Avatar"
import './App.css'

function App() {

  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
    facialhair: 17,
    earrings:32,
    hats:28,
    neckwear:18,
  };

  const getRandom = () => {
    setBody(Math.ceil(Math.random() * total.body));
    setHair(Math.ceil(Math.random() * total.hair));
    setEyes(Math.ceil(Math.random() * total.eyes));
    setFacialHair(Math.ceil(Math.random() * total.facialhair));
    setMouth(Math.ceil(Math.random() * total.mouth));
    setEyebrows(Math.ceil(Math.random() * total.eyebrows));
    setGlass(Math.ceil(Math.random() * total.glasses));
    setEarring(Math.ceil(Math.random() * total.earrings));
    setHat(Math.ceil(Math.random() * total.hats));
    setNeckwear(Math.ceil(Math.random() * total.neckwear));
    setCloth1(Math.ceil(Math.random() * total.clothing1));
    setCloth2(Math.ceil(Math.random() * total.clothing2));
    setCloth3(Math.ceil(Math.random() * total.clothing3));
  }

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
  
  useEffect(() => {
    getRandom()
  } 
  // eslint-disable-next-line
  , [])
  

  return (
    
  <div className='main'>
    <div className='title'>CHARACTER customization</div>
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
    <button onClick={getRandom}>Random</button>
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