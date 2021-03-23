import Link from "next/link";
import Layout from "components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/todolist">
        <a>todolist</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
