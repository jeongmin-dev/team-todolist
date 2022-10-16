import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getTodos } from "../../redux/modules/todos";
import Todo from "../todo/Todo";

function List({ isDone }) {
  const { todos, error, isLoading } = useSelector((state) => state.todos);
  const data = todos.filter((todo) => todo.isDone === isDone);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  return (
    <BigContainer>
      <ListContainer>
        {data?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ListContainer>
    </BigContainer>
  );
}

export default List;

const BigContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    //display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 770px) {
    //height: 74vw;
    //min-height: 460px;
  }
`;
const ListContainer = styled.div`
  display: grid;
  min-height: 30vh;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(180px, 180px));
  gap: 15px;
  padding: 5px;

  @media screen and (max-width: 770px) {
    grid-template-rows: repeat(auto-fill, minmax(140px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(137px, 1fr));
    gap: 15px;
  }
  @media screen and (max-width: 690px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
