/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { getData } from '../../api/Api'
import './testimonial.css'

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('testimonios')
        setTestimonials(res)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const mainOptions = {
    arrows: false,
    rewind: true,
    gap: '1rem',
    autoplay: true,
    perPage: 3,
    perMove: 1,
    type: 'loop',
    breakpoints: {
     640:{
      perPage: 1,
     },
     768:{
       perPage: 2
     }
    }
  };

  return (
    <div className="testimonial" id='testimonios'>
      <div className='container is-widescreen'>
        <h3 className="testimonial__top-title title is-1 has-text-centered">
          No tomes nuestra <span className='title__colored'> palabra</span>
        </h3>
        <p className="testimonial__subtitle is-size-4 is-size-6-mobile has-text-weight-semibold has-text-centered pb-5">
          Mira lo que dicen nuestros clientes de nuestros servicios
        </p>
        <Splide
          aria-label="Testimonios"
          options={ mainOptions }
          className="testimonial__carrousel"
        >
              {testimonials.map(testimonial => {
                return(
                  <SplideSlide key={testimonial.id_mensaje}>
                <div>
                   <div className="testimonial__quote is-flex is-flex-direction-column is-align-items-center p-5 is-relative">
                <FaQuoteLeft
                  size={32}
                  className="testimonial__quote-icon mb-4"
                />
                <p className="has-text-centered">
                 {testimonial.mensaje}
                </p>
              </div>
              <p className="testimonial__name has-text-centered mt-5 is-size-4 is-size-5-mobile has-text-weight-semibold">
                {testimonial.nombre}
              </p>
              <p className="has-text-centered">{testimonial.cargo}</p>

                </div></SplideSlide>)
              })}
             
          
        </Splide>
      </div>
    </div>
  )
}

export default Testimonial
