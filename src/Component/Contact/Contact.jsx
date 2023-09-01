import React from 'react'
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'react-bootstrap-icons';
import Path from '../image/path.png'
import banner from '../image/banner.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section className='header'>
                <div className='container'>
                    <div className='row d-flex align-item-center'>
                        <div className='navbar col-5'>
                            <ul class="navbar list-unstyled">
                                <Link to="/" class="nav-item  text-decoration-none pe-5">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </Link>
                                <Link to="/About" class="nav-item  text-decoration-none pe-5">
                                    <a class="nav-link" href="#">About</a>
                                </Link>
                                <Link to="/Contact" class="nav-item  text-decoration-none pe-5">
                                    <a class="nav-link" href="#">Contact</a>
                                </Link>
                            </ul>
                        </div>
                        <div className='logo col-2'>
                            <p className='pt-2 fs-3 fw-bold'>Landing</p>
                        </div>
                        <div className='btn pt-3 col-5 d-flex justify-content-end align-items-center' >
                            <p><a href="#" class="btn-outline  text-decoration-none">Buy Now</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div>
                            <h1>contact</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Footer'>
                <div className='container'>
                    <div className='row '>
                        <div className='footer-item d-flex py-4 '>
                            <div className='col-5'>
                                <p className='pt-3'>@2023 YourCompany</p>
                            </div>
                            <div className=' logo col-2'>
                                <p className='pt-2 fs-3 fw-bold'>Landing</p>
                            </div>
                            <div className='btn pt-3 col-5 d-flex justify-content-end align-items-center' >
                                <p><a href="#" class="btn-outline  text-decoration-none">Purchase Now</a></p>
                            </div>
                            <hr />
                        </div>
                        <div className='footer-item-2 d-flex'>
                            <div className='navbar col-6'>
                                <ul class="navbar list-unstyled">
                                    <li class="nav-item pe-5">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item pe-5">
                                        <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item pe-5">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='icon col-6 pt-3  d-flex justify-content-end'>
                                <Facebook className='me-4' />
                                <Linkedin className='me-4' />
                                <Twitter className='me-4' />
                                <Youtube className='me-4' />
                                <Instagram className='me-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;