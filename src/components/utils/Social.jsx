import React from 'react'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG
} from 'react-icons/fa'
import useData from '../../hooks/useData'

export const SocialIcons = ({ colored }) => {
  const { empresa } = useData()
  return (
    <div className="social is-flex">
      {empresa.facebook && (
        <a
          href={empresa.facebook}
          className={`social__icons is-flex is-justify-content-center is-align-items-center ${
            colored ? 'colored' : ''
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF size={24} className="social__icon" />
        </a>
      )}
      {empresa.instagram && (
        <a
          href={empresa.instagram}
          className={`social__icons is-flex is-justify-content-center is-align-items-center ${
            colored ? 'colored' : ''
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={24} className="social__icon" />
        </a>
      )}
      {empresa.linkedin && (
        <a
          href={empresa.linkedin}
          className={`social__icons is-flex is-justify-content-center is-align-items-center ${
            colored ? 'colored' : ''
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={24} className="social__icon" />
        </a>
      )}
      {empresa.twitter && (
        <a
          href={empresa.twitter}
          className={`social__icons is-flex is-justify-content-center is-align-items-center ${
            colored ? 'colored' : ''
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={24} className="social__icon" />
        </a>
      )}
      {empresa.youtube && (
        <a
          href={empresa.youtube}
          className={`social__icons is-flex is-justify-content-center is-align-items-center ${
            colored ? 'colored' : ''
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={24} className="social__icon" />
        </a>
      )}
      {empresa.google && (
        <a
          href={empresa.google}
          className={`social__icons is-flex is-justify-content-center is-align-items-center ${
            colored ? 'colored' : ''
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <FaGooglePlusG size={24} className="social__icon" />
        </a>
      )}
    </div>
  )
}
