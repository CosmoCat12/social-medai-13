import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "../UI";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/api/authApi";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Ввкдите почту в правильном формате")
      .required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, "Минимум 8 символов"),
  })
  .required();

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const [loginUser, { data: loginData }] = useLoginUserMutation();
  const { isSignedIn } = useUser();
  const userId = localStorage.getItem("userId");

  console.log("loginData :>> ", loginData);

  useEffect(() => {
    if (loginData?.message) {
      localStorage.removeItem("userId");
      alert(loginData.message);
    }
    if (loginData?.user_id) {
      localStorage.setItem("userId", JSON.stringify(loginData?.user_id));
      console.log("I'm navigating to main");
      navigate("/main");
    }
    if (isSignedIn || userId) {
      navigate("/main");
    }
  }, [isSignedIn, loginData, userId]);

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    loginUser({ email: data.email, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Почта"}
            {...field}
            isError={errors.email ? true : false}
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            type={"password"}
            placeholder={"Пароль"}
            {...field}
            isError={errors.password ? true : false}
            errorMessage={errors.password?.message}
          />
        )}
      />
      <Button text={"Войти"} type={"submit"} />
    </form>
  );
};
export default LoginForm;
