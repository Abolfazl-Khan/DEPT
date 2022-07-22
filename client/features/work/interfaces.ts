export interface Client {
  id: string;
  title: string;
  logo: string;
}

export interface Work {
  id: string;
  title: string;
  companyName: string;
  image: string | null;
  categoryId: string;
  industryId: string;
}
