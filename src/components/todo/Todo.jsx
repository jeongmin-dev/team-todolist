import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../elem/Button";
import { __deleteTodos, __toggleTodos } from "../../redux/modules/todos";

const btnStyle = {
  _width: "30px",
  bgColor: "white",
  borderRadius: "50%",
  _padding: "8px",
};

function Todo({ id, title, content, color, createdAt, isDone }) {
  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(
      __toggleTodos({ id, title, content, color, createdAt, isDone: !isDone })
    );
  };
  const onDelete = () => {
    dispatch(__deleteTodos(id));
  };
  return (
    <ListItem bgColor={color}>
      <TodoItem>
        <h3>{title}</h3>
        <p>{content}</p>
      </TodoItem>
      <TodoUtils>
        <span>{(createdAt + "").slice(0, 1)} 시간전</span>
        <TodoBtns>
          <Button {...btnStyle} _onClick={onToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </Button>
          <Button {...btnStyle} _onClick={onDelete}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </Button>
        </TodoBtns>
      </TodoUtils>
    </ListItem>
  );
}
export default Todo;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  justify-self: center;
  width: 100%;
  max-width: 180px;
  aspect-ratio: 1/1;
  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 690px) {
    max-width: 80%;
  }
`;

const TodoItem = styled.div`
  h3 {
    margin-bottom: 7px;
    color: #262626;
    font-weight: 700;
    font-size: 23px;
  }
  p {
    color: #565656;
    font-weight: 500;
    font-size: 15px;
  }
  @media screen and (max-width: 742px) {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 690px) {
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const TodoUtils = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
  }
  @media screen and (max-width: 742px) {
    span {
      opacity: 0;
    }
  }
  @media screen and (max-width: 690px) {
    span {
      font-size: 15px;
      opacity: 1;
    }
  }
`;

const TodoBtns = styled.div`
  display: flex;
  justify-content: end;
  button {
    margin-left: 5px;
    svg {
      width: 18px;
      color: black;
    }
    &:last-child {
      background-color: rgba(0, 0, 0, 0.6);
      &:hover {
        background-color: #242424;
      }
      svg {
        color: white;
      }
    }
    &:first-child {
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        svg {
          color: white;
        }
      }
    }
  }
`;
