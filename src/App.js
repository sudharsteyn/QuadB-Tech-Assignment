import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import JobApply from "./components/JobApply";
import Preview from "./components/Preview";

import DataContext from "./context/context";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  return (
    <DataContext.Provider
      value={{
        name,
        email,
        resume,
        updateName: setName,
        updateMail: setEmail,
        updateFile: setResume,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/job/apply" component={JobApply} />
        <Route exact path="/preview" component={Preview} />
      </Switch>
    </DataContext.Provider>
  );
}

export default App;
