import React, { Fragment } from 'react'
import './Membre.css'

// function Membre () {
//     return (
//         <h2>Membre</h2>
//     )
// }

const Membre = ({nom, age, children, hideName, handleChange}) => {
    // const name = props.nom
    // console.log(props)
    return (
        <Fragment>
        <h2 style={{ 
            backgroundColor: age < 27 ? 'yellow' : 'aqua',
            color: age < 27 ? 'blue' : 'red' }}>
            {nom.toUpperCase()} : {age} ans
        </h2>
        <input value={nom} onChange={handleChange} type='text' />
        <button className="btnhide" onClick={hideName}>X</button>
        {children ? <p>{children}</p> : <Fragment /> }
        
        </Fragment>
    )
}

export default Membre