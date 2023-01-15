import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

// import NavBar from '../navBar/NavBar';
import NavBar from 'components/content/NavBar/NavBar';

function About() {
  return (
    <div className='ml-20 mr-20 mt-30'>
      <NavBar />
      <div className='pt-20'>
        <h1 className='pb-6 text-3xl font-bold tracking-tight text-black md:text-5xl'>
          About Me
        </h1>
        <div className='pr-4 text-xl leading-6 prose text-gray-600 mb-9'>
          <div className='float-right w-36 md:w-52'>
            <img alt='' src='/images/don_ashbrook.jpg' />
          </div>
          <p>
            Hi, I&apos;m Don. I am an avid photographer from Southern California
            when I get a break my day job.
          </p>

          <p className='mt-4'>
            I have been fortunate to travel extensively around the world for
            work and try to always make some time to learn more about the people
            and places in the countries I visit. Over the years I have also
            traveled for vacations to places I want to experience and am usually
            blown away with what I find.
          </p>
          <p className='mt-4 '>
            Whether in the jungle in Cambodia, hanging out of a helicopter in
            Hawaii photographing lava, visiting our beautiful national parks, or
            photographing Sandhill Cranes on a cold winter morning, every trip
            is a challenge and a new adventure.
          </p>
        </div>
      </div>
      <h3 className='mt-12 text-xl text-gray-600'>Let&apos;s Connect!</h3>
      <div className='flex flex-wrap gap-y-4 gap-x-8'>
        <div className='inline-flex flex-wrap items-center mt-5 gap-y-4 gap-x-8 w-36'>
          <a
            href='https://www.instagram.com/photodoc_e2.1/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='w-10 h-10' />
          </a>
          <a
            href=' https://www.facebook.com/don.ashbrook'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className='w-10 h-10' />
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
