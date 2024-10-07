import React from 'react';

export default function NavBar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={process.env.REACT_APP_URL_LOGO_HOME}>
                        <img
                            src="/favicon.ico"
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top"
                        />
                        TODO
                    </a>
                </div>
            </nav>
        </>
    );
}
