import React, {useState} from 'react'
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
  const getRandomNumber = (x) => {
    return Math.floor(Math.random() * x) + 1
  };
  const getRandom = () => {
    setBody(getRandomNumber(total.body));
    setHair(getRandomNumber(total.hair));
    setEyes(getRandomNumber(total.eyes));
    setFacialHair(getRandomNumber(total.facialhair));
    setMouth(getRandomNumber(total.mouth));
    setEyebrows(getRandomNumber(total.eyebrows));
    setGlass(getRandomNumber(total.glasses));
    setEarring(getRandomNumber(total.earrings));
    setHat(getRandomNumber(total.hats));
    setNeckwear(getRandomNumber(total.neckwear));
    setCloth1(getRandomNumber(total.clothing1));
    setCloth2(getRandomNumber(total.clothing2));
    setCloth3(getRandomNumber(total.clothing3));
  }

  const [body, setBody] = useState(getRandomNumber(total.body))
  const [hair, setHair] = useState(getRandomNumber(total.hair))
  const [eyes, setEyes] = useState(getRandomNumber(total.eyes))
  const [facialhair, setFacialHair] = useState(getRandomNumber(total.facialhair))
  const [mouth, setMouth] = useState(getRandomNumber(total.mouth))
  const [eyebrows, setEyebrows] = useState(getRandomNumber(total.eyebrows))
  const [glass, setGlass] = useState(getRandomNumber(total.glasses))
  const [earring, setEarring] = useState(getRandomNumber(total.earrings))
  const [hat, setHat] = useState(getRandomNumber(total.hats))
  const [neckwear, setNeckwear] = useState(getRandomNumber(total.neckwear))
  const [cloth1, setCloth1] = useState(getRandomNumber(total.clothing1))
  const [cloth2, setCloth2] = useState(getRandomNumber(total.clothing2))
  const [cloth3, setCloth3] = useState(getRandomNumber(total.clothing3))
  

  return (
  <>
    <div class="title-bg">
      <h2 class="title">
        <span class="title-word title-word-1">Char</span>
        <span class="title-word title-word-2">acter</span>
        <br/>
        <span class="title-word title-word-3">Custom</span>
        <span class="title-word title-word-4">ization</span>
      </h2>
    </div>
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
      <div className='button'><button onClick={getRandom} className='button-12'>RANDOM</button></div>
      </div>
      <div className="partlist">
        <div className='partname'>Body</div>
        <div><PartList handleClick={setBody} keyWord="body"/></div>
        <br/>
        <div className='partname'>Eyes</div>
        <div><PartList handleClick={setEyes} keyWord="eyes"/></div>
        <br/>
        <div className='partname'>Hair</div>
        <div><PartList handleClick={setHair} keyWord="hair"/></div>
        <br/>
        <div className='partname'>Beard</div>
        <div><PartList handleClick={setFacialHair}keyWord="facialhair"/></div>
        <br/>
        <div className='partname'>Mouth</div>
        <div><PartList handleClick={setMouth} keyWord="mouth"/></div>
        <br/>
        <div className='partname'>Eyebrows</div>
        <div><PartList handleClick={setEyebrows} keyWord="eyebrows"/></div>
        <br/>
        <div className='partname'>Glasses</div>
        <div><PartList handleClick={setGlass} keyWord="glasses"/></div>
        <br/>
        <div className='partname'>Earrings</div>
        <div><PartList handleClick={setEarring} keyWord="earrings"/></div>
        <br/>
        <div className='partname'>Hats</div>
        <div><PartList handleClick={setHat} keyWord="hats"/></div>
        <br/>
        <div className='partname'>Neckwear</div>
        <div><PartList handleClick={setNeckwear} keyWord="neckwear"/></div>
        <br/>
        <div className='partname'>Cloth(L1)</div>
        <div><PartList handleClick={setCloth1} keyWord="cloth1"/></div>
        <br/>
        <div className='partname'>Cloth(L2)</div>
        <div><PartList handleClick={setCloth2} keyWord="cloth2"/></div>
        <br/>
        <div className='partname'>Cloth(L3)</div>
        <div><PartList handleClick={setCloth3} keyWord="cloth3"/></div>
      </div>
    </div>
  </>
  )
}

export default App