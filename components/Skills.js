import {Container, Col, Row} from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>I have a solid understanding of multiple programming languages, including Python, Java, JavaScript, HTML, and CSS. In building this portfolio, I utilized React and put considerable effort into optimizing my code to deliver the best possible user experience. I am proficient in using popular code editors such as Visual Studio Code and Eclipse. Additionally, I have hands-on experience with AWS Cloud and Git for effective application deployment and version control management.<br></br> </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}