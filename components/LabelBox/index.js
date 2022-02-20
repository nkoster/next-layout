import classes from './style.module.css'
import useMyColors from '../../hooks/colors'

const LabelBox = ({label, text}) => {

  const color = useMyColors().main.color
  const background = useMyColors().main.background

  return (
    <div className={classes.container} style={{color,background}}>
      <div className={classes.box}>{text}</div>
      <div className={classes.label} style={{color,background}}>{label}</div>
    </div>
  )
}

export default LabelBox
