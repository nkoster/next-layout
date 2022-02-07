import {useEffect, useState} from 'react'
import classes from './style.module.css'

const FadeIn = ({children}) => {

  const [oneTime, setOneTime] = useState(false)

  useEffect(() => {
    setTimeout(() => setOneTime(true), 100)
  }, [])

  return (
    <div className={`${classes.container} ${oneTime && classes.show}`}>
      {children}
    </div>
  )

}

export default FadeIn
