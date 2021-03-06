import React,{useState} from 'react'
import { Container, Form, FormControl, Nav, NavDropdown,Button, Navbar } from 'react-bootstrap'

function NavBar() {
   const [text,setText]=useState("Titanic");    
 const searchfilm =(text)=> {setText({movies:movies.filter(movie=>movie.title!==text)})
     ;
   }
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style= {{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled >
            Link
          </Nav.Link>
        </Nav>
        
        <Form className="d-flex" style= {{paddingRight:'10px'}}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
           <Button variant="outline-success" onClick={()=>serachfilm(movie.title)}>Search</Button> 
        </Form>
        <Form className="d-flex" >
          <FormControl
            type="add"
            placeholder="add new film"
            className="me-2"
            aria-label="add"
          />
          <Button variant="outline-success">Add</Button>
        </Form>
       
        
      </Navbar.Collapse>
    </Container>
  </Navbar> </ div>
  )
}

export default NavBar;
 