import React, { useEffect, useState } from 'react'

type propType = {
  getNums: (addedVal: number) => number[]
}
export default function NumbersList({ getNums }: propType) {
  const [numList, setNumList] = useState<number[]>([])

  useEffect(() => {
    setNumList(getNums(10))
    console.log("Render Numbers List")
  }, [getNums])

  return (
    <div>
      {numList.map((num, indx) => {
        return (
          <span key={indx} className='special-outline'>{num}</span>
        )
      })}
    </div>
  )
}
