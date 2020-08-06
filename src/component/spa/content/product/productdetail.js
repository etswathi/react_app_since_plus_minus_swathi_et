import React from 'react';
import ProductTitle from './producttitle';
import ProductPrice from './productprice';
import Rating from './rating'
class Productdetail extends React.Component {
    state = {  }
    render() { 
        return ( 

<div>
    <ProductTitle title={this.props.name}></ProductTitle>
    <br></br>
    <ProductPrice price={this.props.price}></ProductPrice>
<br></br>
<Rating rating={this.props.rating}></Rating>

</div>

         );
    }
}
 
export default Productdetail;