import React from 'react';
import { connect } from 'react-redux'
import Discount from '../components/discount';

class Cart extends React.Component {

  render(){
    return (
      <React.Fragment>
        <div className="cartContainer">
          <div className="cartUpperSection">
            <img className="productThumbnail" src={this.props.product.thumbnail} alt="Product image thumbnail"/>
            <p className="productTitle">{this.props.product.title}</p>
            <div className="productPrice">{this.props.product.base_price}</div>
          </div>
          <div className="cartLowerSection">
            <p className="productPrice">Producto {this.props.product.base_price}</p>
            <p className="discountApplied">Discount: {this.props.discountPercentage} %</p>
            <p className="totalPrice">Total {this.props.basePrice - this.props.amountDiscounted}</p>
          </div>
          <Discount />
        </div>
        <style jsx>{`
          .cartContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            background-color: white;
            width: 80vw;
            height: 90vh;
          }

          .cartUpperSection{
            display: flex;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    product: state.productCart,
    discountPercentage: state.discountPercentage,
    basePrice: state.productCart.base_price,
    amountDiscounted: state.amountDiscounted
  }
}

export default connect(mapStateToProps)(Cart)