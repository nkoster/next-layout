import classes from './style.module.css'
import {useEffect, useState} from 'react'

const Grow = ({children}) => {

  const [oneTime, setOneTime] = useState(false)

  useEffect(() => {
    setTimeout(() => setOneTime(true), 100)
  }, [])

  return (
    <div className={`${classes.container} ${oneTime && classes.end}`}>
      {children}
    </div>
  )

}

export default Grow
