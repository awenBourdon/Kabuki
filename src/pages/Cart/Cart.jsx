import React, { useContext } from 'react'
import {StoreContext} from "../../context/StoreContext"
import "./Cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Produit</p>
          <p>Nom</p>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Total</p>
          <p>Supprimer</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=> {
          if (cartItems[item._id]>0) {
            return (
             <div>
              
              <div className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}€</p>
              <p>{cartItems[item._id]}</p>
              <p>{item.price*cartItems[item._id]}€</p>
              <p onClick={()=>removeFromCart(item._id)}  className='cross'>x</p>
              </div>
            <hr />
            </div>
               )
          }
        })}
      </div>
      <div className="cart-bottom">
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
        <button onClick={()=>navigate("/order")}>Valider la commande</button>
        </div>
        <div className="cart-promocode">
          <p>Rentrez votre code promotion ici</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="code promo" />
            <button>Valider</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart