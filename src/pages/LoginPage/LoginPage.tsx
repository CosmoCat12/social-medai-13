import { Heading, RegistrationInfo } from "../../components/UI";
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/forms/LoginForm";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"} />
      <LoginForm />
      {/* <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"} />
        <Button type="button" text={"Войти"} />
      </form> */}
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo
        navigatePath="/registration"
        linkText={"Зарегистрироваться"}
        hasAccountText={"У вас нет аккаунта?"}
        authWithText={"Войти с помощью"}
      />
    </SCLoginPage>
  );
};
