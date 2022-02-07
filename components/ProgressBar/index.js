import classes from './style.module.css'
import useColors from '../../hooks/colors'

const ProgressBar = () => {

  return (
    <div className={classes.mainContainer} style={{color:useColors().main.color}}>
      <div className={classes.subContainer}>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        <div className={classes.aPieceLeft}> </div>
        <div className={classes.aPieceRight}> </div>
        {/*{Array.from(Array(10).keys()).map(k => {*/}
        {/*  return (*/}
        {/*    <>*/}
        {/*      <div className={classes.aPieceLeft}> </div>*/}
        {/*      <div className={classes.aPieceRight}> </div>*/}
        {/*    </>*/}
        {/*  )*/}
        {/*})}*/}
      </div>
    </div>
  )
}

export default ProgressBar
