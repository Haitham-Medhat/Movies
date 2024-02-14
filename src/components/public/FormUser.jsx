
import classes from "./SignUp.module.css";
import Input from '../UI/Input';
import { NavLink } from 'react-router-dom';
import ErrorMessage from "../UI/ErrorMessage";

export default function FormUser({ errorAuth, header, handleSubmit, onSubmit, register, errors, linkPhares, path }) {

    return (
        <div
            className={
                " text-center d-flex flex-column justify-content-center  " + classes.he
            }
        >
            <form className="w-50 p-4 m-auto " onSubmit={handleSubmit(onSubmit)}>
                {errorAuth ? <ErrorMessage error={errorAuth} /> : <></>}
                <h2 className="text-center mb-2">{header}</h2>
                <Input
                    key={1}
                    label="Email : "
                    id="email"
                    type="email"
                    register={register}
                    error={errors && errors.email ? errors.email.message : undefined}
                />
                <Input
                    key={2}
                    label="Password :"
                    id="password"
                    type="password"
                    register={register}
                    error={errors && errors.password ? errors.password.message : undefined}
                />
                <button className="btn btn-outline-info px-3 mt-2">
                    {header}
                </button>
                <div className=" d-flex justify-content-end">
                    <NavLink to={path} className={'mt-3 ' + classes.link}>
                        {linkPhares}
                    </NavLink>
                </div>

            </form>
        </div>
    )
}
