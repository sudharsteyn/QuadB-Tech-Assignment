import { useState } from "react";

import Header from "../Header";
import DataContext from "../../context/context";
import "./index.css";

const JobApply = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [resume, setResume] = useState(null);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeMail = (e) => {
    setMail(e.target.value);
  };
  const changeFile = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <DataContext.Consumer>
      {(value) => {
        const { updateName, updateMail, updateFile } = value;

        const submitDetails = (e) => {
          e.preventDefault();
          const { history } = props;
          updateName(name);
          updateMail(mail);
          updateFile(resume);
          history.push("/preview");
        };

        return (
          <div className="apply-route">
            <Header />
            <form onSubmit={submitDetails}>
              <h1>Enter your details to apply</h1>
              <label htmlFor="name">Name</label>
              <input onChange={changeName} id="name" type="text" required />
              <label htmlFor="mail">Email</label>
              <input onChange={changeMail} id="mail" type="text" required />
              <label htmlFor="file">Upload Resume</label>
              <input
                onChange={changeFile}
                id="file"
                type="file"
                accept=".pdf"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default JobApply;
