import React from 'react';
import PartItem from './PartItem';

function PartList({keyWord, setBody, setEyes, setFacialHair, setHair, setMouth, setEyebrows, setGlass, setHat, setEarring, setNeckwear, setCloth1, setCloth2, setCloth3}) {
    let list = [];
    switch(keyWord) {
        case "body" : 
            for ( let i = 1; i< 18; i++ ) {
                list.push(<button onClick={()=>setBody(i)}>< PartItem imgUrl={`character/body/${i}.png`}/></button>);
            }
            break;
        case "eyes" :
            for ( let i = 1; i < 25; i++ ) {
                list.push(<button onClick={()=>setEyes(i)}>< PartItem imgUrl={`character/eyes/${i}.png`}/></button>);
            }
            break;
        case "facialhair" :
            for ( let i = 1; i < 19; i++ ) {
                list.push(<button onClick={()=>setFacialHair(i)}>< PartItem imgUrl={`character/facial_hair/${i}.png`}/></button>);
            }
            break;
        case "hair" :
            for ( let i = 1; i < 74; i++ ) {
                list.push(<button onClick={()=>setHair(i)}>< PartItem imgUrl={`character/hair/${i}.png`}/></button>);
            }
            break;
        case "mouth" :
            for ( let i = 1; i < 25; i++ ) {
                list.push(<button onClick={()=>setMouth(i)}>< PartItem imgUrl={`character/mouths/${i}.png`}/></button>);
            }
            break;
        case "eyebrows" :
            for ( let i = 1; i < 16; i++ ) {
                list.push(<button onClick={()=>setEyebrows(i)}>< PartItem imgUrl={`character/eyebrows/${i}.png`}/></button>);
            }
            break;
        case "glasses" :
            for ( let i = 1; i < 18; i++ ) {
                list.push(<button onClick={()=>setGlass(i)}>< PartItem imgUrl={`character/accessories/glasses/${i}.png`}/></button>);
            }
            break;
        case "earrings" :
            for ( let i = 1; i < 33; i++ ) {
                list.push(<button onClick={()=>setEarring(i)}>< PartItem imgUrl={`character/accessories/earrings/${i}.png`}/></button>);
            }
            break;
        case "hats" :
            for ( let i = 1; i < 29; i++ ) {
                list.push(<button onClick={()=>setHat(i)}>< PartItem imgUrl={`character/accessories/hats/${i}.png`}/></button>);
            }
            break;
        case "neckwear" :
            for ( let i = 1; i < 19; i++ ) {
                list.push(<button onClick={()=>setNeckwear(i)}>< PartItem imgUrl={`character/accessories/neckwear/${i}.png`}/></button>);
            }
            break;
        case "cloth1" :
            for ( let i = 1; i < 6; i++ ) {
                list.push(<button onClick={()=>setCloth1(i)}>< PartItem imgUrl={`character/clothes/layer_1/${i}.png`}/></button>);
            }
            break;
        case "cloth2" :
            for ( let i = 1; i < 6; i++ ) {
                list.push(<button onClick={()=>setCloth2(i)}>< PartItem imgUrl={`character/clothes/layer_2/${i}.png`}/></button>);
            }
            break;
        case "cloth3" :
            for ( let i = 1; i < 10; i++ ) {
                list.push(<button onClick={()=>setCloth3(i)}>< PartItem imgUrl={`character/clothes/layer_3/${i}.png`}/></button>);
            }
            break;
        default : 
            break;
    };
    return (
        <div>{list}</div>
    )
}

export default PartList