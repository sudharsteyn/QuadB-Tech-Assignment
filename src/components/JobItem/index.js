import { withRouter } from "react-router-dom";
import "./index.css";

const JobItem = (props) => {
  const { jobDetails } = props;
  const { job_title, employer_name, job_city, job_country } = jobDetails;
  console.log(jobDetails);

  const applyJob = () => {
    const { history } = props;
    history.push("/job/apply");
  };

  return (
    <li className="job-item">
      <h1>{job_title}</h1>
      <p>{employer_name}</p>
      <p>
        Location: {job_city} - {job_country}
      </p>
      <button type="button" onClick={applyJob}>
        Apply
      </button>
    </li>
  );
};

export default withRouter(JobItem);
