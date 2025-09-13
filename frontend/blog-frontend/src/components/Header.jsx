import React from "react";

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary border-bottom">
                <div class="container">
                    
                    <a class="navbar-brand text-white fw-bold" href="#">BGM-Blog</a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse navbar-dark justify-content-end" id="navbarContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;