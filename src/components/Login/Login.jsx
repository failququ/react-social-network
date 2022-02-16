import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name={"login"} type="text" component={"input"} />
            </div>

            <div>
                <Field placeholder="Password" name={"password"} type="password" component={"input"} />
            </div>

            <div>
                <Field placeholder="Login" name={"checkbox"} type="checkbox" component={"input"} /> remember me
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>


    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>

    )
}

export default Login;