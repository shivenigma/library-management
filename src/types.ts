export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}
export interface Publication {
  id: number;
  publication: string;
  email: string;
  logo: string;
}
export interface Book {
  id: number;
  title: string;
  author: number;
  publication: number;
  firstRelease: Date;
  latestRelease: Date;
}
