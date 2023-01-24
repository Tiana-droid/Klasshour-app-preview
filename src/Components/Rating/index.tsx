import React, { useState } from 'react'
import {Star} from './Styles'

const Rating = ({count,type}:any) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  if (type === "review") {
     return (
      <React.Fragment>
         {[...Array(5)].map((star,index) => {    
          index += 1;    
        return (         
          <Star key={index} className={index <= (count ) ? "fa fa-star checked" : "fa fa-star"} onMouseEnter={() => setHover(index)}/>     
        );
      })}
         
    </React.Fragment>
  )
  }
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