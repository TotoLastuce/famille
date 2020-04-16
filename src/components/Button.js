import React from 'react'
import './Button.css'

const Button = ({vieillir, num}) => {
    //console.log(num)
    //console.log(vieillir)
    return (
            <button className="btnvieillir" onClick={vieillir}>
                Vieillir de {num} ans
            </button>
    )
}

export default Button