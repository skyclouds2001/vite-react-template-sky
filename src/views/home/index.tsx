import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { PlusOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { Main } from '@/components'
import { updateCounter, type AppDispatch, type RootState } from '@/stores'
import styles from './index.module.css'

const Home: React.FC = () => {
  const i18n = useTranslation()

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
      <div>{i18n.t('main')}</div>
    </div>
  )
}

export default Home
