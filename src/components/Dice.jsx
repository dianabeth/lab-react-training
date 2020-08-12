import React from 'react';
import './ClickablePicture.css';
export class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.randomValue(),
      rolling: false,
    };
  }

  randomValue() {
    let number = Math.ceil(6 * Math.random());
    return number;
  }

  handleDiceClick = () => {
    if (!this.state.rolling) {
      this.setState(() => ({
        value: 0,
        rolling: true,
      }));
      setTimeout(() => {
        this.setState(() => ({
          value: this.randomValue(),
          rolling: false,
        }));
      }, 1000);
    }
  };

  render() {
    let img;
    if (this.state.value) {
      img = `/img/dice-empty.png`;
    }
    return <img classname src={img} alt="Dice" />;
  }
}

export default Dice;
