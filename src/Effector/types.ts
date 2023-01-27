export type Category = {
  id: number;
  name: string;
}

export type Tag = {
  id: number;
  name: string;
}

export enum Statuses {
  available = 'available',
  pending = 'pending',
  sold = 'sold'
}

export type Pet = {
  id: number;
  name: string;
  category: Category;
  photoUrls: string[];
  tags: Tag[];
  status: keyof Statuses;
}
