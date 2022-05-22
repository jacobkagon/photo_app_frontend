import 'about.css';
import NavBar from 'components/content/NavBar';

function About() {
  return (
    <div class='container'>
      <NavBar />
      <h1 class='header'>About Me</h1>
      <div classname='secondary'>
        <div>
          <img class='picture' src='/images/don_ashbrook.jpg' />
        </div>
        <p>
          Hi, I'm Don. I am an avid photographer from Southern California when I
          get a break my day job.{' '}
        </p>

        <p>
          {' '}
          I have been fortunate to travel extensively around the world for work
          and try to always make some time to learn more about the people and
          places in the countries I visit. Over the years I have also traveled
          for vacations to places I want to experience and am usually blown away
          with what I find.
        </p>
        <p>
          Whether in the jungle in Cambodia, hanging out of a helicopter in
          Hawaii photographing lava, visiting our beautiful national parks, or
          photographing Sandhill Cranes on a cold winter morning, every trip is
          a challenge and new adventure.
        </p>
      </div>
    </div>
  );
}
export default About;
