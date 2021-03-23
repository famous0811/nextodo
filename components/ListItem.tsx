import React from "react";
import { Todolist } from "interfaces";

interface Props {
  item: Todolist;
}
const ListItem = ({ item }: Props) => {
  return (
    <div>
      <div>
        {item.text} {item.clear ? "o" : "x"}
      </div>
    </div>
  );
};

export default ListItem;
