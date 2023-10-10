import React from "react";

const DataContext = React.createContext({
  name: "",
  email: "",
  resume: null,
  updateName: () => {},
  updateMail: () => {},
  updateFile: () => {},
});

export default DataContext;
