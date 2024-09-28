export interface MetalItem {
  item_name: string;
  brand: string;
  diameter_thickness: string;
  price_per_kg: string;
}

export interface Metal {
  type: string;
  card_image: string;
  detail_image: string;
  items: MetalItem[];
}

export interface Review {
  name: string;
  position: string;
  image: string;
}
