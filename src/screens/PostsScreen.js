import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useFetch } from "../useFetch";

const Posts = () => {
  const [idUser, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("idUser"))
  );
  const { data } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${idUser}/posts`
  );
  useEffect(() => {
    localStorage.setItem("idUser", JSON.stringify(idUser));
  }, [idUser]);

  return (
    <div>
      <div>Post for Users: {idUser}</div>
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
                        <p>Title: {d.title}</p>
                      </Card.Title>
                    </Card.Body>
                    <Card.Text as="div">
                      <p>Id: {d.id}</p>
                      <p>Body: {d.body}</p>
                      <p>UserId: {d.userId}</p>
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {data.length === 0 ? (
        <h1>No data to show</h1>
      ) : (
        <button onClick={() => setCount((c) => c - 1)}>Back</button>
      )}

      {data.length === 100 ? (
        <h4>No data to show</h4>
      ) : (
        <button onClick={() => setCount((c) => c + 1)}>Next</button>
      )}
    </div>
  );
};

export default Posts;
