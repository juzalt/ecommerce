import React from 'react';
import { useDispatch, connect } from 'react-redux'
import { setDiscount } from '../store';


class Discount extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      input: "",
      validationCode: false,
      validationCodeMessage: "",
      discountPercentage: 0
    }
  }

  
  
  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }
  
  handleClick() {
    const {dispatch} = this.props
    switch (this.state.input) {
      case "courseit2019":
        this.setState({
          validationCodeMessage: "Código aplicado!",
          validationCode: true,
          discountPercentage: 10
        }, () => {dispatch(setDiscount(this.state.discountPercentage))})
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


export default connect()(Discount);