import React from 'react';

class HomeView extends React.Component {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderHome() {
    const { message } = this.props.home;
    return (
      <div>
        <h2>Welcome to this amazing site!</h2>
        <div>{message}</div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.home) {
      return this.renderHome();
    } else {
      return this.renderError();
    }
  }
}

export default HomeView;