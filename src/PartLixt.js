import React from 'react';
import PartItem from './PartItem';

function PartLixt({keyWord}) {
    let list = [];
    switch(keyWord) {
        case "body" : 
            for ( let i = 1; i< 18; i++ ) {
                list.push(< PartItem imgUrl={`character/body/${i}.png`}/>);
            }
            break;
        case "eyes" :
            for ( let i = 1; i < 25; i++ ) {
                list.push(< PartItem imgUrl={`character/eyes/${i}.png`}/>);
            }
            break;
        case "hair" :
            for ( let i = 1; i < 74; i++ ) {
                list.push(< PartItem imgUrl={`character/hair/${i}.png`}/>);
            }
            break;
        case "mouth" :
            for ( let i = 1; i < 25; i++ ) {
                list.push(< PartItem imgUrl={`character/mouth/${i}.png`}/>);
            }
            break;
        case "eyebrows" :
            for ( let i = 1; i < 26; i++ ) {
                list.push(< PartItem imgUrl={`character/eyebrows/${i}.png`}/>);
            }
            break;
        case "glasses" :
            for ( let i = 1; i < 19; i++ ) {
                list.push(< PartItem imgUrl={`character/accessories/glasses/${i}.png`}/>);
            }
            break;
        case "earrings" :
            for ( let i = 1; i < 33; i++ ) {
                list.push(< PartItem imgUrl={`character/accessories/earrings/${i}.png`}/>);
            }
            break;
        case "hats" :
            for ( let i = 1; i < 29; i++ ) {
                list.push(< PartItem imgUrl={`character/accessories/hats/${i}.png`}/>);
            }
            break;
        case "neckwear" :
            for ( let i = 1; i < 19; i++ ) {
                list.push(< PartItem imgUrl={`character/accessories/neckwear/${i}.png`}/>);
            }
            break;
        default : 
            break;
    };
    return (
        <div>{list}</div>
    )
}

export default PartLixt