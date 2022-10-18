import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { __addComment } from "../../redux/modules/comments";

function CommentsForm() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [commentInput, setCommentInput] = useState({
    todoId: Number(id),
    comment: "",
    createdAt: Date.now(),
  });

  function Submit(e) {
    e.preventDefault();
    if (commentInput.comment.trim() === "") return alert("댓글을 입력해주세요!");
    dispatch(__addComment({ ...commentInput }));
    setCommentInput({
      todoId: Number(id),
      comment: "",
      createdAt: Date.now(),
    });
  }

  function onChange(e) {
    const { name, value } = e.target;
    setCommentInput({ ...commentInput, [name]: value });
  }

  return (
    <Form onSubmit={Submit}>
      <CommentInput type="text" name="comment" value={commentInput.comment} onChange={onChange} />
      {/* <Button>작성</Button> */}
      <button>작성</button>
    </Form>
  );
}
export default CommentsForm;

const Form = styled.form``;

const CommentInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  background-color: pink; // 해당 색깔로 넣어주기
`;
