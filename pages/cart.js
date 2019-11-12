import React from 'react';
import { connect } from 'react-redux'
import Discount from '../components/discount';

class Cart extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      final_price: 0,
      amount_discounted: 0
    }
  }

  handleClick(){
    const discountPercentage = this.props.discountPercentage;
    const basePrice = this.props.product.base_price;
    console.log(discountPercentage, "discountPerc")
    console.log(basePrice, "basePrice")
    this.setState({
      amount_discounted: discountPercentage * basePrice / 100,
      final_price: basePrice - this.state.amount_discounted
    }, console.log(this.state.amount_discounted, "amountDiscounted", this.state.final_price, "Final price"))
  }

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
            <button onClick={() => this.handleClick()} />
            <p className="discountApplied">Discount: {this.props.discountPercentage} %</p>
            <p className="totalPrice">Total {this.state.final_price}</p>
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
    discountPercentage: state.discountPercentage
  }
}

export default connect(mapStateToProps)(Cart)