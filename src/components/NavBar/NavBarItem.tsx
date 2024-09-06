import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface INavBarItemProps {
  itemText: string;
  icon: ReactNode;
  navigatePath:string;
}


const NavBarItem = ({ itemText, icon, navigatePath }: INavBarItemProps) => {
  const navigate = useNavigate()

  const clickHander = () => {
    navigate(navigatePath)
  }

  return (
    <li className="navbar__item" onClick={clickHander}>
      {icon}

      <p className="item__name">{itemText}</p>
    </li>
  );
};

export default NavBarItem;
