import React from 'react';
import { connect } from 'react-redux'
import { setDiscount, setAmountDiscounted } from '../store';


class Discount extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input: "",
      validationCode: false,
      validationCodeMessage: "",
      discountPercentage: 0,
      amount_discounted: 0
    }
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }
  
  handleClick() {
    const basePrice = this.props.basePrice;
    const {dispatch} = this.props
    console.log(basePrice, "basePrice");
    switch (this.state.input) {
      case "courseit2019":
        //change the hardcoded 10 in amount_discounted to receive dynamic values
        this.setState({
          discountPercentage: 10,
          validationCodeMessage: "Código aplicado!",
          validationCode: true,
          amount_discounted: 10 * basePrice / 100,
          final_price: basePrice - this.state.amount_discounted
        }, () => {dispatch(setDiscount(this.state.discountPercentage)), dispatch(setAmountDiscounted(this.state.amount_discounted))})
        break;
      case "":
        this.setState({
          validationCodeMessage: "Debes escribir un código",
          validationCode: false
        })
        break;
      default:
        this.setState({
          validationCodeMessage: "Código inválido",
          validationCode: false
        })
        break;
    }
  }

  render(){
    return(
      <React.Fragment>
          <label>
            <input className="couponValidationForm" type="text" name="name" placeholder="Código de descuento" onChange={(e) => this.handleChange(e)} />
          </label>
          <button className="button" title="Aplicar" onClick={(e) => this.handleClick(e)} />
          <p>{this.state.validationCodeMessage}</p>
        <style jsx>
        {`
          .button{
            width: 5em;
            height: 4em;
            color: beige;
            font-weight: bold;
            background-color: #157be4;
            border-color: #157be4;
            border-width: 0;
          }
          .couponValidationForm{
            height: 4em;
            border-width: 1px;
            padding: 0 0 0 1em;
          }
        `}
       </style>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    basePrice: state.productCart.base_price
  }
}

export default connect(mapStateToProps)(Discount);