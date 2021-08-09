import logo from './images/logo.jpg';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';


const myStyles = makeStyles(() => ({
    mycard: {
        marginTop: '10rem',
        boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'
    }
}))

const Login = () => {

    const classes = myStyles();

    const loginform = {
        username: 'username',
        password: '1234'
    };

    const formSubmit = (values) => {
        const userdata ={
            name : 'leon kennedy',
            email : 'leon@gmail.com',
            password : '1234'
        }
        sessionStorage.setItem('user', JSON.stringify(userdata));
        window.location.replace('/product');
    }

    return (
        <div>
            <div className="col-md-3 mx-auto w-100" >
                <div className={clsx('card', classes.mycard)} style={{ marginTop: '10rem' }}>
                    <div className="card-body">

                        <div className="col-md-3 mx-auto mt-4">
                            <img src={logo} className="img-fluid" />
                        </div>
                        <Formik
                        initialValues = {loginform}
                        onSubmit = {formSubmit}>
                        { ({
                            values, 
                            handleChange,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                        <label className="mt-5 w-100">Username</label>
                        <input className="form-control" onChange={handleChange} value={values.username} />

                        <label className="mt-4">Password</label>
                        <input className="form-control" onChange={handleChange} value={values.password} type="password" />

                        <button type="submit" className="mt-4 btn btn-primary w-100">Login Now</button>

                            </form>
                          
                        )}
                        </Formik>

                    
                        <hr className="mt-4" />
                        <a href="#">Forgot Password</a>
                        <div className="float-end">
                            <a href="#">Not Registered Yet?</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Login;
