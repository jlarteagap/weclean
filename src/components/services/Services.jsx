import React, { useState, useEffect } from 'react'
import './services.css'
import { getData } from '../../api/Api'
import useData from '../../hooks/useData'

const Services = () => {
  const { updateService } = useData()
  const [services, setServices] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('servicios')
        setServices(res.records.reverse())
        updateService()
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className={`services ${services ? '' : 'is-hidden'}`} id="servicios">
      <h3 className="services__top-title title is-2 has-text-centered py-5">
        Consulta algunos de nuestros servicios
      </h3>
      {services.map((service, index) => {
        const { TITULO, CONTENIDO, CATEGORIA, IMAGENES } = service
        return (
          <div
            className={`service__columns columns ${
              index % 2 !== 0 ? 'is-flex-direction-row-reverse' : ''
            }`}
            key={index}
          >
            {CATEGORIA === 'GENERAL' && (
              <>
                <div className="column p-0">
                  <img src={IMAGENES[0].URL} />
                </div>
                <div className="column p-0">
                  <div className="services__content">
                    <h2 className="services__title title">{TITULO}</h2>
                    <ul className="service__ul">
                      <div dangerouslySetInnerHTML={{ __html: CONTENIDO }} />
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Services
