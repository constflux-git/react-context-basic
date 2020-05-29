import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, dark, light } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Lord of the rong</li>
          <li style={{ background: theme.ui }}>wonka faktori</li>
          <li style={{ background: theme.ui }}>your life is suck</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
