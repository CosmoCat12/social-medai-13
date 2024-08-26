// import "./MainPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import List from "../../components/List/List";
import { SCMainPage } from "./MainPage.styled";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import History from "../../components/History/History";
import Post from "../../components/Post/Post";
import { Header } from "../../components/UI/Header/Header";
import { useGetAllPostsQuery } from "../../store/api/postApi";
export const MainPage = () => {
  const {data} = useGetAllPostsQuery(null);

  console.log("data", data)

  return (
    <SCMainPage>
      <Header />
      <aside className="LeftSide">
        <NavBar />
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        <WhatsNew />
        <History />
        <Post />
        {/* <Repost /> */}
      </main>
      <aside className="RightSide">
        <List listType="closeFriends"/>
          <List listType="music"/>
        <div className="MusicBlock">
          <div className="MusicBlock__title">
            <h2>Вы недавно слушали</h2>
            <span>123</span>
          </div>
        </div>
      </aside>
    </SCMainPage>
  );
};
