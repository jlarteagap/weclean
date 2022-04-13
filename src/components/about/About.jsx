import React, { useState, useEffect } from 'react'
import './about.css'
import { getData } from '../../api/Api'
import useData from '../../hooks/useData'

const About = () => {
  const { updateAbout } = useData()
  const [about, setAbout] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('acercade')
        setAbout(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    if (about.length > 0) {
      updateAbout()
    }
  }, [about])
  return (
    <div
      className={`about ${about.length > 0 ? '' : 'is-hidden'}`}
      id="nosotros"
    >
      <div className="container is-widescreen">
        {about.map(data => {
          return (
            <div key={data.ID_CONTENIDO} className="about__content">
              <div dangerouslySetInnerHTML={{ __html: data.CONTENIDO }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About
