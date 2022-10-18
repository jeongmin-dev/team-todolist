import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { __getComment } from "../../redux/modules/comments";
import CommentEdit from "./CommentEdit";

function CommentsList() {
  const { id } = useParams();
  const data = useSelector((state) => state.comments.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  return (
    <CommentList>
      {data.map((comment) => {
        return Number(id) === comment.todoId ? <CommentEdit key={comment.id} comment={comment} /> : "";
      })}
    </CommentList>
  );
}
export default CommentsList;

const CommentList = styled.div`
  height: 250px;
  border: 1px solid pink;
`;
