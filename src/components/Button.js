import React from 'react'

const Button = ({vieillir, num}) => {
    console.log(num)
    console.log(vieillir)
    return (
            <button onClick={vieillir}>
                Vieillir de {num} ans
            </button>
    )
}

export default Button