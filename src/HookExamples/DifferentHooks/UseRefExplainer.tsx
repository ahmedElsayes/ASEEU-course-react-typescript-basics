import React, { createRef, useEffect, useRef, useState } from 'react'

export default function UseRefExplainer() {
  const [jobName, setJobName] = useState("")
  // const [counts, setCounts] = useState(1)
  const counts = useRef(1)
  const inputRef = createRef<HTMLInputElement>()
  useEffect(() => {
    // setCounts(prevCount => prevCount+1)
    counts.current = counts.current + 1
  }, [jobName])
  console.log(jobName, counts)

  const activateFocuse = () => {
    // console.log("Reference to input: ", inputRef.current)
    inputRef.current?.focus()
  }
  return (
    <>
      <hr />
      <div className='container'>
        <h2 className='section-head'>UseRef Explanation</h2>
        <div className='row justify-content-center align-items-center mt-5'>
          <div className='col-md-4 col-xs-12'>
            <input
              ref={inputRef}
              value={jobName}
              onChange={e => setJobName(e.target.value)}
              placeholder='Enter your job name'
            />
          </div>
          <div className='col-md-4 col-xs-12'>
            <button onClick={activateFocuse} className='special-button'> Take me to input </button>
          </div>
        </div>
        <div className='row justify-content-center align-items-center mt-5 mb-5'>
          <div className='col-md-4 col-xs-12'>
            <h2> Job Name: {jobName} </h2>
            <h5> Count of Entries: {counts.current}</h5>
          </div>
        </div>
      </div>
    </>

  )
}
