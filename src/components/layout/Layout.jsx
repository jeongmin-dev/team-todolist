import styled from "styled-components";

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div`
  width: 60vw;
  max-width: 1000px;
  min-width: 600px;
  height: 70vh;
  max-height: 700px;
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.boardColor};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
`;
