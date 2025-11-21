import { ThreeElements } from '@react-three/fiber';

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
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}