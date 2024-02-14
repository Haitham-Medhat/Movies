import classes from './Input.module.css';


const Input = ({type ,  id, register, label, error }) => {

  let errorContent = '';
  let classInvalidation = ''
  if (error) {
    console.log(error)
    errorContent = <div id={id} className={classes.invalidGrid + " invalid-feedback text-left"}>
      {error}
    </div>;
    classInvalidation = 'is-invalid'
  }

  return (
    <div className='container'> 
        <div className={classes.grid}>
          <label className={`${classInvalidation} ' ' ${classes.label_s}    `} htmlFor={id}>
            {label}
          </label>
          <input
            className={classes.input_s}
            id={id}
            type={type}
            {...register(id)}
          />
          {errorContent}
        </div> 
    </div>
  );
}

export default Input;
