import React from 'react';

export const Header = () => (
    <>
        <div class="bar-1">
            <div class="container">
                <p className= " title-4 blue blue-100 text-capitalize">hello, world</p>
                <p className= "title-0 ">1</p>
                <p className= "title-1">2</p>
                <p className= "title-2">3</p>
                <p className= "title-3">4</p>
                <p className= "title-4">5</p>
                <p className= "title-5">5</p>
                <p className= "heading-1  ">1</p>
                <p className= "heading-2">2</p>
                <p className= "subtitle">3</p>
                <p className= "paragraph-1">4</p>
                <p className= "paragraph-2">5</p>
                <p className= "callout">5</p>
                <div class="col-lg-6"></div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
        <button className = "search-btn-lg bg-secondary text-white">hi</button>
    </>
)