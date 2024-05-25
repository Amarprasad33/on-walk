import React from 'react'

const Categories = (props) => {
    const categoryIcon = props.imgUrl;
    const categoryName = props.categoryName;
    return (
        <div id='container'>

            <div className='category-main'>
                <div className='category-parent'>
                    <div className='category-img-main'>
                        <img src={categoryIcon} className='category-img' />
                    </div>
                    <div className='category-name'>{categoryName}</div>
                </div>
            </div>
        </div>
    )
}

export default Categories