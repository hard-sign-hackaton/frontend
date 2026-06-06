type NewsItemType = {
  slug: string;
  title: string;
};

type Building = {
  id: number;
  title: string;
};

type NewsItem = {
  id: number;
  title: string;
  text: string;
  date: string;
  type: NewsItemType;
};

type StaticData = {
  type: string;
  content: string;
};

type DynamicData = {
  type: string;
  content: string;
};

type Emergency = string;
