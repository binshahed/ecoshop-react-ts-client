import logo from "assets/image/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="py-3 w-75 mx-3">
              <div className="d-flex input-group input-group-md px-5 ">
                <input
                  className="form-control border-0 secondary-color"
                  type="text"
                  placeholder="Search in EcoShop"
                  name=""
                  id=""
                />
                <button className="btn main-btn-color">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>

            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
