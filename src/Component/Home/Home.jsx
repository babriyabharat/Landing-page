import React from 'react'
import './Home.css';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'react-bootstrap-icons';
import Path from '../image/path.png'
import banner from '../image/banner.png';
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';
import Rectangle from '../image/Rectangle.png';
import Icon from '../image/Icon.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='body'>
                <section className='header'>
                    <div className='container'>
                        <div className='row d-flex align-item-center'>
                            <div className='navbar col-5 col-xs-5  col-md-5 col-lg-5 col-sm-5'>
                                <ul class="navbar list-unstyled">
                                    <Link to="/" class="nav-item text-decoration-none pe-5">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </Link>
                                    <Link to="/About" class="nav-item text-decoration-none pe-5">
                                        <a class="nav-link" href="#">About</a>
                                    </Link>
                                    <Link to="/Contact" class="nav-item text-decoration-none pe-5">
                                        <a class="nav-link" href="#">Contact</a>
                                    </Link>
                                </ul>
                            </div>
                            <div className='logo col-2 col-xs-2  col-md-2 col-lg-2 col-sm-2'>
                                <p className='pt-2 fs-3 fw-bold'>Landing</p>
                            </div>
                            <div className='btn pt-3 col-5 col-xs-5 col-md-5 col-lg-5 d-flex justify-content-end align-items-center' >
                                <p><a href="#" class="btn-outline  text-decoration-none">Buy Now</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='banner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='contant col-6 col-xs-6  col-md-6 col-sm-5'>
                                <div clssName='text'>
                                    <h1 className='title fs-1 fw-bold'>Introduce Your Product<br /> Quickly & Effectively</h1>
                                    <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda molestias nobis, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
                                    <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis nisi dolorum necessitatibus sequi ab eius odit, veritatis saepe quo.</p>
                                </div>
                                <div className='banner-btn d-flex pt-3  mt-5 '>
                                    <p ><a href="#" className="banner-btn-1 me-4 text-decoration-none">Purchase UI Kit</a></p>
                                    <p><a href="#" className="banner-btn-2 px-5 text-decoration-none">Learn More</a></p>
                                </div>
                            </div>
                            <div className='banner-image col-6 col-xs-6  col-md-6'>
                                <img className='image1' src={Path} alt="path" />
                                <img className='image2' src={banner} alt="banner" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='feature-sec-1 py '>
                    <div className='container'>
                        <div className='row'>
                            <div className='feature-contant col-6 col-xs-6  col-md-6'>
                                <div className='feature-title py-5'>
                                    <h1 className='title pb-2 '>Light, Fast & Powerful</h1>
                                    <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
                                    <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis nisi dolorum necessitatibus  odit, veritatis saepe quo.</p>
                                </div>
                                <div className='feature-icon d-flex'>
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
                            <div className='feature-image img-fluid w-50 col-5 col-xs-5  col-md-5'>
                                <img src={image1} alt="image1" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='feature-sec-2 py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='feature-image img-fluid w-50 col-6 col-xs-6 col-md-6'>
                                <img src={image2} alt="image2" />
                            </div>
                            <div className='feature-contant py-5 col-6 col-xs-6  col-md-6'>
                                <h1 className='title pb-2 '>Light, Fast & Powerful</h1>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis nisi dolorum necessitatibus  odit, veritatis saepe quo.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='feature-sec-3 py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='feature-image img-fluid w-50 col-6 col-xs-6 col-md-6'>
                                <img src={image3} alt="image3" />
                            </div>
                            <div className='feature-contant py-5 col-6 col-xs-6 col-md-6'>
                                <h1 className='title pb-2 '>Light, Fast & Powerful</h1>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis nisi dolorum necessitatibus  odit, veritatis saepe quo.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='feature-sec-4 py'>
                    <div className='container'>
                        <div className='row'>
                            <div className='feature-image img-fluid w-50 col-6 col-xs-6 col-md-6'>
                                <img src={image4} alt="image4" />
                            </div>
                            <div className='feature-contant py-5 col-6 col-xs-6 col-md-6 '>
                                <h1 className='title pb-2 '>Light, Fast & Powerful</h1>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
                                <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corporis nisi dolorum necessitatibus  odit, veritatis saepe quo.</p>
                                <div className='btn pt-3  d-flex  align-items-center ps-0' >
                                    <p><a href="#" class="btn-outline  text-decoration-none">Purchase Now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='purchese mb-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='purchese-contant'>
                                <img src={Rectangle} alt="Rectangle" />
                                <div className='purchese-title'>
                                    <h1 className='title pb-2 '>Light, Fast & Powerful</h1>
                                    <p className='p-tag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat explicabo dolor facere ipsam, id assumenda, esse consectetur facilis laborum officiis neque eaque quis nesciunt eligendi perferendis voluptatem eum dolorem velit</p>
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
                
            </div>
        </>
    )
}

export default Home;