import React from 'react';
import PartItem from './PartItem';

function PartList({keyWord, handleClick}) {
    let list = [];
    switch(keyWord) {
        case "body" : 
            for ( let i = 1; i< 18; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/body/${i}.png`}/>);
            }
            break;
        case "eyes" :
            for ( let i = 1; i < 25; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/eyes/${i}.png`}/>);
            }
            break;
        case "facialhair" :
            for ( let i = 1; i < 18; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/facial_hair/${i}.png`}/>);
            }
            break;
        case "hair" :
            for ( let i = 1; i < 74; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/hair/${i}.png`}/>);
            }
            break;
        case "mouth" :
            for ( let i = 1; i < 25; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/mouths/${i}.png`}/>);
            }
            break;
        case "eyebrows" :
            for ( let i = 1; i < 16; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/eyebrows/${i}.png`}/>);
            }
            break;
        case "glasses" :
            for ( let i = 1; i < 18; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/accessories/glasses/${i}.png`}/>);
            }
            break;
        case "earrings" :
            for ( let i = 1; i < 33; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)}imgUrl={`character/accessories/earrings/${i}.png`}/>);
            }
            break;
        case "hats" :
            for ( let i = 1; i < 29; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/accessories/hats/${i}.png`}/>);
            }
            break;
        case "neckwear" :
            for ( let i = 1; i < 19; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/accessories/neckwear/${i}.png`}/>);
            }
            break;
        case "cloth1" :
            for ( let i = 1; i < 6; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/clothes/layer_1/${i}.png`}/>);
            }
            break;
        case "cloth2" :
            for ( let i = 1; i < 6; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/clothes/layer_2/${i}.png`}/>);
            }
            break;
        case "cloth3" :
            for ( let i = 1; i < 10; i++ ) {
                list.push(< PartItem handleClick={()=>handleClick(i)} imgUrl={`character/clothes/layer_3/${i}.png`}/>);
            }
            break;
        default : 
            break;
    };
    return (
        <div className='part'>{list}</div>
    )
}

export default PartList