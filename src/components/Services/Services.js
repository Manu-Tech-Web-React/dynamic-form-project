import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import course1 from "../../assets/img/hbo.jpeg"
import course2 from "../../assets/img/netflix.jpeg";
import course3 from "../../assets/img/prime.jpeg";
import CardService from "../CardService";

export default function Services() {
    const servicesArray = [
      {
        title: "WordPress Course",
        subtitle: "Learn about the most popular CMS",
        image: course1,
        footer: "Click to go ➡️",
        link: "#!",
      },
      {
        title: "React Native",
        subtitle:
          "lets you create truly native apps and doesn't compromise your users' experiences.",
        image: course2,
        footer: "Click to go ➡️",
        link: "#!",
      },
      {
        title: "React Web",
        subtitle: "makes it painless to create interactive UIs",
        image: course3,
        footer: "Click to go ➡️",
        link: "#!",
      },
    ];
  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Services</h2>
            <h4 className="pb-3 text-center">
              Check some of my services that i did
            </h4>
            <Row xs={1} md={3} className="g-4 mt-4">
              {servicesArray.map((service, index) => (
                <CardService service={service} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
