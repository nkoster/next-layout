import classes from './style.module.css'
import {useEffect, useState} from 'react'

const Grow = ({children}) => {

  const [oneTime, setOneTime] = useState(false)

  useEffect(() => {
    setOneTime(true)
  }, [])

  return (
    <div className={classes.container}>
      <div className={`${classes.start} ${oneTime && classes.end}`}>
      {children}
    </div>
    </div>
  )

}

export default Grow
