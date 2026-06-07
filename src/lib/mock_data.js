export default {
  id: 1,
  type: "vertical",
  settings: {
    k: 3,
    hs: [40, 40, 20],
  },
  data: [
    {
      id: 2,
      type: "news",
      settings: {},
      data: {
        news: [
          {
            title: "Title #1",
            text: "adjaragudzhu",
            date: "2026-06-06",
          },
          {
            title: "Title #2",
            text: '<p style="color: red;">lolxd</p>',
            date: "2026-06-06",
          },
          {
            title: "Title #3",
            text: "adjaragudzhu",
            date: "2026-06-06",
          },
        ],
      },
    },
    {
      id: 3,
      type: "horizontal",
      settings: {
        k: 2,
        ws: [60, 40],
      },
      data: [
        {
          id: 4,
          type: "static",
          data: {
            title: "1",
            text: "1",
          },
        },
        {
          id: 5,
          type: "vertical",
          settings: {
            k: 2,
            hs: [50, 50],
          },
          data: [
            {
              id: 6,
              type: "static",
              data: {
                title: "2",
                text: "2",
              },
            },
            {
              id: 7,
              type: "static",
              data: {
                title: "3",
                text: "3",
              },
            },
          ],
        },
      ],
    },
    {
      id: 8,
      type: "dynamic",
      settings: {},
      data: {},
    },
  ],
};
