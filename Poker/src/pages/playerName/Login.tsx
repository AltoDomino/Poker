import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

interface FormData {
  user: string;
  password: string;
}

interface PlayerNameProps {
  onNameSubmit: (name: string) => void;
}

export const PlayerName: React.FC<PlayerNameProps> = ({ onNameSubmit }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const res = await fetch(`http://localhost:3000/api/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      alert("Login Successfully");
      onNameSubmit(data.user);
      navigate("/Play");
    } else if (res.status === 422) {
      alert("Login Error, user does not exist");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="name">
        User:
        <input
          {...register("user", { required: true })}
          id="user"
          type="text"
          placeholder="User Name"
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          {...register("password", { required: true })}
          id="password"
          type="password"
          placeholder="Password"
        />
      </label>
      <button className={styles.confirm} type="submit">
        LOG IN
      </button>
      <button
        className={styles.confirm}
        onClick={() => navigate("/Registration")}
      >
        BACK TO REGISTRATION
      </button>
    </form>
  );
};
