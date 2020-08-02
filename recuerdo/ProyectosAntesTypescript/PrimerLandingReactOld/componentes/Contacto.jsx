import React from 'react'
function Contacto() {
  return (
    <React.Fragment>

      <section id="contact" className='text-center'>
        <section className='p-1'>
          <h2 className='h2-responsive'>CONTACTANOS</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, adipisci quaerat. Totam accusamus magni molestiae. Error in maiores voluptatem, beatae corrupti quisquam? Deleniti incidunt, minus illum excepturi non quae beatae.</p>
        </section>
        <ul className='ul_css list-unstyled'>
          <li className='li_css'>
            <a href="#">
            <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li  className='li_css'>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          
        </ul>
      </section>

      <footer id="copyright" className='bg-dark text-white font-weight-bold  d-flex align-items-center justify-content-center p-4'>
      <i className="far fa-clock text-white mr-2  h5-responsive d-block"></i><p className='h6-responsive'> horario de atención: todos los dias 00:00 a 00:00</p>
      </footer>
    </React.Fragment>

  )
}
export default Contacto;