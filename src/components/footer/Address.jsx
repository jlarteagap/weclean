import React from 'react'
import { FaEnvelopeOpen, FaMap, FaPhoneAlt } from 'react-icons/fa'

import useData from '../../hooks/useData'
export const Address = () => {
  const { empresa } = useData()
  return (
    <div>
      <a
        target="_blank"
        href={`https://www.google.com/maps/@${empresa.latitud},${empresa.longitud},15z`}
        className="is-flex is-justify-content-center is-align-items-center"
        rel="noreferrer"
      >
        <FaMap className="address__icon mr-2" />
        {empresa.domicilio}
      </a>

      <a
        target="_blank"
        href={`mailto:${empresa.email}`}
        className="is-flex is-align-items-center mt-3"
        rel="noreferrer"
      >
        <FaEnvelopeOpen className="address__icon mr-2" />
        {empresa.email}
      </a>

      <a
        target="_blank"
        href={`https://wa.me/${empresa.telefono}`}
        className="is-flex is-align-items-center mt-3"
        rel="noreferrer"
      >
        <FaPhoneAlt className="address__icon mr-2" />
        {empresa.telefono}
      </a>
    </div>
  )
}
