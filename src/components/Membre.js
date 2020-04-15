import React, { Fragment } from 'react'

// function Membre () {
//     return (
//         <h2>Membre</h2>
//     )
// }

const Membre = ({nom, age, children}) => {
    // const name = props.nom
    // console.log(props)
    return (
        <Fragment>
        <h2>Membre de la fraterie : {nom.toUpperCase()} : {age} ans</h2>
        {children ? <p>{children}</p> : <Fragment /> }
        
        </Fragment>
    )
}

export default Membre