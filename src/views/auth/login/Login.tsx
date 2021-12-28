import React, { useState } from 'react';
import authService from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom'; // import do hook


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    let navigate = useNavigate();

    const onChangeUsername = (e: any) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        authService.login(username, password).then(
            () => {
                console.log('foi');
                navigate("/");
            },
            (error: any) => {
                console.log(error)
            }
        );
    };

    return (
        <div className='row d-flex justify-content-center'>
            <div className='col-12 col-xs-8 col-sm-8 col-md-6 col-lg-3'>
                <main className="form-signin">
                    <form onSubmit={handleLogin}>
                        <img
                            className="mb-4"
                            src="data:image/jpeg;base64,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"
                            width={72}
                            height={57}
                        />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                name="username"
                                onChange={onChangeUsername}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={onChangePassword}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            Sign in
                        </button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </main>
            </div>
        </div>
    )
        ;
}

export default Login;