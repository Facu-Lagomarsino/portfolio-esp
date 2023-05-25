import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ImgCube  from "../assets/img/Block_Matrix_x2__L.png";
import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg7 from "../assets/img/project-img-7.png";
import projImg8 from "../assets/img/project-img-8.png";
import projImg9 from "../assets/img/project-img-9.png";
import projImg10 from "../assets/img/project-img-10.png";
import projImg11 from "../assets/img/project-img-11.png";
import projImg12 from "../assets/img/project-img-12.png";
import colorSharp1 from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg1,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg2,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg3,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg4,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg5,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg6,
        }
    ];

    const works = [
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg7,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg8,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg9,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg10,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg11,
        },
        {
            title: "Presentaciones",
            description: "Desarrollo Front-end",
            imgUrl: projImg12,
        }
    ];

    return (
        <section className="project" id="projectss">
            <Container>
                <Row>
                    <Col size={12}>
                        <Row style={{ justifyContent: "center" }}>
                            <Col xs={10} md={2} xl={2}>  

                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "imgCube animate__animated animate__zoomIn" : ""}>
                                            <img src={ImgCube} alt="Header Img" />
                                        </div> }
                                </TrackVisibility>

                                <TrackVisibility>
                                    {({ isVisible }) => 
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2>Proyectos</h2>
                                    </div>}   
                                </TrackVisibility> 

                            </Col>

                        </Row>    

                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <p>Dale Click en la imágenes para visitar mi repositorio.</p>  
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item >
                                            <Nav.Link eventKey="first">Web</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Work</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">View</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                                <p>Presentaciones de Sitios Web Responsive.</p>
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>Trabajos Privados.</p>
                                            <Row>
                                                {
                                                    works.map((workS, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...workS}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>
                                                Por política y privacidad de las empresas a las que presto mi servicio, los proyectos terminados no son visibles.<br/> En cualquier caso, mis habilidades y conocimientos como <br/>Desarrollador front-end se ven reflejados.<br/> 
                                                Te invito a visitar mi código en <a href="https://github.com/Facu-Lagomarsino">GitHub</a>
                                            </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div> }
                        </TrackVisibility>    
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left-p" src={colorSharp1} alt="background color"/>
            <img className="background-image-right-p" src={colorSharp2} alt="color" />
        </section>
    )
}