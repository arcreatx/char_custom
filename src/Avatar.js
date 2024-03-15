import React from 'react';


function Avatar({body, eyes, hair, mouth, facialhair, eyebrows, earring,glass,hat,neckwear,cloth1,cloth2,cloth3}) {
    return (
        <div className="avatar">
            <img className="image" src={`character/body/${body}.png`} alt="" style={{"z-index":0}}/>
            <img className="image" src={`character/clothes/layer_1/${cloth1}.png`} alt="" style={{"z-index":3}}/>
            <img className="image" src={`character/clothes/layer_2/${cloth2}.png`} alt="" style={{"z-index":2}}/>
            <img className="image" src={`character/clothes/layer_3/${cloth3}.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/eyebrows/${eyebrows}.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/eyes/${eyes}.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/facial_hair/${facialhair}.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/hair/${hair}.png`} alt="" style={{"z-index":5}}/>
            <img className="image" src={`character/mouths/${mouth}.png`} alt="" style={{"z-index":10}}/>
            <img className="image" src={`character/accessories/earrings/${earring}.png`} alt="" style={{"z-index":2}}/>
            <img className="image" src={`character/accessories/hats/${hat}.png`} alt="" style={{"z-index":6}}/>
            <img className="image" src={`character/accessories/glasses/${glass}.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/accessories/neckwear/${neckwear}.png`} alt="" style={{"z-index":4}}/>
        </div>
    )
}

export default Avatar