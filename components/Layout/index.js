import classes from './style.module.css'
import {useEffect, useState} from 'react'
import useMyLayout from '../../hooks/colors'
import FadeIn from '../FadeIn'
import ProgressBar from '../ProgressBar'
import ProgressB2 from '../ProgressB2'

const Layout = ({children}) => {

  const myLayout = useMyLayout()

  const [scrollPos, setScrollPos] = useState(0)
  const [progress, setProgress] = useState(0)

  const onScroll = event => {
    setScrollPos(event.target.scrollTop)
  }

  useEffect(() => {
    setInterval(() => {
      setProgress(p => {
        console.log(p)
        if (p < 10) {
          return p + 1
        } else {
          return 0
        }
      })
    }, 1000)
  },[])

  return (
    <div className={classes.container} style={myLayout.main}>
      <header className={`${classes.header} ${scrollPos > 30 && classes.collapsed}`}>
      </header>
      <main className={`${classes.main} ${scrollPos > 30 && classes.large}`} onScroll={onScroll}>
        <FadeIn><h1>aap</h1></FadeIn>
        <FadeIn><ProgressBar /></FadeIn>
        <FadeIn><ProgressB2 progress={progress * 10}/></FadeIn>
        <div>{children}</div>
        <footer className={classes.footer}>noot</footer>
      </main>
    </div>
  )
}

export default Layout
