import React, { useEffect, useState } from 'react'

type propType = {
  getNums: (addedVal: number) => number[]
}
export default function NumbersList({ getNums }: propType) {
  const [numsList, setNumsList] = useState<number[]>([])
  useEffect(() => {
    setNumsList(getNums(10))
    console.log("Render Numbers List")
  }, [getNums])
  return (
    <div>
      {numsList.map(num => {
        return (
          <span className='special-outline' key={num}>{num}</span>
        )
      })}
    </div>
  )
}
