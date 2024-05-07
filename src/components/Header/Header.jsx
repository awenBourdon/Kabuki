import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Vos ramens préférés</h2>
            <p>Profitez d'un repas délicieux ! Nos bols de ramen sont préparés avec soin, en utilisant des ingrédients frais et de qualité, pour vous offrir une expérience gustative authentique !</p>
            <a href="#app-download"><button>COMMANDER</button></a>
        </div>
    </div>
  )
}

export default Header