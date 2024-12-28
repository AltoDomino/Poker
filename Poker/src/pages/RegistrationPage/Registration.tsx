import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  user: string;
  password: string;
}

export const Registration = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (dataReg: FormData) => {
    const res = await fetch(`http://localhost:3000/api/registration`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(dataReg),
    });
    console.log(dataReg);

    console.log(res);
    if (res.status === 201) {
      alert("Successful Registration.");
    } else if (res.status === 403) {
      alert("Your Email Already Exists.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="user">
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
        <button type="submit">ZAREJESTRUJ</button>
        <div>
          <button onClick={() => navigate("/")}>WRÓĆ DO LOGOWANIA</button>
        </div>
      </form>
    </div>
  );
};
0;
