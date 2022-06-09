export interface Data {
  availabilityId: string;
  eta: number;
  supplier: {
    supplierName: string;
    supplierKey: string;
  };
  product: {
    maxPax: number;
    bags: {
      max: number;
      large: number;
      small: number;
    };
    maxSeats: number;
  };
  price: {
    amount: number;
    currency: string;
  };
  category: {
    productType: string;
    vehicleType: string;
    subCategory: string;
  };
}

export type ErrorInfo = {
  isError: true;
  error: string;
  errorInfo: string;
};

export type RequestError = { isError: false } | ErrorInfo;
