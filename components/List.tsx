import React from "react";
import { Todolist } from "interfaces";
import ListItem from "./ListItem";
interface Props {
  items?: Todolist[];
}
const List = ({ items }: Props) => {
  return (
    <div>
      <ul>
        {items?.map((data) => (
          <li key={data.id}>
            <ListItem item={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
