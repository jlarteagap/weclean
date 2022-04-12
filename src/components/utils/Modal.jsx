import React from 'react'
import { Contact } from './Contact'
const Modal = ({ modal, toggleModal }) => {
  return (
    <>
      {modal && (
        <div className={`modal ${'is-active'}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal__head modal-card-head">
              <p className="modal__title modal-card-title">
                Envíanos un mensaje
              </p>
              <button className="delete" onClick={toggleModal}></button>
            </header>
            <section className="modal-card-body">
              <Contact toggleModal={toggleModal} />
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
