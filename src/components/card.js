import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <p>{ this.props.text}</p>
      </div>
    );
  }
}

export default Card;
