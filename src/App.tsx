import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  return (
    <Wrapper>
      <Boards>
        {Object.keys(toDos).map((boardId) => (
          <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
        ))}
      </Boards>
    </Wrapper>
  );
}

export default App;
