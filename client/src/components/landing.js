import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
    <div id='landing' className='bg-image'>
        <div id='jumbotron' className="jumbotron text-center text-lg-left">
          <h1 className="display-5 mt-5">Build a bridge to your audience</h1>
          <p className="lead">Whatever you have to say, we can create a website to help spread your message. </p>
          <hr className="my-4" />
          <p>We offer dynamic designs that are as unique as your ideas. From a business to a blog, we provide comprehensive web design solutions.</p>
          <Link className="btn btn-info btn-lg" to="/intro" role="button">Learn More</Link>
        </div>
    </div>
)

export default Landing;