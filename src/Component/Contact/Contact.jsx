import React from 'react'
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'react-bootstrap-icons';
import Icon from '../image/Icon.png';
import image5 from '../image/image5.png';
import Vert from '../image/Vert.png';
import { Link } from 'react-router-dom';
import './Contact.css'; 

function Home() {
    return (
        <>
            <section className='header'>
                <div className='container'>
                    <div className='row d-flex align-item-center'>
                    <div className='logo col-2'>
                            <p className='pt-2 fs-3 fw-bold'>Landing</p>
                        </div>
                        <div className='navbar justify-content-end col-5'>
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
                        <div className='btn pt-3 col-5 d-flex justify-content-end align-items-center' >
                            <p><a href="#" class="btn-outline me-4 text-decoration-none">Purches Kit</a></p>
                            <p><a href="#" class="btn-outline contact-btn text-decoration-none">Contact Us</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact py'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='contact-contant col-7'>
                            <div className='contact-title py-5'>
                                <h1 className='title pb-2 '>Design & Build Your Own <br /> Landing Page</h1>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis nisi dolorum necessitatibus  odit, veritatis saepe quo.</p>
                            </div>
                            <div className='contact-icon d-flex'>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                            </div>
                            <div className='contact-icon d-flex'>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                            </div>
                        </div>
                        <div className='contact-image img-fluid col-5'>
                            <img src={Vert} alt="Vert" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-image col-5 '>
                            <img src={image5} alt="image5" />
                        </div>
                        <div className='contact-contant justify-content-center col-7'>
                            <div className='about-icon d-flex py'>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                            </div>
                            <div className='about-icon d-flex'>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                                <div>
                                    <img className='pb-3' src={Icon} alt="icon" />
                                    <h5 className='title'>Title Goes Here</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit hic voluptatum quibusdam tenetur!</p>
                                </div>
                            </div>
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
                        <hr class="mt-1 mb-1" />
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