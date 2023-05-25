import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/lt.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/facundo-lagomarsino/"><img src={navIcon1} alt="icon1" /></a>
                            <a href="https://github.com/Facu-Lagomarsino"><img src={navIcon2} alt="icon2" /></a>
                            <a href="https://www.instagram.com"><img src={navIcon3} alt="icon3" /></a>
                        </div>
                        <p>Portfolio - Facundo Lagomarsino 2023.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )  
}