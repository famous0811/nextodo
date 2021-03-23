import { GetStaticProps } from "next";
import React from "react";
import Layout from "components/Layout";
import { Todolist } from "interfaces";
import { baseTodo } from "utils/sample-data";
import List from "components/List";
type Props = {
  Item: Todolist[];
};

// items }: Props
function todolist({ Item }: Props) {
  // console.log(props);
  return (
    <Layout title="todolist">
      <h2>hello</h2>
      <List items={Item} />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const Item: Todolist[] = baseTodo;
  // console.log(Item);
  return { props: { Item } };
};
export default todolist;
