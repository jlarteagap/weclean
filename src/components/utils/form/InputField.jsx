import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`input ${meta.touched && meta.error && 'is-danger'}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="help is-danger"
      />
    </div>
  )
}
