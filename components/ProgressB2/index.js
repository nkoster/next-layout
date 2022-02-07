import classes from './style.module.css'

const ProgressB2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        {Array.from(Array(10).keys()).map(k => {
          return (
            <div key={k} className={classes.box}>
              <div className={classes.boxLeft}> </div>
              <div className={classes.boxRight}> </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressB2
