import React, { useState, useEffect } from 'react'
import './howWork.css'
import { getData } from '../../api/Api'

const HowWork = () => {
  const [work, setWork] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getData('servicios')
        setWork(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className="how__work container is-widescreen" id="como-funciona">
      <div className="how__work-header">
        <h3 className="how__work-title title is-1 has-text-centered">
          Cómo <span className="title__colored">funciona</span>
        </h3>
      </div>
      <div className="how__work-step">
        {work.map(item => {
          return (
            <div key={item.ID_CONTENIDO} className="how__content">
              {item.CATEGORIA === 'FUNCIONAMIENTO' && (
                <div dangerouslySetInnerHTML={{ __html: item.CONTENIDO }} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HowWork
