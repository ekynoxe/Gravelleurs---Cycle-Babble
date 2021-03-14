import data from './airports.json';

export interface Airport {
  name: string;
  code: string;
  countryCode: string;
  facilities: {
    bulkItemsBelts: string[]
  };
}

export default data as Airport[];
