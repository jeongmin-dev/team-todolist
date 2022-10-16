import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <Header title={"Home"} />
      <Link to="/todolist">todolist</Link>
      <Link to="/write">작성하기</Link>
    </Layout>
  );
}
export default Home;
