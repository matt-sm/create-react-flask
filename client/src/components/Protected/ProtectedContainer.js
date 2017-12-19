import React from 'react';
import ProtectedBranch from 'components/Protected/ProtectedBranch';

class ProtectedContainer extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("/api/protected")
      .then(res => {
        if(res.ok)
          return res.json()
        else
          throw new Error(res.statusText)
      })
      .then(data => this.setState({ loading: false, data }))
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    return <ProtectedBranch {...this.state} />;
  }
}

export default ProtectedContainer;