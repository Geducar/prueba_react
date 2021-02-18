import React, { useState, useEffect } from "react";
import { useFetch } from "../useFetch";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const CommentsScreen = () => {
  const [idPost, setComment] = useState(() =>
    JSON.parse(localStorage.getItem("idPost"))
  );

  const { data, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`
  );

  useEffect(() => {
    localStorage.setItem("idPost", JSON.stringify(idPost));
  }, [idPost]);

  return (
    <div>
      <div>ID Post: {idPost}</div>
      {data.length}
      <div>
        {!data ? (
          "loading..."
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <>
            <Row>
              {data.map((d) => (
                <Col key={d.id} sm={12} md={6} lg={4} xl={3}>
                  <Card className="my-3 p-3 rounded">
                    <Card.Body>
                      <Card.Title as="div">
                        <p>Name: {d.name}</p>
                      </Card.Title>
                    </Card.Body>
                    <Card.Text as="div">
                      <p>Id: {d.id}</p>
                      <p>Body: {d.body}</p>
                      <p>Email: {d.email}</p>
                      <p>PostID: {d.postId}</p>
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
        <button onClick={() => setComment((c) => c - 1)}>Back</button>
      )}

      {data.length === 100 ? (
        <h4>No data to show</h4>
      ) : (
        <button onClick={() => setComment((c) => c + 1)}>Next</button>
      )}
    </div>
  );
};

export default CommentsScreen;
