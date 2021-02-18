import React from "react";
import { useFetch } from "../useFetch";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const User = () => {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/users`);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {!data ? (
          "loading..."
        ) : (
          <>
            <Row>
              {data.map((d) => (
                <Col key={d.id} sm={12} md={6} lg={4} xl={3}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Body>
                      <Card.Title as="div">
                        <p>Username: {d.username}</p>
                      </Card.Title>
                    </Card.Body>
                    <Card.Text as="div">
                      <h3>User:</h3>
                      <p>ID: {d.id}</p>
                      <p>Name: {d.name}</p>
                      <p>Username: {d.username}</p>
                      <p>Email: {d.email}</p>
                      <p>Phone: {d.phone}</p>
                      <p>Website: {d.website}</p>
                    </Card.Text>
                    <Card.Text as="div">
                      <h3>Address:</h3>
                      <p>City: {d.address.city}</p>
                      <p>Lat: {d.address.geo.lat}</p>
                      <p>Lng: {d.address.geo.lng}</p>
                      <p>Lng: {d.address.street}</p>
                      <p>Suite: {d.address.suite}</p>
                      <p>Suite: {d.address.zipcode}</p>
                    </Card.Text>
                    <Card.Text as="div">
                      <h3>Company</h3>
                      <p>Bs: {d.company.bs}</p>
                      <p>Catch phrase: {d.company.catchPhrase}</p>
                      <p>Name: {d.company.name}</p>
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default User;
