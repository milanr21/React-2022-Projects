import React from 'react';
import vg from '../assests/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt='Graphics' />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            fugit voluptatem vero quasi facilis illo labore delectus!
            Reprehenderit amet asperiores sint saepe nisi. Ipsam reprehenderit
            dolor natus alias rem, dolorum possimus nemo modi totam provident
            debitis! Doloribus officia nihil minima quo itaque quae sapiente
            nesciunt, asperiores delectus ullam expedita illum perspiciatis
            quam. Dolorem dolorum nobis vel iusto quam commodi, nesciunt optio
            enim nam aut! Veniam aliquid corrupti vero temporibus est maxime
            reprehenderit voluptate ut tempora, sapiente expedita pariatur,
            inventore quibusdam excepturi a. Maxime inventore, sed voluptatibus
            sapiente, facilis, quibusdam dolore minus laudantium odit nihil
            voluptas sint. Similique porro quaerat est?
          </p>
        </div>
      </div>

      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: '0.5s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: '0.7s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: '0.9s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
