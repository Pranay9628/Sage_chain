import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

// <img src='images/bgImage.jpg' alt="nothing" />
// <p><i>Your account is: <b>{this.state.account}</b></i></p>

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            account: this.props.account
        }
    }

    render(){
        return(
            <div>
                <div class="row">
                    <div class="col s8">
                        <div className="container">
                            
                            <h2 class="body-text"><b>Welcome to SAGE!</b></h2>
                            <i><h4  class="body-text">Your one-stop medical document library</h4></i>
                            <br/>
                            <br/>
                            <br/>
                            <h6  class="body-text"><b>SAGE</b> uses a technology called <b>Blockchain</b> which provides decentralization and immutabilty to any data present on it</h6>
                            <p  class="body-text">Powered by the <b><a href='https://ethereum.org/' target='_blank'>Ethereum Blockchain</a></b></p>

                        </div>
                    </div>
                    <div class="col s4">
                        <div className="container">
                            <ul class="collection with-header" style={{marginTop: 50}}>
                                <li class="collection-header"><h6><b>Choose what you want to do</b></h6></li>
                                <li class="collection-item"><i className="material-icons">cloud_upload</i>&nbsp;&nbsp;&nbsp;<Link to='/upload'>Upload a medical document</Link></li>
                                <li class="collection-item"><i className="material-icons">insert_drive_file</i>&nbsp;&nbsp;&nbsp;<Link to='/view'>View your uploaded medical documents</Link></li>
                                <li class="collection-item"><i className="material-icons">person_add</i>&nbsp;&nbsp;&nbsp;<Link to='/doctors'>View/Add a trusted doctor</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

// <div class="row">
//                     <img className="activator" src="images/bgImage.jpg"/>
//                 </div>

export default Home;