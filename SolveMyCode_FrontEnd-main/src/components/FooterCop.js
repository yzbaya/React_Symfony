import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterCop() {
  return (
    <div className='mt-4 p-5' id='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                        <h5 className='fw-bold mb-4'> About Us</h5>
                        <p className='text-muted my-2' style={{textAlign:"justify"}}>c'est une plate-forme de résolution de problèmes qui permet aux développeurs de publier leurs problèmes et de recevoir des commentaires d'autres développeurs qui ont rencontré les mêmes problèmes</p>
                    </div>
                </div>


                <div className='col-md-4 col-lg-2 col-sm-6 col-12'>
                    
                </div>

                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                    <h5 className='fw-bold mb-4'>Social Link</h5>
                   <ul>
                        <li className='fa-brands fa-facebook'>
                                <Link to="/" className='text-decoration-none text-muted'>Facebook</Link>
   
                         </li><br></br>

                            <li className='fa-brands fa-linkedin'>
                            <Link to="/" className='text-decoration-none text-muted'>Linkedin</Link>
                            </li><br></br>

                            <li className='fa-brands fa-twitter'>
                                <Link to="/" className='text-decoration-none text-muted'>Twitter</Link>
                                </li><br></br>
                            <li className='fa-brands fa-instagram'>
                                <Link to="/" className='text-decoration-none text-muted'>Instagram</Link>
                                </li>
                            </ul>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-sm-6 col-12'>
                    <div className='box'>
                    <h5 className='fw-bold mb-4'>Contact Info</h5>
                        <ul className='mt-2'>
                            <li className="fa-solid fa-envelope pe-2">
                                <Link to="/" className='text-decoration-none text-muted'>Stk@gmail.com</Link>
                            </li><br></br>
                                
                            <li className="fa-solid fa-phone pe-2">
                                <Link to="/" className='text-decoration-none text-muted'>+336 28 962 689</Link>
                            </li><br></br>



                            <li className="fa-solid fa-location-dot pe-2">
                                <Link to="/" className='text-decoration-none text-muted'> France</Link>
                                
                             </li>

                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
