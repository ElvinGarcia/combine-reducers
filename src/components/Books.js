import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeBook} from '../actions/index'

class Books extends Component {
  render() {
    const { removeBook, books } = this.props;

    let bookList = books.map(book => <li key={book.id}>{book.title} by {book.authorName} <button onClick={()=>removeBook(book)}>remove</button >  </li>);

    return (
      <div>
        <ul>
          {bookList}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { books: state.books }
}

export default connect(mapStateToProps,{removeBook})(Books);
