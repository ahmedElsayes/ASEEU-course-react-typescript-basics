import React, { useCallback, useState } from 'react'
import NumbersList from '../Helpers/NumbersList'

export default function UseCallBackExplainer() {
  const [number, setNumber] = useState(0)
  const [toggledVal, setToggledVal] = useState(false)

  // const getNumbersList = () => {
  //   return [number, number+1, number+2]
  // }

  const getNumbersList = useCallback(
    (addedVal: number) => {
      return [number, number+addedVal+1, number+addedVal+2]
    },
    [number],
  )

  const toggleValues = () => {
    setToggledVal(!toggledVal)
  }

  return (
    <>
      <hr />
      <div className='container'>
        <h2 className='section-head'>UseCallBack Explanation</h2>
        <div className='row justify-content-center align-items-center mt-5'>
          <div className='col-md-4 col-xs-12'>
            <input
              type='number'
              value={number}
              onChange={e => setNumber(parseInt(e.target.value))}
              placeholder='Enter your job name'
            />
          </div>
          <div className='col-md-4 col-xs-12'>
            <NumbersList getNums={getNumbersList} />
          </div>
        </div>
        <div className='row justify-content-center align-items-center mt-5 mb-5'>
          <div className='col-md-4 col-xs-12'>
            <button onClick={toggleValues} className='special-button'> Toggle Values </button>
          </div>
          <div className='col-md-4 col-xs-12'>
            <h5>{toggledVal ? "True Value" : "False Value"}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
