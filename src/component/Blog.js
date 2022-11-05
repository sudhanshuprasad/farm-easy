import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Blog.css'
import {Link} from 'react-router-dom'

function Blog() {
  return (
    <div id="cards">
      <h1 id="blogname">BLOG ENTERIES</h1>
      <h2 id="forcropshead">Foreign Crops Procedure</h2>
      < div className="forcrops">
      {/* <h2>Foreign Crops</h2> */}
    {/* <header className="masthead" >
            <div classname="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>BLOG</h1>
                            <span className="subheading">Farmer's story</span>
                        </div>
                    </div>
                </div>
            </div>
        </header> */}
    <Card className="card" id="forcrop1" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>


    <Card className="card" id="forcrop2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>


    <Card className="card" id="forcrop3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>

    </div>
     
    <h2 id="newsl"> NewsLetters </h2>
    <div className="newsletter">
      

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
      </Card.Body>
    </Card>
    </div>
    
    <h2 id="ff">Food Facts</h2>
    <div className="foodfacts">
      

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
        </Card.Body>
      </Card>
  
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="details"><Button variant="primary" >Go somewhere</Button></Link>
        </Card.Body>
      </Card>
      </div>
    
    </div>
  );
}

export default Blog;