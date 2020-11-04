import React, { Component } from 'react'

class InlineLoader extends Component {
    render(){
        return (
            <center>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
            </center>
        )
    }
}

export default InlineLoader