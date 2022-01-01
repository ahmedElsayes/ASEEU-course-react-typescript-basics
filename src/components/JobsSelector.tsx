import React from 'react'
import { useState } from 'react'

export type jobProp = {
  title: string;
  jobtype: string;
  category: string;
  jobstatus: string;
  selected?: string;
}
type props = {
  jobs: jobProp[];
  onJobSelect: (job:jobProp) => void;
}
export default function JobsSelector({jobs, onJobSelect}: props) {

  const [selectedJobs, setSelectedJobs] = useState(jobs)

  const onSelection = (job: jobProp, indx: number) => {
    setSelectedJobs((preSelections) => {
      const newJobs = preSelections.map((job: jobProp, jobIndx: number) => {
        if (jobIndx === indx) {
          return {...job, selected: "active"}
        } else {
          return {...job, selected: ""}
        }
      })
      return newJobs
    })

    onJobSelect(job)
  }
  return (
    <>
    {selectedJobs.map((job, indx) => {
      return (
        <div
          key={indx}
          className= {`job-card ${job.selected}`}
          onClick={() => onSelection(job, indx)}
        >
          <h4>Title: <span> {job.title} </span></h4>
          <p>Job Type: <span> {job.title} </span></p>
          <p>Job Category: <span> {job.title} </span></p>
          <p>Job Status: <span> {job.title} </span></p>
        </div>
      )
    })}
    </>
  )
}
