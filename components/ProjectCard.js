import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, description2, description3 }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img 
        src={imgUrl} 
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br>
          </br>
          <a href = "https://github.com/sarashareef/TaxMate"><span>{description2}</span></a>
          <a href = "https://github.com/sarashareef/WeatherWiz-Pro/blob/main/weather.py"> <span>{description3}</span></a>
        </div>
      </div>
    </Col>
  )
}