import axios, { AxiosRequestConfig } from 'axios';

type NullableType<T> = T | null;

export type { AxiosResponse, AxiosError } from 'axios';

export type BeerType = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: NullableType<number>;
  ibu: NullableType<number>;
  target_fg: NullableType<number>;
  target_og: NullableType<number>;
  ebc: NullableType<number>;
  srm: NullableType<number>;
  ph: NullableType<number>;
  attenuation_level: NullableType<number>;
  volume: {
    value: NullableType<number>;
    unit: NullableType<string>;
  };
  boil_volume: {
    value: NullableType<number>;
    unit: NullableType<string>;
  };
  method: {
    mash_temp: [
      {
        temp: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
        duration: NullableType<number>;
      },
    ];
    fermentation: {
      temp: {
        value: NullableType<number>;
        unit: NullableType<string>;
      };
    };
    twist: NullableType<string>;
  };
  ingredients: {
    malt: [
      {
        name: NullableType<string>;
        amount: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
      },
    ];
    hops: [
      {
        name: NullableType<string>;
        amount: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
        add: NullableType<string>;
        attribute: NullableType<string>;
      },
      {
        name: NullableType<string>;
        amount: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
        add: NullableType<string>;
        attribute: NullableType<string>;
      },
      {
        name: NullableType<string>;
        amount: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
        add: NullableType<string>;
        attribute: NullableType<string>;
      },
      {
        name: NullableType<string>;
        amount: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
        add: NullableType<string>;
        attribute: NullableType<string>;
      },
      {
        name: NullableType<string>;
        amount: {
          value: NullableType<number>;
          unit: NullableType<string>;
        };
        add: NullableType<string>;
        attribute: NullableType<string>;
      },
    ];
    yeast: NullableType<string>;
  };
  food_pairing: NullableType<string[]>;
  brewers_tips: NullableType<string>;
  contributed_by: string;
};
export type ErrorType = {
  statusCode: number;
  error: 'Not Found' | string;
  message: string;
};
export type CreateAPI = typeof createAPI;
export type API = ReturnType<CreateAPI>;

export const createAPI = (baseURL: AxiosRequestConfig['baseURL'] = '') => {
  const instance = axios.create({
    baseURL,
  });

  const getBeer = () => instance.get<BeerType[]>('beers');
  const getBeerSort = (value: number[]) =>
    instance.get<BeerType[]>(`beers?abv_gt=${value[0]}&abv_lt=${value[1]}`);
  const getBeerRandom = () => instance.get<BeerType[]>('beers/random');

  return { getBeerSort, getBeer, getBeerRandom };
};
