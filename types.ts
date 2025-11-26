export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export interface ModelProps {
  url?: string;
  scale?: number;
  color?: string;
  rotationSpeed?: number;
  enableDistort?: boolean;
  distort?: number;
  speed?: number;
}
