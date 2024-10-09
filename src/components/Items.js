import React from 'react'
import "./css.css";

export default function Items() {
    return (
        <>
            <div className="container my-4">
                <div className="list-group">
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action">Items</a>

                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-primary">Samsung Galaxy S24 ULTRA</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-secondary">Huawei P10</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-success">Nokia 3310</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-danger">BlackBerry E15</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-warning">Oppo F15</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-info">Sony E12</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-light">Vivo y12</a>
                    <a href="http://localhost:3000/" className="list-group-item list-group-item-action list-group-item-dark">IPhone XS</a>
                </div>
            </div>

        </>
    )
}
