import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection , Logo , LogoText , UlList , ListItem , Anchor , AnchorLink} from './style.js';


const Navbar = () => {
  
    return (
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><AnchorLink to="/">Home</AnchorLink></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><AnchorLink to="/contact">Contact</AnchorLink></ListItem>
                </UlList>
            </div>           
        </NavbarSection>
    );
  
}

export default Navbar;
