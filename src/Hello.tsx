import * as React from 'react';

interface Props {
  name: string;
  enthuiasmLevel?: number;
  color: 'blue' | 'pink';
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  // default props
  static defaultProps = { enthuiasmLevel: 7};
    constructor(props: Props) {
        super(props);
        this.state = { currentEnthusiasm: props.enthuiasmLevel || 5};
    }
    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  render() {
    const { name } = this.props;
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
          <div className="hello">
            <div className="greeting">
              Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onDecrement}>-</button>
            <button onClick={this.onIncrement}>+</button>
          </div>
    );
  }
  updateEnthusiasm(currentEnthusiasm: number){
      this.setState({currentEnthusiasm});
  }
}


function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
  
export default Hello;