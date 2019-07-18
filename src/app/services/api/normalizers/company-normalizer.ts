import { BaseNormalizer } from './base-normalizer';

export interface ICompany {
  id: string;
  name: string;
}

export const CompanyNormalizer = new BaseNormalizer<ICompany>((input: any) => ({
  id: input.id,
  name: input.name,
}));
