import classes from './HandelFetchComponents.module.css'
export default function ErrorMessage({error}) {
  return (
    <div className={classes.error}>{error}</div>
  )
}
