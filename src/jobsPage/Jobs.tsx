import React from "react";
import jobs from "../data/jobs";
import JobsSelector from "../components/JobsSelector";
import JobScreen from "../components/JobScreen";
import { useState } from "react";
import { jobProp } from "../components/JobsSelector";
function Jobs() {
  const [job, setJob] = useState(jobs[0])

  const onSelect = (selectedJob: jobProp) => {
    setJob(selectedJob)
  }

  return (
    <>
      <div className="row justify-content-center align-items-align-items-end">
        <div className="col-md-4 col-sm-12">
          <JobsSelector
            jobs={jobs}
            onJobSelect={onSelect}
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <JobScreen selectedJob={job} />
        </div>
      </div>
    </>
  );
}

export default Jobs