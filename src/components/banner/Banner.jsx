import React from 'react'
import { SubscribeForm } from '../utils/SubscribeForm'
import { SocialIcons } from '../utils/Social'
import './banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <div className="container is-widescreen is-flex is-align-items-center is-flex-direction-column py-5">
        <h3 className="banner__title title is-2">
          ¡No espere, reserva una{' '}
          <span className="title__colored">limpieza ahora!</span>
        </h3>
        <p className="has-text-centered my-5 is-size-4 is-size-6-mobile">
          Nuestra filosofia de mejoramiento continuo busca que nuestros clientes
          concentren sus esfuerzos en las actividades importantes de su negocio
          y de esta manera alcancen rapidamente el exito. No lo pienses mas!
        </p>
        <div className="banner__cta is-flex is-align-items-center">
          <SubscribeForm title={'Conctacto'} />
          <div className="banner__social ml-3">
            <SocialIcons colored />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
