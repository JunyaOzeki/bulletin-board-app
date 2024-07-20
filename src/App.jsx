import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThreadList } from "./ThreadList";
import { NewThread } from "./NewThread";
import { PostList } from "./PostList";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <header>
        <h1>掲示板</h1>
        <Link to="/threads/new" className="create-thread">
          スレッドをたてる
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<NewThread />} />
          <Route path="/threads/:thread_id" element={<PostList />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
