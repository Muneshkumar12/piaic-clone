import React from 'react';
import { Navbar, Footer } from '../components';
const Layout = ({ children, footerHide }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer footerHide={footerHide} />
        </div>
    )
}

export default Layout
