import React from 'react'
import { jobProp } from './JobsSelector'
type prop = {
  selectedJob: jobProp
}

export default function JobScreen({selectedJob}: prop) {
  return (
    <div className="job-details">
      <h4>Title: <span> {selectedJob.title} </span></h4>
      <p>Job Type: <span> {selectedJob.jobtype} </span></p>
      <p>Job Category <span> {selectedJob.category} </span></p>
      <p>Job Status <span> {selectedJob.jobstatus} </span></p>
    </div>
  )
}
