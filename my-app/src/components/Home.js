import React, { Component } from 'react';
import Information from "./Information";
import NavbarMenu from "./NavbarMenu"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <NavbarMenu/>
            <Information/>
            </>
         );
    }
}
 
export default Home;