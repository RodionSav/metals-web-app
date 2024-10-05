export interface MetalItem {
  item_name: {
    ru: string;
    en: string;
  };
  brand: string;
  diameter_thickness: string;
  price_per_kg: {
    ru: string;
    en: string;
  };
}

export interface Metal {
  id: number;
  type: {
    ru: string;
    en: string;
  };
  card_image: string;
  detail_image: string;
  items: MetalItem[];
}

export interface Review {
  id: number;
  name: {
    ru: string;
    en: string;
  };
  position: {
    ru: string;
    en: string;
  };
  image: string;
}
