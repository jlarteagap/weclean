import React from 'react'
import { SubscribeForm } from '../utils/SubscribeForm'
import './slide.css'

const Slide = () => {
  return (
    <div className="slide">
      <div className="container is-widescreen is-flex is-justify-content-center">
        <div className="slide__header is-flex is-flex-direction-column is-align-items-center">
          <h2 className="slide__title title is-1">Limpieza y Desinfección</h2>
          <p className="slide__desc my-5 is-size-4 is-size-6-mobile has-text-weight-semibold has-text-centered">
            Reserve a expertos en limpieza del hogar y personas de mantenimiento
            en cualquier momento. Solo elige una hora y nosotros haremos el
            resto
          </p>
          <div className="slide__form my-5">
            <SubscribeForm title={'contacto'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
