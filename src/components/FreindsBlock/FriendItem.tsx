interface IGetFriendNameProps {
  name: string
}

const FriendItem = ({name}: IGetFriendNameProps) => {
  return (
    <div className="friend">
      <img src="./img/users/aleksandr-maykov.jpeg" alt="Friend" />
      <span className="friend__name">{name}</span>
    </div>
  );
};

export default FriendItem;
