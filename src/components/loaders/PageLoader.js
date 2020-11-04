import React, { Component } from 'react'

class PageLoader extends Component {
    render(){
        return (
            <center >
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div classNameName="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            </center>
        )
    }
}

export default PageLoader