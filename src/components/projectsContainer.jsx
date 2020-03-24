import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Projects extends React.Component {
  render() {
    return (
      <div className="centered">
        <div className="cards">
          <Card className="card">
            <CardImg src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>brewPhoria</CardTitle>
              <CardSubtitle>Beer Tracker</CardSubtitle>
              <CardText>
                an application for keeping track of all those beers you've
                tried!
              </CardText>
              <Button>Go</Button>
            </CardBody>
          </Card>

          <Card className="card">
            <CardImg src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>thisPacificPlace</CardTitle>
              <CardSubtitle>traveling to the Philippines ?</CardSubtitle>
              <CardText>
                This application gives you a basic rundown of what to do's and
                eats in the beautiful islands of the Philippines.
              </CardText>
              <Button>Go</Button>
            </CardBody>
          </Card>

          <Card className="card">
            <CardImg src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>PetShop</CardTitle>
              <CardSubtitle>
                Dog Grooming business management application
              </CardSubtitle>
              <CardText>
                an application for managing your dog grooming business.
              </CardText>
              <Button>Go</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Projects;
