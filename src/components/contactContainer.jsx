import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const ContactContainer = () => (
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
      CONTACT ME.
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <h1>andrewblanco2@outlook.com</h1>
          <h1>7025263683</h1>.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default ContactContainer;
