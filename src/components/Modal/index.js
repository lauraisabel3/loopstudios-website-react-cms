import React from 'react'
import  ReactDom from 'react-dom'
import {Container} from './styles'

function Modal ({children})  {
  return (
    <div>
      {
        ReactDom.createPortal(
          <Container>
            {children}
          </Container>,
          document.getElementById('modal'))
      }
    </div>
  )
}

export default Modal