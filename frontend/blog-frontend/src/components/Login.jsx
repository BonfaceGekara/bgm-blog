function Login () {
    return(
        <div className="container d-flex justify-content-center min-vh-100">
            <div className="card m-2 p-3 shadow-sm">
                <h1>Log in</h1>
                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" required/>
                    </div>
                    <div>
                        <button className="btn btn-secondary w-100">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;