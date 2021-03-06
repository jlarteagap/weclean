import React, { useState, useEffect } from 'react'
import './howWork.css'
import { getServices } from '../../api/Api'
import useData from '../../hooks/useData'

const HowWork = () => {
  const { updateHow } = useData()
  const [work, setWork] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getServices('funcionamiento')
        setWork(res.records)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    if (work.length > 0) {
      updateHow()
    }
  }, [work])

  return (
    <div
      className={`how__work container is-widescreen ${
        work.length > 0 ? '' : 'is-hidden'
      }`}
      id="como-funciona"
    >
      <div className="how__work-header">
        <h3 className="how__work-title title is-1 has-text-centered">
          Cómo <span className="title__colored">funciona</span>
        </h3>
      </div>
      <div className="how__work-step">
        {work.map(item => {
          return (
            <div key={item.ID_CONTENIDO} className="how__content">
              <div dangerouslySetInnerHTML={{ __html: item.CONTENIDO }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default HowWork
