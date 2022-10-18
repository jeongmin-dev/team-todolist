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
  margin-top: 20px;
  height: 295px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fb9f71;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ffc977;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
