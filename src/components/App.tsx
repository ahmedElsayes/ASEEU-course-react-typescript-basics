import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Notespage from "./Notespage";
import Mainform from "./loging_files/Mainform";
import Jobs from "../jobsPage/Jobs";
import HookExamples from "../HookExamples/HookExamples";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import TestPage from "../DropdownPage/TestPage";

function App() {
  return (
    <div>
      <Header />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/draganddrop">
            <DragAndDrop />
          </Route>
          <Route path="/hooks">
            <HookExamples />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/register">
            <Mainform />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/" exact>
            <Notespage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;
