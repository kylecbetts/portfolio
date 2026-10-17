export type Rink = {
  name: string;
  city: string;
  state: string;
  country: "CA" | "US";
  coordinates: {
    latitude: number;
    longitude: number;
  };
  capacity?: number;
  opened: number;
};
