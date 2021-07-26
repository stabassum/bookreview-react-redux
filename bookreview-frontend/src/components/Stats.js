import React from 'react';
 


const Stats = ( {numBooks, topThree}) => {
    
 

let items = topThree.map((i, key) => {
    return <div key={key}>{i.name} </div>
})

      return (
        <div>
             <i className='gamepad icon total-class' /><strong>Total books</strong><p>{numBooks} </p>
            <i className='hotjar icon hot-class' /><strong>Top books</strong>
            {items}

        </div>
      );
    }
    

  
   export default Stats