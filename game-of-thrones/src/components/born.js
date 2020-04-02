import React from 'react';

function Born(props) {
//   function checkNull() {
//     if(props.info === null) {
//       return "no data";
//     }

    
  

  return (
    <div>
      <h1>Name of Character: { props.info.name }</h1>
      <h1>Year born: { props.info.born  }</h1>
    </div>
  )
}

export default Born;