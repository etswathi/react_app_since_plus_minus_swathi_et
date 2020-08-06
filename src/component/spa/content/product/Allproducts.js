import React from 'react';
import Product from './product'

class Allproducts  extends React.Component {
    state = {  }
    render() { 
        return ( 

<div>

   <Product price="4" rating="4">camera</Product> 
   <Product price="7" rating="7">phone</Product>
   <Product price="5" rating="9">lap</Product>
</div>




         );
    }
}
 
export default Allproducts ;