import React, { useState } from 'react'
import {Star} from './Styles'

const Rating = ({count}:any) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
      <React.Fragment>
         {[...Array(5)].map((star,index) => {    
          index += 1;    
        return (         
          <Star key={index} className={index <= (rating || hover) ? "fa fa-star checked" : "fa fa-star"} onClick={() => {
            setRating(index)
            count(index)
          }} onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)} />     
        );
      })}
         
    </React.Fragment>
  )
}

export default Rating