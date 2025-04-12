import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <section className='h-[5rem] bg-blue-300 grid grid-cols-8 grid-rows-8 text-white'>
    <span className='col-start-6 col-end-9 text-3xl row-start-2'>Välkommen {"Användare"}</span>
    <Link className=' justify-self-center row-start-9' >Lägg till arbete</Link>
    <Link className=" justify-self-center row-start-9">Inställningar</Link>
    <Link className=' justify-self-center row-start-9'>Bild-arkiv</Link>
    <Link className=' justify-self-center row-start-9'>Egen Lista</Link>


    </section>
    </>
  )
}

export default Navbar