import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { navItems } from "./navItems";
import "./Navigation.less";

type NavigationProps = {
  isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  return (
    isOpen && (
      <nav className="navigation">
        <div className="navigation__close" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <h2 className="navigation__header">Menu strony</h2>
        <ul className="navigation__list">
          {navItems.map((item) => (
            <li className="navigation__list__item" key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Navigation;
