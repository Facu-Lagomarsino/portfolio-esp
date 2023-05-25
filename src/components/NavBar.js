import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/lt.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {  HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const scrollElement = () => {
        let el = document.getElementById("connect");

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }


    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Habilidades</Nav.Link>
                            <Nav.Link href="#projectss" className={activeLink === "projectss" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projectss")}>Proyectos</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/facundo-lagomarsino/"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/Facu-Lagomarsino"><img src={navIcon2} alt="" /></a>
                                <a href="https://www.instagram.com"><img src={navIcon3} alt="" /></a>
                            </div>
                        <HashLink>    
                            <button className="vvd" onClick={(e) => scrollElement()}><span>Conectemos</span></button>
                        </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}