import { useGetSubscibesQuery } from "../../store/api/subscribesApi";
import { Heading } from "../UI";
import FriendItem from "./FriendItem";

const FriendsBlock = () => {
  const { data } = useGetSubscibesQuery(null);

  return (
    <div className="FriendsBlock">
      <div className="Friends__title">
        <Heading text="Друзья" variant="h2" />
        <span className="count">130</span>
      </div>
      <div className="Friends__wrapper">
        {/* {data && data.map((friend) => (
          <FriendItem name={friend.name}
        ))} */}
        {data && data.map((friend) => <FriendItem name={friend.name} />)}
      </div>
    </div>
  );
};

export default FriendsBlock;
