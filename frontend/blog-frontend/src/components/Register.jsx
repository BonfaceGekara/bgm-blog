function Register() {
    return(
        <div className="container d-flex justify-content-center min-vh-100">
            <div className="card m-2 p-3 shadow-sm">
                <h1>Sign up</h1>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Full Name:</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">New Password:</label>
                        <input type="password" className="form-control" id="password" required/>
                    </div>
                    <div className="mb-3">
                        <label for="cpassword" className="form-label">Confirm Password:</label>
                        <input type="password" className="form-control" id="cpassword" required/>
                    </div>
                    <div>
                        <button className="btn btn-secondary w-100">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;