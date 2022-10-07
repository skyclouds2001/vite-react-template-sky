import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCounter } from '@/store/modules/main'

export default function Main(): JSX.Element {
  const dispatch = useDispatch()

  const { counter } = useSelector((store: any) => store.main)

  const [value, setValue] = useState(counter)

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <div>
      <span>Main</span>
      <div>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={() => dispatch(setCounter({ counter: value }))}>保存</button>
      </div>
    </div>
  )
}
