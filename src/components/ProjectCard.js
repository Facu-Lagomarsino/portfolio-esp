import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl }) => {
    const reposUrl = "https://github.com/Facu-Lagomarsino";

    return (
        <Col size={12} sm={6} md={4}>
            <a href={reposUrl}>
                <div className="proj-imgbx">
                        <img src={imgUrl} alt="link" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}