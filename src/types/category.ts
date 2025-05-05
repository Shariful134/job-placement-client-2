export interface ICategory {
  _id: string;
  name: string;
  description: string;
  parent: string | null;
  isActive: boolean;
  createdBy: string;
  icon: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  children: ICategory[];
}

export interface IProductCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  offerPrice: number | null;
  stock: number;
  weight: number;
  isActive: boolean;
  availableColors: string[];
  keyFeatures: string[];
  specification: {
    [key: string]: string;
  };
  averageRating: number;
  ratingCount: number;
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
  brand: {
    _id: string;
    name: string;
  };
  category: {
    _id: string;
    name: string;
  };
  shop: {
    _id: string;
    shopName: string;
  };
}
