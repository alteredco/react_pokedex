import React, { Component } from 'react';
import './PokeDex.css';
import PokeCard from './PokeCard';

class PokeDex extends Component {
  render() {
    let title;
    if(this.props.isWinner) {
      title = <h1 className="PokeDex-winner">YOU WIN THE BATTLE!!!</h1>
    } else {
      title = <h1 className="PokeDex-loser">You lost the battle...</h1>
    }
    return(
      <div className="PokeDex">
      <p>{title}</p>
      <h4>Total Experience: {this.props.exp}</h4>
      <div className="PokeDex-cards">
      {this.props.pokemon.map((p) => (
        <PokeCard 
        id = {p.id}
        name ={p.name}
        type = {p.type}
        exp = {p.exp}
        />
      ))}
      </div>
      </div>
    )
  }
}

export default PokeDex;