import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { InputField } from './form/InputField'
import { TextField } from './form/TextField'

const { API_HOST, A, E, UB } = window.CONFIG
export const Contact = ({ toggleModal }) => {
  const [status, setStatus] = useState(false)

  const validate = Yup.object({
    nombre: Yup.string().required('Su nombre es requerido'),
    email: Yup.string()
      .email('El correo no válido')
      .required('Su nombre es requerido'),
    telefono: Yup.string().required('Teléfono requerido'),
    mensaje: Yup.string()
      .min(
        6,
        'Su mensaje es demasioado corto, intente enviar ampliar su mensaje'
      )
      .required('Es su mensaje es importante')
  })

  return (
    <Formik
      initialValues={{
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        const url = `${API_HOST}/contactos/?a=${A}&e=${E}&ub=${UB}`

        fetch(url, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(values)
        })
          .then(response => response.json())
          .then(data => {
            if (data.message === 'OK') {
              setStatus(!status)
            }
          })
      }}
    >
      {formik => (
        <div>
          {status && (
            <>
              <div className="notification is-success is-light">
                Su mensaje ha sido enviado correctamente.
              </div>
              <div className="is-flex is-justify-content-center">
                <button
                  className="button is-success is-outlined"
                  onClick={toggleModal}
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
          {status || (
            <Form>
              <InputField label="Nombre" type="text" name="nombre" />
              <InputField label="Email" type="email" name="email" />
              <InputField label="Teléfono" type="text" name="telefono" />
              <TextField label="Deje su mensaje" name="mensaje" />
              <button
                className="button mt-3"
                type="button"
                onClick={toggleModal}
              >
                Cancelar
              </button>
              <button type="submit" className="button is-success mt-3 ml-3">
                Enviar mensaje
              </button>
            </Form>
          )}
        </div>
      )}
    </Formik>
  )
}
