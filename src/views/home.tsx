import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import Main from '@/components/main'
import type { RootStore } from '@/store'
import { setCounter } from '@/store/modules/main'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const { counter } = useSelector((store: RootStore) => store.main)

  const [value, setValue] = useState(counter)

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <div>
      <span>Home</span>
      <PlusOutlined />
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(parseInt(e.target.value))
          }}
        />
        <button onClick={() => dispatch(setCounter({ counter: value }))}>保存</button>
      </div>
      <Main />
    </div>
  )
}

export default Home
