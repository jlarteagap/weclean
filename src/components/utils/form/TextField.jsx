import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <textarea
        className={`textarea ${meta.touched && meta.error && 'is-danger'}`}
        rows="5"
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
