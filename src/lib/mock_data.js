export const mock_news = {
  news: [
    {
      title: "Title #1",
      text: "This is a content of first news entry",
      date: "2026-06-06"
    },
    {
      title: "Long title #2",
      text: "Now this is a secont content enrty of news feed",
      date: "2026-06-06"
    }
  ]
}

export const mock_static = {
  title: "Static title",
  text: "Static content text"
}

export const mock_dynamic = {
  title: "Dynamic title",
  text: "Dynamic content text"
}

export const mock_demo = {
  id: 0,
  type: "vertical",
  settings: {
    k: 3,
    hs: [40, 40, 20],
  },
  data: [
    {
      id: 1,
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
      id: 2,
      type: "horizontal",
      settings: {
        k: 2,
        ws: [60, 40],
      },
      data: [
        {
          id: 3,
          type: "static",
          data: {
            title: "1",
            text: "1",
          },
        },
        {
          id: 4,
          type: "vertical",
          settings: {
            k: 2,
            hs: [50, 50],
          },
          data: [
            {
              id: 5,
              type: "static",
              data: {
                title: "2",
                text: "2",
              },
            },
            {
              id: 6,
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
      id: 7,
      type: "dynamic",
      settings: {},
      data: {},
    },
  ],
};

export default { mock_news, mock_static, mock_dynamic }
