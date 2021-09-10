import React from 'react'

export default function Confirm({addProductToCard}) {
    return (
        <div>
            <h1>Vous etes sur de passer votre commande ?</h1>
            <button onClick={() => addProductToCard()}>Confirmer</button>
        </div>
    )
}
