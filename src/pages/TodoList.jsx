import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import TodosNav from "../components/list/TodosNav";
import { Flexbox } from "../styles/flex";

function TodoList() {
  const [focus, setFocus] = useState(true);
  return (
    <Layout>
      <Nav>
        <span>
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </span>
        <h3>Todo List</h3>
      </Nav>
      <ListWrapper>
        <TodosNav focus={focus} setFocus={setFocus} />
        <List isDone={!focus} />
      </ListWrapper>
    </Layout>
  );
}

export default TodoList;

const ListWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  padding-bottom: 30px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  span {
    ${Flexbox}
    width:30px;
    z-index: 2;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  svg {
    width: 20px;
  }
  h3 {
    position: absolute;
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }
`;
