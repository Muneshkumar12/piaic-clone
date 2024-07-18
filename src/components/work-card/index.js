import React from 'react';
import '../../styles/workcard.css';
const WorkCard = ({ number, para, tag: Tag, bgColor,color }) => {
    return (
        <div className='container-fluid' style={{ backgroundColor: bgColor,padding:"30px 0px" }}>
            <div className='container card-container'>
                <div className='row'>
                    <div className='col-12 col-md-2 count-btn'>{number}</div>
                    <div className='col-12 col-md-10 work-card-data'>
                        <Tag style={{color:color}}>{para}</Tag>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;
