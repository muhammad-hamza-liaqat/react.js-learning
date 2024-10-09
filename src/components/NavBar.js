import React from 'react';

export default function NavBar(props) {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href= {process.env.REACT_APP_URL_LOGO_HOME}>
                        <img
                            src="/logo512.png"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        {props.name}
                    </a>
                </div>
            </nav>
        </>
    );
}
