type HouseType = {
  houseId: number;
  images: string[];
  name: string;
  durationOfPay: string;
  price: number;
  type: string;
  address: string;
  category?: string[];
  forSale?: boolean;
  roommateWanted?: boolean;
};

type AgentType = {
  name: string;
  location: string;
  closedDeal: number;
  listing: number;
  ratings: number;
  agentId: number;
  averageRating: number;
  image: string;
  language: string[];
};
