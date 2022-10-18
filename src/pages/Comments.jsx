import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
// import Button from "../elem/Button";
import styled from "styled-components";
import CommentsForm from "../components/comments/CommentsForm";
import CommentsList from "../components/comments/CommentsList";
import { useParams } from "react-router-dom";
// import DeleteSvg from "../styles/svg/DeleteSvg";

function Comments() {
  const { id } = useParams();
  const allList = useSelector((state) => state.todos.todos);
  const sepTodo = allList.find((todo) => todo.id === +id);

  return (
    <Layout>
      <Header title={"Comments"} />
      <TodoHeader>{sepTodo.content}</TodoHeader>
      <CommentsForm />
      <CommentsList />
    </Layout>
  );
}
export default Comments;

const TodoHeader = styled.div`
  margin-top: 20px;
`;