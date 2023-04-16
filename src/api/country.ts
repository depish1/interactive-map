import { API } from '@/config.ts';
import { QueryFunctionContext } from 'react-query';

interface IFlag {
  alt: string;
  png: string;
  svg: string;
}

export interface ICurrency {
  name: string;
  symbol: string;
}
interface IName {
  common: string;
  nativeName: unknown[];
  official: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICountry {
  name: IName;
  area: number;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  currencies: Record<string, ICurrency>;
  languages: ILanguage[];
  flags: IFlag;
  borders: string[];
}

export const getCountry = async (x: QueryFunctionContext<string[]>): Promise<ICountry> => {
  const apiString = `${API}/${x.queryKey[1]}`;
  const resp = await fetch(apiString);
  const data = await resp.json();
  return data[0];
};
