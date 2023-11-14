import { FC } from "react";
import { concat } from "lodash";

export const SimpleComponent: FC = () => {
  return (
    <h2>It's actually just a heading…</h2>
  )
}

export const ComponentWithLodash = () => {
  const array = ['dsd'];
  console.log('uschi');
  
  const other = concat(array, 'asd', ['add'], ['dl'], 'SchuhdesManitu');
  
  
  return String(other);
}