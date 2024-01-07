import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav 
                    className="navbar navbar-dark" style={{backgroundColor:"#B19470"}} >
                        <div>
                            <a href="/users"
                                className="navbar-brand">
                                    PD
                            </a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
