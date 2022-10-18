import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __addComment } from "../../redux/modules/comments";
import CheckSvg from "../../styles/svg/CheckSvg";
import useInputs from "../../hooks/useInputs";

function CommentsForm() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // const [commentInput, setCommentInput] = useState({
  //   comment: "",
  // });
  const { inputs, onChange, reset } = useInputs({ comment: "" });

  function Submit(e) {
    e.preventDefault();
    if (inputs.comment.trim() === "") return alert("댓글을 입력해주세요!");
    dispatch(__addComment({ ...inputs, todoId: +id, createdAt: Date.now() }));
    reset();
    alert("작성 완료!! 😆");
  }

  return (
    <Form onSubmit={Submit}>
      <CommentInput
        maxLength="40"
        type="text"
        name="comment"
        value={inputs.comment}
        onChange={onChange}
      />
      {/* <Button>작성</Button> */}
      <button
        style={{ position: "absolute", marginTop: "50px", marginRight: "10px" }}
      >
        <CheckSvg />
      </button>
    </Form>
  );
}
export default CommentsForm;

const Form = styled.form`
  svg {
    width: 18px;
  }
  display: flex;
  justify-content: flex-end;
`;

const CommentInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  height: 100px;
  position: relative;
  border-radius: 6px;
  border: 1px solid #fb9f71;
  box-shadow: 3px 3px 2px 2px lightgrey;
`;
