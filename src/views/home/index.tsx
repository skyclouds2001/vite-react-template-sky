import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import Main from '@/components/main'
import type { RootStore } from '@/store'
import { setCounter } from '@/store/modules/main'
import styles from './index.module.scss'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const { counter } = useSelector((store: RootStore) => store.main)

  const [value, setValue] = useState(counter)

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <div>
      <div className={styles.text}>Home</div>
      <div className="text-blue-200">Page</div>
      <PlusOutlined />
      <Icon icon="mdi-light:home" />
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
