import React from 'react';
import '../../styles/page-header.css'
const PageHeader = ({ bgColor, heading, para,color }) => {
    return (
        <div className='container-fluid page-header-main' style={{ backgroundColor: bgColor}}>
            <div className='container'>
                <div className='row'>
                    <h1 style={{color: color ? color : "#fff"}}>{heading}</h1>
                    <p style={{color: color ? color : "#fff"}}>{para}</p>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;
