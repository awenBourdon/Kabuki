import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Profitez d'un repas délicieux ! Nos bols de ramen sont préparés avec soin, en utilisant des ingrédients frais et de qualité, pour vous offrir une expérience gustative authentique !</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Kabuki</h2>
                <ul>
                    <li>Accueil</li>
                    <li>À propos</li>
                    <li>Livraison</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Nous contacter</h2>
                <ul>
                    <li>02 34 56 78 90</li>
                    <li>contact@kabuki.fr</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Kabuki.com - Tous droits réservés</p>
    </div>
  )
}

export default Footer