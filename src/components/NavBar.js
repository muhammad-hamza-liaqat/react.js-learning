import React from 'react'

export default function NavBar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={process.env.REACT_APP_BASE_URL}>
                        <img src="/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                            Todo App
                    </a>
                </div>
            </nav>
        </>
    )
}
