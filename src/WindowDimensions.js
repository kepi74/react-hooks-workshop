import React, { Component } from 'react';

class WindowDimensions extends Component {
  constructor(props) {
    super(props);

    const {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    } = window || {};

    this.state = {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize = () => {
    const {
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    } = window || {};

    this.setState({
      innerHeight,
      innerWidth,
      outerHeight,
      outerWidth,
    });
  }

  render() {
    let items = [];
    for (let dimension in this.state) {
      items.push(<li key={dimension}>{`${dimension}: ${this.state[dimension]}`}</li>);
    }
    return (
      <div>
        <h3>Window dimensions:</h3>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default WindowDimensions;