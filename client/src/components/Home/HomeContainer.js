import React from 'react';
import HomeBranch from 'components/Home/HomeBranch';

class HomeContainer extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("/api/")
      .then(res => {
        if(res.ok)
          return res.json()
        else
          throw new Error(res.statusText)
      })
      .then(home => this.setState({ loading: false, home }))
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    return <HomeBranch {...this.state} />;
  }
}

export default HomeContainer;