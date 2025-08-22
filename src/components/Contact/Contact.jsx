import './contact.css';

function Contact() {

  return (
    <section className='container'>
      <h2 className='pageTitle'>
        Connect With Us
      </h2>
      <p>
        <span>Email &#x2709;:</span> hello@fakesunnycafe.com
      </p>
      <p>
        <span>Call &#9742;:</span> (555) 123-4567
      </p>
      <h2 className='pageTitle hours'>
        Hours of Operation:
      </h2>
      <p>
        <span>Mon-Fri:</span> 7:00AM -- 6:00PM
      </p>
      <p>
        <span>Sat-Sun:</span> 8:00AM -- 5:00PM
      </p>
    </section>
  )
}

export default Contact;