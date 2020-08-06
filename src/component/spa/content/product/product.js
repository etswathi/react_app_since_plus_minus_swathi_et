import React from 'react';
import ProductImage from './productimage';
import Productdetail from './productdetail';

class Product extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div>
<ProductImage></ProductImage>

<Productdetail rating={this.props.rating} name={this.props.children} price={this.props.price}></Productdetail>

            </div>
         );
    }
}
 
export default Product;