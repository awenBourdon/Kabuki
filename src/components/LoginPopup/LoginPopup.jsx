import React from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { useState } from 'react'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("S'inscrire")

  return (
    <div className="login-popup">
       <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Se connecter"?<></>:<input type="text" placeholder="Nom" required />}
            
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder="Mot de passe" required />
        </div>
        <button>{currState==="S'inscrire"?"Créer un compte":"Se connecter"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>J'accepte les conditions générales d'utilisation</p>
        </div>
        {currState==="Se connecter"
        ?<p>Créer un nouveau compte ? <span onClick={()=>setCurrState("S'inscrire")}>Cliquez ici</span></p>
        :<p>Vous avez déjà un compte ? <span onClick={()=>setCurrState("Se connecter")}>Se connecter</span></p>
      }
        
        
       </form>
    </div>
  )
}

export default LoginPopup