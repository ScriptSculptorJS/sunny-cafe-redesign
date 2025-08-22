import './about.css';

function About() {

  return (
    <section className='aboutContainer container'>
      <h2 className='pageTitle'>
        About Us
      </h2>
      <p className='about'>
        Welcome to Sunny Café, your neighborhood spot for coffee, comfort, and community.
      </p>
      <p className='about'>
        We started Sunny Café with one simple idea: great coffee tastes even better when shared with friends. What began as a small family passion project has grown into a cozy gathering place where students, professionals, and neighbors alike can relax, recharge, and connect.
      </p>
      <p className='about'>
        ☕ <span>Our Coffee: </span>
        We partner with local roasters to bring you ethically sourced, small-batch coffee beans. Every cup is brewed with care, whether it’s your go-to latte or a new seasonal special.
      </p>
      <p className='about'>
        🥐 <span>Our Food: </span>
        Alongside your favorite drinks, you’ll find fresh-baked pastries, hearty breakfast options, and light lunches made from local ingredients.
      </p>
      <p className='about'>
        🌞 <span>Our Space: </span>
        Sunny Café was designed to feel like a warm morning sunrise — bright, welcoming, and full of energy. We’re proud to offer free WiFi, plenty of cozy seating, and even a quiet corner for those who need to focus.
      </p>
      <p className='about'>
        Whether you’re here for your daily caffeine fix, a quick lunch, or a place to catch up with friends, we hope Sunny Café becomes your happy place.
      </p>
      <p id='last-p' className='about'>
        <span>Come for the coffee. Stay for the sunshine!</span>
      </p>
    </section>
  )
}

export default About;