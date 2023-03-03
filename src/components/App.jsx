import React, { Component } from 'react';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    theme: '',
  };

  handleSubmit = theme => {
    this.setState({ theme });
  };

  render() {
    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery theme={this.state.theme} />
      </div>
    );
  }
}
