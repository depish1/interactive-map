import { API } from '@/config.ts';
import { QueryFunctionContext } from 'react-query';

interface IFlag {
  alt: string;
  png: string;
  svg: string;
}

interface ICurrency {
  code: string;
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
  capital: string;
  regions: string;
  subregion: string;
  population: number;
  currencies: ICurrency[];
  languages: ILanguage[];
  flags: IFlag;
}

export const getCountry = async (x: QueryFunctionContext<string[]>): Promise<ICountry> => {
  const apiString = `${API}/${x.queryKey[1]}`;
  const resp = await fetch(apiString);
  const data = await resp.json();
  return data[0];
};
