import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeAuthor} from '../actions/index'

class Authors extends Component {

  render() {
    const { removeAuthor, authors } = this.props;
    let authorList = authors.map(author => <li key={author.id}>{author.authorName} <button onClick={()=>removeAuthor(author)}>removes the Author and it's Books </button></li>);

    return (
      <div>
        <ul>
          {authorList}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { authors: state.authors }
}

export default connect(mapStateToProps,{removeAuthor})(Authors);
