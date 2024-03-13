import React from 'react'

function PartItem({imgUrl, handleClick}) {
    return (
            <img width="56.67px" height="60px" src={imgUrl} alt={imgUrl}/>
    )
}

export default PartItem