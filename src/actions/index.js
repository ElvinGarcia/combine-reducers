export const addAuthor = author => {
  return {
    type: 'ADD_AUTHOR',
    author
  };
};

export const removeAuthor = author => {
  return {
    type: 'REMOVE_AUTHOR',
    author
  };
};

export const addBook = book => {
  return {
    type: 'ADD_BOOK',
    book
  };
};

export const removeBook = book => {
  return {
    type: 'REMOVE_BOOK',
    book
  };
};
