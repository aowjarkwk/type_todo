import styled from "styled-components";
import { ITodo } from "../atoms";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}
function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <DraggableCard></DraggableCard>
    </Wrapper>
  );
}

export default Board;
