import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export const BlogCard = (props) => {
  const { id, title, body } = props;

  return (
    <Card
      style={{
        height: 100,
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
        display: "flex",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">
          {id} {title}
        </CardTitle>
        <CardText>{body}</CardText>
      </CardBody>
    </Card>
  );
};
