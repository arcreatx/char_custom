import React, { useState } from 'react';


function Avatar({i, keyWord}) {
    const [avatar, setAvatar] = useState([])
    return (
        <div className="avatar">
            <img className="image" src={`character/body/1.png`} alt="" style={{"z-index":0}}/>
            <img className="image" src={`character/clothes/layer_1/1.png`} alt="" style={{"z-index":3}}/>
            <img className="image" src={`character/clothes/layer_2/1.png`} alt="" style={{"z-index":2}}/>
            <img className="image" src={`character/clothes/layer_3/1.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/eyebrows/1.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/eyes/1.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/facial_hair/1.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/hair/1.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/mouths/1.png`} alt="" style={{"z-index":10}}/>
            <img className="image" src={`character/accessories/earrings/1.png`} alt="" style={{"z-index":2}}/>
            <img className="image" src={`character/accessories/hats/1.png`} alt="" style={{"z-index":3}}/>
            <img className="image" src={`character/accessories/glasses/1.png`} alt="" style={{"z-index":1}}/>
            <img className="image" src={`character/accessories/neckwear/1.png`} alt="" style={{"z-index":4}}/>
        </div>
    )
}

export default Avatar