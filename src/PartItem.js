import React from 'react'

function PartItem({imgUrl, handleClick}) {
    return (
            <button onClick={handleClick}><img width="56.67px" height="60px" src={imgUrl} alt={imgUrl}/></button>
    )
}

export default PartItem