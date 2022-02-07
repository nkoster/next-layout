import classes from './style.module.css'
import {useState} from 'react'
import useMyLayout from '../../hooks/colors'
import FadeIn from '../FadeIn'
import ProgressBar from '../ProgressBar'
import ProgressB2 from '../ProgressB2'

const Layout = ({children}) => {

  const myLayout = useMyLayout()

  const [scrollPos, setScrollPos] = useState(0)

  const onScroll = event => {
    setScrollPos(event.target.scrollTop)
  }

  return (
    <div className={classes.container} style={myLayout.main}>
      <header className={`${classes.header} ${scrollPos > 30 && classes.collapsed}`}>
      </header>
      <main className={`${classes.main} ${scrollPos > 30 && classes.large}`} onScroll={onScroll}>
        <FadeIn><h1>aap</h1></FadeIn>
        <FadeIn><ProgressBar /></FadeIn>
        <FadeIn><ProgressB2 /></FadeIn>
        <div>{children}</div>
        <footer className={classes.footer}>noot</footer>
      </main>
    </div>
  )
}

export default Layout
