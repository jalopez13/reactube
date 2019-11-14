import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ q: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { q } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(q);
  }

  render() {
    return (
      <Paper elevation={2} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="search ..." onChange={this.handleChange}/>
        </form>
      </Paper>
    )
  }
}

export default SearchBar;
