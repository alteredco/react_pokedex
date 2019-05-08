import React, {Component} from 'react';
import './PokeCard.css';
const pokeapi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class PokeCard extends Component {
  render() {
    let idPad = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    let imgSrc = `${pokeapi}${idPad(this.props.id)}.png`;
    return (
      <div className = "PokeCard">
      <h1 className="PokeCard-h1">{this.props.name}</h1>
      <img  className="PokeCard-img" src={imgSrc} alt={this.props.name}/>
      <div className="PokeCard-data">{this.props.type}</div>
      <div className="PokeCard-data">{this.props.exp}</div>
      
      </div>
    )
  }
}

export default PokeCard;