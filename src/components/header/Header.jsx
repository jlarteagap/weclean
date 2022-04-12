import React, { useState } from 'react'
import { SocialIcons } from '../utils/Social'
import useData from '../../hooks/useData'
import './header.css'
import { BurgerMenu } from './BurgerMenu'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { empresa } = useData()
  return (
    <header className="header">
      <nav className="navbar is-fixed-top" role="navigation">
        <div className="container is-widescreen">
          <div className="header__brand navbar-brand">
            <a className="navbar-item" href={empresa.url}>
              <img src={empresa.logo} className="header__logo" />
            </a>
            <BurgerMenu
              isActive={isActive}
              onClick={() => {
                setIsActive(!isActive)
              }}
            />
          </div>

          <div
            id="navbarWorkCode"
            className={`navbar-menu ${
              isActive ? 'is-active navbar--menu' : ''
            }`}
          >
            <div className="navbar-start">
              <a className="header__item navbar-item" href="#">
                Inicio
              </a>
              <a className="header__item navbar-item" href="#como-funciona">
                Como funciona
              </a>
              <a className="header__item navbar-item" href="#testimonios">
                Testimonios
              </a>
              <a className="header__item navbar-item" href="#servicios">
                Servicios
              </a>
            </div>

            <div className="header__social navbar-end is-flex is-align-items-center">
              <SocialIcons colored empresa={empresa} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header