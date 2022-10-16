import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import { __deleteTodos, __toggleTodos } from "../../redux/modules/todos";
import CheckSvg from "../../styles/svg/CheckSvg";
import DeleteSvg from "../../styles/svg/DeleteSvg";
import EditSvg from "../../styles/svg/EditSvg";
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
        <div>
          <Link to={`todos/${id}`}>
            <h3>{title}</h3>
          </Link>
          <span>
            <EditSvg />
          </span>
        </div>
        <p>{content}</p>
      </TodoItem>
      <TodoUtils>
        <span>{(createdAt + "").slice(0, 1)} 시간전</span>
        <TodoBtns>
          <Button {...btnStyle} _onClick={onToggle}>
            <CheckSvg />
          </Button>
          <Button {...btnStyle} _onClick={onDelete}>
            <DeleteSvg />
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
    max-width: 240px;
  }
`;

const TodoItem = styled.div`
  a {
    h3 {
      margin-bottom: 7px;
      color: #262626;
      font-weight: 700;
      font-size: 23px;
      transition: color 1s linear;
      transition: transform 0.3s linear;
    }
    &:hover {
      h3 {
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
      }
    }
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    color: #565656;
    font-weight: 500;
    font-size: 15px;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &:first-child {
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      span {
        width: 15px;
        height: 15px;
        cursor: pointer;
        svg {
          color: rgba(0, 0, 0, 0.4);
          transition: color 1s linear;
          transition: transform 0.3s linear;
        }
        &:hover {
          svg {
            color: rgba(0, 0, 0, 0.8);
            text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
            transform: translateY(-3px);
          }
        }
      }
    }
  }
  @media screen and (max-width: 780px) {
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
      margin-top: 10px;
      overflow: visible;
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
  @media screen and (max-width: 780px) {
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
