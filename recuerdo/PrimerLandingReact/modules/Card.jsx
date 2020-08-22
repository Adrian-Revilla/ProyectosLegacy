import React from 'react'

function Card(props) {
    return (
        <figure className="card">
            <img src={props.img}  width='50' alt="" className='card-img-top img-fluid' />
            <div className="card-body">
                {props.children}
                <button className='btn btn-dark d-block mx-auto'>este boton puede servir para algo</button>
            </div>
        </figure>
    )
}
export default Card;