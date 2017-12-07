import React, {Component} from 'react';
import Button from 'material-ui/RaisedButton';
import Lars from './Lars';
import Bubble from './Bubble';

const sentences= [
  'zZzZZzzz',
  'Jeg sover!',
  'Jeg er en tulling',
  'Var det noen som sa "Suge tiss"?',
  'Ole er meg en kul kar',
  'Når er konten i algdat?',
  'Gidder ikke trene i dag',
];

class Container extends Component {

  constructor() {
    super();

    this.state = {
      showLars: false,
      larsName: 'nolars',
      buttonLabel: 'Click me!',
      bubbleName: 'hiddenBubbleContainer',
      text: '',
    }
    this.onClick = this.onClick.bind(this);
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
        text: sentences[Math.floor(Math.random() * sentences.length)],
      })
    }
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
