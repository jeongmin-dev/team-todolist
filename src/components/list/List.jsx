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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const ListContainer = styled.div`
  display: grid;
  height: 100%;
  min-height: 30vh;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 180px));
  gap: 15px;
  padding: 5px 0px;
`;
