import React from 'react';
import HomeBranch from 'components/Home/HomeBranch';

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
    return <HomeBranch {...this.state} />;
  }
}

export default HomeContainer;