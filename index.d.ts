import { ReactNode } from "react";

export type SEOProps = {
  pageTitle: string;
  description: string;
};

export type BareComponent = {
  children?: ReactNode;
};

export type IDashboardTitle =
  | "Browse"
  | "Suggest Attraction"
  | "Videos"
  | "Blog"
  | "About";

export type IMenu = {
  id: string;
  title: IDashboardTitle;
  slug: string;
  cities?: ICity[];
};

export type ICity = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  address: string;
  image: string;
  website?: string;
  mostVisited?: IMostVisited[];
};

export type IMostVisited = {
  id: string;
  name: string;
};

export type IDetailToggled = false | { lat: number; lng: number };

export type IToggleStyle<T> = {
  condition: boolean;
  ifTrue: T;
  ifFalse: T;
};

export type IExpanded = ICity;

export type IBiggerIcon = {
  event: "hover" | "clicked" | "";
  toggled: boolean;
  id: string;
  detailIsShown?: boolean;
};
