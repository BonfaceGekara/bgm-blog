import React from "react";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary border-bottom">
                <div className="container">
                    
                    <a className="navbar-brand text-white fw-bold" href="#">BGM-Blog</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse navbar-dark justify-content-end" id="navbarContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;