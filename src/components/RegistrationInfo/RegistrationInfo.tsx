import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paragraph, Span } from "../../components/UI";
import { SignInButton } from "@clerk/clerk-react";
import axios from "axios";
import OAuthPopup from "react-oauth-popup";

interface IRegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const YANDEX_CLIENT_ID = "59ad351e9b0747cf8c9462390bb28def";
const REDIRECT_URI = "https://oauth.yandex.ru/verification_code";

const RegistrationInfo = ({
  linkText,
  hasAccountText,
  authWithText,
  navigatePath,
}: IRegistrationInfo) => {
  const [token, setToken] = useState<string | null>(null);

  const handleCode = async (code: string) => {
    try {
      const response = await axios.post(
        "https://oauth.yandex.ru/token",
        {
          grant_type: "authorization_code",
          code,
          client_id: YANDEX_CLIENT_ID,
          client_secret: "16b1fe9ada1c45beae934f461587260f",
          redirect_uri: REDIRECT_URI,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setToken(response.data.access_token);
    } catch (error) {
      console.error("Ошибка при получении токена:", error);
    }
  };

  const handleOpen = () => console.log("Окно авторизации открыто");
  const handleClose = () => console.log("Окно авторизации закрыто");

  return (
    <div className="registration">
      <Span>
        {hasAccountText} <Link to={navigatePath}>{linkText}</Link>
      </Span>
      <Paragraph>{authWithText}</Paragraph>
      <div className="icons-wrapper">
        <SignInButton
          children={
            <Link className="reg__link google-link" to="#">
              <img src="./img/icons/google.svg" alt="Google" />
            </Link>
          }
        />
        <OAuthPopup
          url={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}
          onCode={handleCode}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          <button className="reg__link yandex-link">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </button>
        </OAuthPopup>
        <Link className="reg__link mail-ru-link" to="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </Link>
      </div>
      {token && <p>Токен: {token}</p>}
    </div>
  );
};

export default RegistrationInfo;
