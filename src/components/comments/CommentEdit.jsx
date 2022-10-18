import { useDispatch } from "react-redux";
import { useState, React, useRef, useEffect } from "react";
import { __deleteComment, __editSave } from "../../redux/modules/comments"; // __editComment
import DeleteSvg from "../../styles/svg/DeleteSvg";
import CloseSvg from "../../styles/svg/CloseSvg";
import EditSvg from "../../styles/svg/EditSvg";
import CheckSvg from "../../styles/svg/CheckSvg";
import styled from "styled-components";
import useInputs from "../../hooks/useInputs";

function CommentEdit({ comment }) {
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const { inputs, onChange, reset } = useInputs({ comment: comment.comment });
  const onDelete = (commentId) => {
    dispatch(__deleteComment(commentId));
  };
  const inputRef = useRef();
  const onEdit = async (e) => {
    //dispatch(__editComment(commentId));
    setDisable(false);
  };
  const EditSave = () => {
    dispatch(__editSave({ ...comment, ...inputs }));
    setDisable(true);
    alert("수정완료! 😁");
  };

  useEffect(() => {
    if (!disable) inputRef.current.focus();
  }, [disable]);
  return (
    <CommentContainer>
      <ComInput
        ref={inputRef}
        type="text"
        name="comment"
        value={inputs.comment}
        disabled={disable}
        onChange={onChange}
      />
      {disable ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            const result = window.confirm("정말 삭제하시겠습니까? 😢");
            if (result) {
              return onDelete(comment.id);
            } else {
              return;
            }
          }}
        >
          <DeleteSvg />
        </button>
      ) : (
        <button
          onClick={() => {
            setDisable(true);
            reset();
          }}
        >
          <CloseSvg />
        </button>
      )}
      {disable ? (
        <button onClick={() => onEdit(comment.id)}>
          <EditSvg />
        </button>
      ) : (
        <button onClick={() => EditSave(comment.id)}>
          <CheckSvg />
        </button>
      )}
    </CommentContainer>
  );
}
export default CommentEdit;

const ComInput = styled.input`
  width: 80%;
  margin: 10px;
  padding: 5px;
  border: 1px solid #ffc977;
  border-radius: 10px;
`;

const CommentContainer = styled.div`
  svg {
    width: 20px;
  }
`;
