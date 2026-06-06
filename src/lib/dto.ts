export type NewsItemType = {
  slug: string;
  title: string;
};

export type Building = {
  id: number;
  title: string;
};

export type NewsItem = {
  id: number;
  title: string;
  text: string;
  date: string;
  type: NewsItemType;
};

export type StaticData = {
  type: string;
  content: string;
};

export type DynamicData = {
  type: string;
  content: string;
};

export type Emergency = string;

export type Widget = {
  type: string;
  settings: object;
  data: object | [];
};
