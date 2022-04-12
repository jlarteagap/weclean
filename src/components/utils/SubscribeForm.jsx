import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Modal from './Modal'

export const SubscribeForm = ({ title }) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="subscribe field has-addons m-0">
      <div className="control is-expanded">
        <input
          onClick={toggleModal}
          name="subscribe"
          className="subscribe__input input p-5"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="control">
        <a className="subscribe__button button is-info is-flex is-align-items-center p-5">
          {title && (
            <div className="subscribe__button-title mx-3 has-text-weight-semibold is-uppercase">
              {title}
            </div>
          )}
          <FaChevronRight />
        </a>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} />
    </div>
  )
}
