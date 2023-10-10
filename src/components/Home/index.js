import { useState } from "react";

import Header from "../Header";
import JobItem from "../JobItem";

import "./index.css";

const Home = () => {
  const [skill, setSkill] = useState("");
  const [jobData, setJobData] = useState([]);

  const onChangeSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleJobSearch = async (e) => {
    e.preventDefault();
    const url = `https://jsearch.p.rapidapi.com/search?query=${skill}&page=1&num_pages=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "48a3ecfb88msh7e3680aabc9dbe8p139797jsn3d5c965d0b56",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setJobData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-route">
      <Header />
      <form onSubmit={handleJobSearch}>
        <h1>what programming language they’re looking for a job in</h1>
        <input
          onChange={onChangeSkill}
          type="text"
          placeholder="Enter your skill"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {jobData.length > 0 ? (
          <ul className="job-item-list">
            {jobData.map((eachJob, i) => (
              <JobItem key={i} jobDetails={eachJob} />
            ))}
          </ul>
        ) : (
          <div className="no-result">
            <p>No search result</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
