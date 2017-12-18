import React from 'react';
import HomeView from './HomeView';

class HomeContainer extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("/api/")
      .then(res => res.json())
      .then(
        home => this.setState({ loading: false, home }),
        error => this.setState({ loading: false, error })
      );
  }

  render() {
    return <HomeView {...this.state} />;
  }
}

export default HomeContainer;