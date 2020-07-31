import React from 'react';
import Bienvenida from './Bienvenida.jsx'
import Servicios from './Servicios.jsx'
import Contacto from './Contacto.jsx'
import WsIcon from './WsIcon.jsx'

class Main extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>

        <Bienvenida/>

        <Servicios/>

        <Contacto/>

        <WsIcon />
      </React.Fragment>
    )
  }
}
export default Main;