// import "./RegistrationPage.scss";
import { Heading, RegistrationInfo } from "../../components/UI";
import { SCRegistrationPage } from "./RegistrationPage.styled";
import RegForm from "../../components/forms/RegForm";

export const RegistrationPage = () => {
  return (
    <SCRegistrationPage>
      <Heading variant={"h1"} text={"Регистрация"} />
      <RegForm />
      {/* <form action="#">
        <Input type={"email"} placeholder={"Электронная почта"} />
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"} />
        <Input type={"password"} placeholder={"Подтверждение пароля"} />
        <Button text={"Зарегистрироваться"} />
      </form> */}
      <RegistrationInfo
        linkText={"Aвторизоваться"}
        hasAccountText={"У вас уже есть аккаунт?"}
        authWithText={"Зарегистрироваться с помощью"}
        navigatePath="/"
      />
    </SCRegistrationPage>
  );
};
