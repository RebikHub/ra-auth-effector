export interface NewsItem {
  id: string,
  title: string,
  image: string,
  content: string,
};

export type NewsList = NewsItem[];

export type User = {
  id: string,
  login: string,
  name: string,
  avatar: string
};