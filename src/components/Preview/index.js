import { Link } from "react-router-dom";

import DataContext from "../../context/context";
import "./index.css";

const Preview = (props) => {
  return (
    <DataContext.Consumer>
      {(value) => {
        const { name, email, resume } = value;
        console.log(resume);
        const blob = new Blob([resume], { type: "application/pdf" });
        const blobURL = URL.createObjectURL(blob);
        return (
          <div>
            <p>Successfully applied</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Resume </p>
            <div style={{ height: "500px", overflow: "scroll" }}>
              <object
                data={blobURL}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                PDF Preview
              </object>
            </div>
            <Link to="/">Home</Link>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default Preview;
