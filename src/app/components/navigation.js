// Note: Navigation component...!

import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Link from 'next/link';
import styles from "../styles/navigation.module.css";

const Navigation = () => {
    const [showNavColor, setShowNavColor] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='primary'>
                <MDBContainer fluid>
                    <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColor(!showNavColor)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColor} navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <Link href={'/'} className={styles.linkEl}>
                                Home
                            </Link>

                            <Link href={'/about'} className={styles.linkEl}>
                                About
                            </Link>

                            <Link href={'/contact'} className={styles.linkEl}>
                                Contact
                            </Link>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default Navigation;