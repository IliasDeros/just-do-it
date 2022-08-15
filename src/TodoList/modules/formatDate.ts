import { ISODate } from "./types";

export const formatDate = (date: ISODate) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
}