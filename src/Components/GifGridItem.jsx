import React from 'react'
// import PropTypes from 'prop-types'

const GifGridItem = ({id,title,url}) => {
    return (
        <div key={id} className="card ml-3 mr-3 mb-3" style={{maxWidth : '20rem'}}>
            <img src={url} alt={title} className="card-img-top" style={{maxHeight : '15rem'}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
