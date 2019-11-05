import React from 'react';
import axios from 'axios';
import AddToCartButton from '../components/addToCartButton';

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      productImg: [],
      title: "",
      base_price: "",
      sold_quantity: ""
    }
  }

  static async getInitialProps({req, query}) {

    const response = await axios.get('https://api.mercadolibre.com/items/MLA773274530')

    return {
      product: {
        productImg: response.data.pictures[0].url,
        title: response.data.title,
        base_price: response.data.base_price,
        sold_quantity: response.data.sold_quantity
      }
    };
  }

  render(){
    return (
      <React.Fragment>
        <div className="productInfoContainer">
          <img className="productImage" src={this.props.product.productImg} alt="Product image."/>
          <div className="productDescription">
            <p className="sold_quantity">{this.props.product.sold_quantity} vendidos</p>
            <p className="title">{this.props.product.title}</p>
            <p className="base_price">{this.props.product.base_price}</p>
            <AddToCartButton product={this.props.product} />
          </div>
        </div>
        <style jsx>{`
          .productInfoContainer{
            display: flex;
            justify-content: center;
            margin-top: 10px;
            background-color: white;
          }

          .productImage {
            margin-right: 1em;
          }

          .productDescription{
            display: flex;
            flex-direction: column;
          }

          `}</style>
          <style jsx global>
            {`
              body {
                margin: 0;
                background-color: #ecebeb;
              }
            `}
          </style>
      </React.Fragment>
    )
  }
}

export default Product;