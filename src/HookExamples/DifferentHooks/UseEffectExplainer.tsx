import React, { useEffect, useState } from 'react'

export default function UseEffectExplainer() {
  const [buttonVal, setButtonVal] = useState("")
  const [items, setItems] = useState([])
  // Tracking the PageYxaisOffset
  const [newOffset, setNewOffset] = useState(0)

  const handleScroll = () => {
    setNewOffset(window.pageYOffset)
  }

  // Now we will check the mount and unmount phases and update phase
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${buttonVal}`)
      .then(response => response.json())
      .then(json => setItems(json))
    // console.log("Component mounted: ", buttonVal)
    // console.log("updated component: ", buttonVal)
    // return () => {
    //   console.log("unMounted!!: ", buttonVal)
    // }
  }, [buttonVal])

  // useEffect to handle scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <div className='container'>
        <h2 className='section-head'>UseEffect Explanation</h2>
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-3">
            <button className='special-button' onClick={() => setButtonVal("comments")}>comments</button>
          </div>
          <div className="col-3">
            <button className='special-button' onClick={() => setButtonVal("users")}>users</button>
          </div>
          <div className="col-3">
            <button className='special-button' onClick={() => setButtonVal("posts")}>posts</button>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-5 mb-5">
          <h2>{buttonVal}</h2>
        </div>
        <div className="row justify-content-center align-items-center mt-5 mb-5">
          {items.map(item => {
            return (
              <pre>{JSON.stringify(item)}</pre>
            )
          })}
        </div>
      </div>
      <div className='fixed-position'>
        <p>New Offset:</p>
        <p>{newOffset.toFixed(2)}</p>
      </div>
    </>
  )
}
