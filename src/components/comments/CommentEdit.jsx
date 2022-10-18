import { useDispatch } from "react-redux";
import { useState, React } from "react";
import { __deleteComment, __editComment, __editSave } from "../../redux/modules/comments";
import DeleteSvg from "../../styles/svg/DeleteSvg";
import CloseSvg from "../../styles/svg/CloseSvg";
import EditSvg from "../../styles/svg/EditSvg";
import CheckSvg from "../../styles/svg/CheckSvg";
import styled from "styled-components";

function CommentEdit({ comment }) {
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(comment.comment);
  const dispatch = useDispatch();

  const onDelete = (commentId) => {
    dispatch(__deleteComment(commentId));
  };

  const onEdit = (commentId) => {
    dispatch(__editComment(commentId));
    setDisable(false);
    document.getElementById("input").focus();
  };
  const EditSave = () => {
    dispatch(__editSave({ ...comment, comment: value }));
    setValue(value);
    setDisable(true);
    alert("수정완료! 😁");
  };
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <CommentContainer>
      <ComInput id="input" type="text" name="comment" value={value} disabled={disable} onChange={onChangeHandler} />
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
        <button onClick={() => setDisable(true)}>
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
