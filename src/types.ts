export interface VehicleSpec {
  length: string; // e.g. "4,695 mm" or "5,910 mm"
  height: string; // e.g. "1,980 mm" or "2,705 mm"
  width: string;  // e.g. "1,993 mm"
  wheelbase: string; // e.g. "3,665 mm"
  loadVolume: string; // e.g. "10.5 m³" or "6.0 m³"
  seats: number;
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  make: "Toyota" | "Mercedes-Benz";
  model: string;
  year: number;
  badge: string; // e.g. "Standard roof · 0t · Automatic" or "High roof · 0t · Automatic · Diesel"
  roofType: "Standard roof" | "High roof" | "Mid roof";
  transmission: "Automatic" | "Manual";
  fuel: "Diesel" | "Petrol";
  priceWeekly: number; // e.g. 300, 400
  priceMonthly: number; // e.g. 1200, 1600
  minimumDays: number; // e.g. 28
  image: string;
  gallery: string[];
  specs: VehicleSpec;
  description: string;
  includedFeatures: string[];
  useCases: string[];
  inStock: boolean;
}

export interface UseCase {
  id: string;
  title: string;
  slug: string;
  description: string;
  badgeCount: string;
  iconName: string;
  highlights: string[];
  suggestedVehicleIds: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  location?: string;
}

export interface SuburbDistance {
  name: string;
  driveTime: string;
  postcode: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  suburb?: string;
  duration: string;
  preferredStart?: string;
  notes?: string;
  agree: boolean;
  vehicleModel?: string;
}

export type ActivePage = 
  | "home" 
  | "fleet" 
  | "vehicle-detail" 
  | "use-cases" 
  | "use-case-detail" 
  | "van-hire" 
  | "business-hire" 
  | "service-area" 
  | "about" 
  | "contact";
