import { gql } from 'graphql-request';

export const COMMENT_FIELDS = gql`
  fragment CommentFields on Item {
    id
    parentId
    createdAt
    text
    user {
      name
      id
    }
    sats
    upvotes
    boost
    meSats
    path
    mine
    ncomments
    root {
      id
      title
      user {
        name
        id
      }
    }
  }
`;

export const TOP_COMMENTS = gql`
  ${COMMENT_FIELDS}
  query topComments($sort: String, $cursor: String, $when: String = "day") {
    topComments(sort: $sort, cursor: $cursor, when: $when) {
      cursor
      comments {
        ...CommentFields
      }
    }
  }
`;

export const MORE_FLAT_COMMENTS = gql`
  ${COMMENT_FIELDS}
  query MoreFlatComments($sort: String!, $cursor: String, $name: String, $within: String) {
    moreFlatComments(sort: $sort, cursor: $cursor, name: $name, within: $within) {
      cursor
      comments {
        ...CommentFields
      }
    }
  }
`;

export const COMMENTS = gql`
  ${COMMENT_FIELDS}
  fragment CommentsRecursive on Item {
    ...CommentFields
    comments {
      ...CommentFields
      comments {
        ...CommentFields
        comments {
          ...CommentFields
          comments {
            ...CommentFields
            comments {
              ...CommentFields
              comments {
                ...CommentFields
                comments {
                  ...CommentFields
                  comments {
                    ...CommentFields
                    comments {
                      ...CommentFields
                      comments {
                        ...CommentFields
                        comments {
                          ...CommentFields
                          comments {
                            ...CommentFields
                            comments {
                              ...CommentFields
                              comments {
                                ...CommentFields
                                comments {
                                  ...CommentFields
                                  comments {
                                    ...CommentFields
                                    comments {
                                      ...CommentFields
                                      comments {
                                        ...CommentFields
                                        comments {
                                          ...CommentFields
                                          comments {
                                            ...CommentFields
                                            comments {
                                              ...CommentFields
                                              comments {
                                                ...CommentFields
                                                comments {
                                                  ...CommentFields
                                                  comments {
                                                    ...CommentFields
                                                    comments {
                                                      ...CommentFields
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
