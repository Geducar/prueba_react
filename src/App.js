import React from "react";
import UserData from "./screens/UserScreen";
import Posts from "./screens/PostsScreen";
import Comments from "./screens/CommentsScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={UserData} />
          <Route path="/users" component={UserData} />
          <Route path="/posts" component={Posts} />
          <Route path="/comments" component={Comments} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
