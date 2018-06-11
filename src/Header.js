import React, { Component } from 'react';

import NavBar from './NavBar';
import Title from './Title';
import Logo from './Logo';

class Header extends Component {
    render(){
        return (
            <div className="expanded row header">
                <div className="clearfix">
                    <Logo />

                    <NavBar />
                </div>

                <Title/>
          </div>
  

        )
    }

}

export default Header;