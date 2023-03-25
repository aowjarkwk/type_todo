import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}
const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

function DraggableCard() {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setTodoState((allBoards) => {
      return { ...allBoards, Doing: [...allBoards["Doing"], newToDo] };
    });
    setValue("toDo", "");
  };
  const [todoState, setTodoState] = useRecoilState(toDoState);
  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on `}
        />
      </Form>
    </div>
  );
}

export default DraggableCard;
