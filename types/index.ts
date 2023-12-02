import { ElementType } from "react";

export type User = {
  _id: string;
  id: string;
  email: string;
  userName: string;
  name: string;
};

export type Transaction = {
  title: string;
  amount: number;
  DateTime: Date;
  type: string;
};

export type AccountProps = {
  link: string;
  Icon: ElementType;
  bgColor: string;
  title: string;
};
