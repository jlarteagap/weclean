import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext({
  empresa: undefined,
  aboutContext: false
})

const { API_HOST, A, E, UB } = window.CONFIG

export function AppProvider({ children }) {
  const [empresa, setEmpresa] = useState([])
  const [aboutContext, setAboutContext] = useState(false)
  const [serviceContext, setServiceContext] = useState(false)
  const [testimonialContext, setTestimonialContext] = useState(false)
  const [howContext, setHowContext] = useState(false)
  const [splash, setSplash] = useState(true)

  setTimeout(() => {
    setSplash(false)
  }, 3000)

  useEffect(() => {
    const url = `${API_HOST}/empresa/?a=${A}&e=${E}&ub=${UB}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEmpresa(data.records)
      })
  }, [])

  const updateAbout = () => {
    setAboutContext(true)
  }
  const updateService = () => {
    setServiceContext(true)
  }
  const updateTestimonial = () => {
    setTestimonialContext(true)
  }
  const updateHow = () => {
    setHowContext(true)
  }
  const value = {
    empresa,
    aboutContext,
    serviceContext,
    testimonialContext,
    howContext,
    splash,
    updateAbout,
    updateService,
    updateTestimonial,
    updateHow
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
