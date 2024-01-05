export const data = [
  {
    id: 123,
    parentId: null,
    text: "Hello This is first comment",
    child: [
      {
        id: 12345,
        parentId: 123,
        text: "First comment Reply",
        child: [
          {
            id: 324,
            parentId: 12345,
            text: "Comment to the first comment reply",
            child: [],
          },
        ],
      },
      {
        id: 123345,
        parentId: 123,
        text: "First comment Reply another one",
        child: [
          // {
          //   id: 324,
          //   parentId: 12345,
          //   text: "Comment to the first comment reply",
          //   child: [],
          // },
        ],
      },
    ],
  },
  {
    id: 1453,
    parentId: null,
    text: "Hello This is second comment",
    child: [],
  },
];
