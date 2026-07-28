export type BodyType = 'Hatchback' | 'Sedan' | 'SUV' | 'MUV' | 'Coupe' | 'Convertible';
export type FuelType = 'Petrol' | 'Diesel' | 'CNG' | 'Electric' | 'Hybrid';
export type Transmission = 'Manual' | 'Automatic' | 'CVT' | 'DCT';

export interface CarData {
  id: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  bodyType: BodyType;
  fuelType: FuelType;
  transmission: Transmission;
  seatingCapacity: number;
  engineCC: string;
  mileage: string;
  priceExShowroom: number;
  priceOnRoad: number;
  features: string[];
  airbags: number;
  bncapRating: string;
  bncapAdultScore: string;
  bncapChildScore: string;
  reliability: number;
  brandReputation: number;
  sparePartsAvailability: number;
}

export interface BrandData {
  id: string;
  name: string;
  country: string;
  established: number;
  website: string;
  description: string;
  reputationScore: number;
  serviceNetworkScore: number;
}

export interface UserPreferences {
  maxBudget: number;
  bodyType: BodyType | '';
  fuelType: FuelType | '';
  minSeats: number;
  transmission: Transmission | '';
  mustHaveFeatures: string[];
  priorities: {
    safety: number;
    reliability: number;
    features: number;
    value: number;
  };
}

export interface ScoredCar {
  car: CarData;
  totalScore: number;
  breakdown: {
    preference: number;
    safety: number;
    reliability: number;
    brandReputation: number;
    spareParts: number;
    value: number;
  };
}
