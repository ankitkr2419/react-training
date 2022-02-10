import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export const UserCard = (props) => {
  const { id, first_name, last_name, email, avatar } = props;

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
      <div>
        <CardImg
          alt="Card image cap"
          src={avatar}
          top
          style={{
            height: 80,
            margin: 10,
          }}
        />
      </div>
      <CardBody>
        <CardTitle tag="h5">
          {id} {first_name} {last_name}
        </CardTitle>
        <CardText>{email}</CardText>
      </CardBody>
    </Card>
  );
};
