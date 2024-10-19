import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

// Add the CSS styles directly within the component
const styles = {
  projectCardView: {
    box-shadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459), 0 0 0 3px rgba(255, 255, 255, 0.1)",
    color: "white !important",
    backgroundColor: "transparent !important",
    opacity: "0.9 !important",
    transition: "all 0.5s ease 0s !important",
    height: "100% !important",
  },
  projectCardViewHover: {
    transform: "scale(1.02) !important",
    overflow: "hidden !important",
    boxShadow: "0 4px 4px 5px rgba(129, 72, 144, 0.561), 0 0 0 5px rgba(255, 255, 255, 0.2)",
  },
};

// Apply the styles to the project card
export default function ProjectCardsWithStyles(props) {
  return (
    <div style={styles.projectCardView}>
      <ProjectCards {...props} />
    </div>
  );
}
