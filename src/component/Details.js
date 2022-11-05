import React from 'react'
import { useParams } from 'react-router-dom'


const Details = (props) => {
    const params=useParams();
    return (
        <div id="details">
           <p>kdkjajdfijijeirji</p>
           {params.cropname}
        </div>
    )
}

export default Details
