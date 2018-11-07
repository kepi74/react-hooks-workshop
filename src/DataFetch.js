import React, { Component } from 'react';

class WindowDimensions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }

  handleFetch = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const [item] = data.results;
    this.setState({ data: item, loading: false });
  }

  componentDidMount() {
    this.handleFetch("https://api.randomuser.me/");
  }

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        <h3>Data fetch:</h3>
        <ul>
          {loading ? <div>...loading</div> : <div>First Name: {data.name.first} <br /> Last Name: {data.name.last}</div>}
        </ul>
      </div>
    );
  }
}

export default WindowDimensions;
