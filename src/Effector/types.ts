export type Category = {
  id: number;
  name: string;
};

export type Tag = {
  id: number;
  name: string;
};

export const Statuses = {
  available: "available",
  pending: "pending",
  sold: "sold",
} as const;

export type StatusesKeys = keyof typeof Statuses;

export type Pet = {
  id: number;
  name: string;
  category: Category;
  photoUrls: string[];
  tags: Tag[];
  status: StatusesKeys;
};
