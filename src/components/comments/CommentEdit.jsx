import { useDispatch } from "react-redux";
import { useState, React } from "react";
import { __deleteComment, __editComment, __editSave } from "../../redux/modules/comments";

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
  };
  const EditSave = () => {
    dispatch(__editSave({ ...comment, comment: value }));
    setValue(value);
    setDisable(true);
  };
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div>
      <input type="text" name="comment" value={value} disabled={disable} onChange={onChangeHandler} />
      {disable ? <button onClick={() => onDelete(comment.id)}>삭제</button> : <button>취소</button>}
      {disable ? <button onClick={() => onEdit(comment.id)}>수정</button> : <button onClick={() => EditSave(comment.id)}>확인</button>}
    </div>
  );
}
export default CommentEdit;
