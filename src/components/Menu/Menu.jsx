import Card from 'react-bootstrap/Card';
import './menu.css';

function Menu() {

  return (
    <section className='container'>
      <h2 className='pageTitle'>
        Menu
      </h2>
      <Card>
        <Card.Header>Coffee & Espresso</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Espresso -- $2.75
            </p>
            <p>
              Americano -- $3.25
            </p>
            <p>
              Cappuccino -- $4.00
            </p>
            <p>
              Latte -- $4.25
            </p>
            <p>
              Cold Brew -- $4.50
            </p>
            <p>
              Seasonal Latte (Pumpkin, Vanilla, etc.) -- $4.75
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Tea & More</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Chai Latte -- $4.25
            </p>
            <p>
              Matcha Latte -- $4.50
            </p>
            <p>
              Herbal Tea -- $3.00
            </p>
            <p>
              Hot Chocolate -- $3.75
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Pastries</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Butter Croissant -- $3.50
            </p>
            <p>
              Chocolate Croissant -- $3.75
            </p>
            <p>
              Blueberry Muffin -- $3.25
            </p>
            <p>
              Banana Bread Slice -- $3.25
            </p>
          </blockquote>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Light Bites</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Avocado Toast -- $6.50
            </p>
            <p>
              Turkey & Swiss Sandwich -- $7.75
            </p>
            <p>
              Veggie Wrap -- $7.25
            </p>
            <p>
              Quiche of the Day -- $6.95
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </section>
  )
}

export default Menu;