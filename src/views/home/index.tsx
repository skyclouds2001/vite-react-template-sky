import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { Main } from '@/components'
import { updateCounter, type AppDispatch, type RootState } from '@/store'
import styles from './index.module.css'

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const counter = useSelector<RootState, RootState['main']['counter']>((store) => store.main.counter)

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
        <button onClick={() => dispatch(updateCounter(counter))}>保存</button>
      </div>
      <Main />
    </div>
  )
}

export default Home
