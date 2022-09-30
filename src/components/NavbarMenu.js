import { Container, Navbar} from "react-bootstrap";

export default function NavbarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">
            Dynamic <b>Form</b>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Navbar.Text>Signed in as: </Navbar.Text>
              <a
                href="https://manuherreramesen506.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Manuel Herrera
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
