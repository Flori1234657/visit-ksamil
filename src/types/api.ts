export type Articles = {
  id: string;
  description: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
};
