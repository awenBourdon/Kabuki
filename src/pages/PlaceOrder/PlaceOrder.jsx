import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order" action="">
      <div className="place-order-left">
      <p className="title">Informations de livraison</p>
      <div className="multi-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
      </div>
      <input type="email" placeholder="Adresse email" />
      <input type="text" placeholder="Rue" />
      <div className="multi-fields">
        <input type="text" placeholder="Département" />
        <input type="text" placeholder="Ville" />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="Code postal" />
        <input type="text" placeholder="Pays" />
      </div>
      <input type="text" placeholder='Téléphone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sous-total</p>
              <p>{getTotalCartAmount()}€</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Frais de livraison</p>
              <p>{2}€</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}€</b>
            </div>
          </div>
        <button>PAYER</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder