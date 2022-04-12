import React from 'react'
import './footer.css'
import { SocialIcons } from '../utils/Social'
import { SubscribeForm } from '../utils/SubscribeForm'
import { Address } from './Address'
import useData from '../../hooks/useData'

const Footer = () => {
  const { empresa } = useData()

  const date = new Date()
  return (
    <footer className="footer">
      <div className="container is-widescreen">
        <div className="columns">
          {/* Links  */}
          <div className="column">
            <h3 className="footer__title title is-3 mb-2">Legal</h3>
            <ul>
              <li>
                <a href="">Condiciones de uso</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
              <li>
                <a
                  href="/privacy_policies.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Politicas de privacidad
                </a>
              </li>
              <li>
                <a href="">Politicas de seguridad</a>
              </li>
              <li>
                <a href="">Garantia de devolucion del dinero</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="footer__title title is-3">Nuestras ubicaciones</h3>
            <Address />
          </div>
          <div className="column">
            <SubscribeForm />
            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright has-text-centered mt-5 pt-5">
        © {date.getFullYear()} -{' '}
        <a href={empresa.url} target="_blank" rel="noopener noreferrer">
          {empresa.nombre}
        </a>{' '}
        | Todos los derechos reservados
      </div>
    </footer>
  )
}

export default Footer
