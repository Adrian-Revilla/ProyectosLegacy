import React from 'react'
import Card from './Card.jsx'

function Servicios() {
  return (

    <main id="portfolio-wrapper">
      <section id="portfolio" className="container">
        
        <section className=" p-4">
          <h2 className='h2-responsive text-center'>AQUI LOS SERVICIOS</h2>
          <span className="d-block text-center">AQUI VA UNAS PALABRAS DE AMOR PARA SENTIR COMODO AL CONSUMIDOR</span>
        </section>
        
        <section
          style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
          <Card img={"images/pic01.jpg"}>
            <p>AQUI MAS PALABRAS ACERCA DEL SERVICIO 1</p>
          </Card>
          
          <Card img={"images/pic02.jpg"}>
            <p>AQUI MAS PALABRAS ACERCA DEL SERVICIO 2</p>
          </Card>
          
          <Card img={"images/pic03.jpg"}>
            <p>AQUI MAS PALABRAS ACERCA DEL SERVICIO 3</p>
          </Card>
          
          <Card img={"images/pic04.jpg"}>
            <p>AQUI MAS PALABRAS ACERCA DEL SERVICIO 4</p>
          </Card>
        </section>
      
      </section>
    </main>
  )
}

export default Servicios;