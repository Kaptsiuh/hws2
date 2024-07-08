import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
  if (name.trim() === "") {
    setError("Ошибка! Введите имя!");
  } else {
    addUserCallback(name);
    setName("");
  }
};

export const pureOnBlur = (name: any, setError: any) => {
  if (name.trim() === "") {
    setError("Ошибка! Введите имя!");
  }
};

export const pureOnEnter = (e: any, addUser: any) => {
  if (e.key === "Enter") {
    addUser();
  }
};

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimName = e.currentTarget.value.trim();
    if (trimName) {
      setName(trimName);
      error && setError("");
    } else {
      setName("");
      setError("Ошибка! Введите имя!");
    }
  };

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = name;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
