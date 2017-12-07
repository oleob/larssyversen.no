import React, {Component} from 'react';
import Button from 'material-ui/RaisedButton';
import Lars from './Lars';
import Bubble from './Bubble';
import sentences from '../Quotes';

class Container extends Component {

  constructor() {
    super();

    let values = [];
    for (let i = 0; i < sentences.length; i++) {
      values.push(i);
    }

    this.state = {
      showLars: false,
      larsName: 'nolars',
      buttonLabel: 'Click me!',
      bubbleName: 'hiddenBubbleContainer',
      text: '',
      startValues: values,
      values,
      shownValues: [],
    }
    this.onClick = this.onClick.bind(this);
    this.randomValue = this.randomValue.bind(this);
  }

  onClick() {
    if (this.state.showLars) {
      this.setState({
        showLars: false,
        larsName: 'nolars',
        buttonLabel: 'Click me!',
        bubbleName: 'hiddenBubbleContainer',
        text: 'Bai Bai'
      });
    }
    else{
      this.setState({
        showLars: true,
        larsName: 'showlars',
        buttonLabel: 'Fuck off Lars',
        bubbleName: 'bubbleContainer',
        text: sentences[this.randomValue()],
      })
    }
  }

  randomValue() {
    if( this.state.values.length === 1) {
      const value = this.state.values[0];
      this.setState({
        values: this.state.startValues,
        shownValues: [],
      });
      return(value);
    }
    const value = this.state.values[Math.floor(Math.random() * this.state.values.length)];

    let newShownValues = this.state.shownValues.slice();
    newShownValues.push(value);

    let newValues = this.state.values.slice();
    newValues.splice(newValues.indexOf(value),1);
    this.setState({
      values: newValues,
      shownValues: newShownValues,
    });
    console.log(newValues);
    console.log(newShownValues);
    console.log(value)
    return value;
  }

  render() {
    return(
      <div className = "container">
        <div className = "toggleButton">
          <Button label={this.state.buttonLabel} primary onClick={this.onClick}/>
        </div>
        <Lars name={this.state.larsName} />
        <Bubble name={this.state.bubbleName} text={this.state.text} />
      </div>
    );
  }
}

export default Container;
