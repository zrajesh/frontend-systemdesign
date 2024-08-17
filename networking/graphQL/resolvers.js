const data = {
  authors: [{ id: 1, name: "Angela Duckworth", booksId: [1] }],
  books: [
    {
      id: 1,
      title: "Grit: The Power of Passion and Perseverance",
      publishedYear: 2016,
      authorId: 1,
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
};
