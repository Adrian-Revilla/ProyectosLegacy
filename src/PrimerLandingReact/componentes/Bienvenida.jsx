import React from 'react'

function Bienvenida() {
    return (

        <React.Fragment>
            
            <header id="_logo" className='p-1 p-md-5 d-flex justify-content-center align-items-center flex-column flex-md-row w-100'>

            <i className="fas fa-user-check d-block mr-0 mr-md-1" style={{fontSize:'40px'}}></i> <h1 className='h1-responsive'><strong> NOMBRE EMPRESA</strong></h1>
               
            </header>

            <section id="welcome" className='d-flex justify-content-center  flex-column-reverse flex-lg-row align-items-center align-items-lg-center' >
            
                <article className='p-3 text-justify  border border-light mr-lg-2 ml-lg-2 ' style={{maxWidth:'600px'}}>
                    <h2 className='text-center h2-responsive font-weight-bold'>Bienvenido</h2>
                    <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                    </p>
                </article>

        
                <section id="carousel-example-1z" className="carousel slide carousel-fade w-100 border border-light rounded shadow-sm  mb-2 mb-lg-0 mr-lg-2 flex-grow-" style={{maxWidth:'600px'}} data-ride="carousel" data-interval='3000' data-pause='false'>
          
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>
         
                    <div className="carousel-inner" role="listbox">
            
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" 
                                alt="First slide" />
                        </div>
              
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" 
                                alt="Second slide"
                            />
                        </div>
               
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" 
                                alt="Third slide"
                            />
                        </div>
                
                       
                        <a
                            className="carousel-control-prev"
                            href="#carousel-example-1z"
                            role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        
                        <a
                            className="carousel-control-next"
                            href="#carousel-example-1z"
                            role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
               
                    </div>
                
                </section>
            
            </section>

        </React.Fragment>
                
    )
}
export default Bienvenida;