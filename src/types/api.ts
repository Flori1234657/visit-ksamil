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

export type Attractions = {
  id: string;
  title: string;
  locationUrl: string;
  imageUrl: string;
  description: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
};
