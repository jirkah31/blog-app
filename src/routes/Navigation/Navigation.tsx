import React, { Dispatch, SetStateAction } from "react";
import styles from "./Navigation.module.scss";
import { navLinks } from "../../links";
import "react-toastify/dist/ReactToastify.css";
import ThemeButton from "../../components/ButtonTheme/ButtonTheme";
import classNames from "classnames";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { useAppSelector } from "../../helpers_hooks/reduxHooks";
import { PathsT } from "../../paths";

type PropsT = {
  bounce: boolean;
  isLoddegIn: boolean;
  setBounce: Dispatch<SetStateAction<boolean>>;
};

const Navigation = ({
  bounce,
  isLoddegIn,
  setBounce,
}: PropsT): React.FunctionComponentElement<PropsT> => {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);

  const onMouseOver = () => {
    setBounce(true);
  };

  const onMouseOut = () => {
    setBounce(false);
  };

  return (
    <nav
      className={classNames(styles.navigation, {
        [styles.darkMode]: isDarkMode,
      })}
    >
      <div className={styles.container}>
        <ul className={styles.lists}>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className={styles.oneList}>
                <ButtonNavigation
                  bounce={bounce}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  isDarkMode={isDarkMode}
                  path={link.path}
                >
                  {link.content}
                </ButtonNavigation>
              </li>
            );
          })}
          {isLoddegIn && (
            <li className={styles.oneList}>
              <ButtonNavigation
                bounce={bounce}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                isDarkMode={isDarkMode}
                path={PathsT.MyArticlesPathT}
              >
                My articles
              </ButtonNavigation>
            </li>
          )}
          <li className={styles.oneList}>
            <ButtonNavigation
              isDarkMode={isDarkMode}
              bounce={bounce}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              path={PathsT.LoginPathT}
            >
              {isLoddegIn ? "Log Out" : "Log In"}
            </ButtonNavigation>
          </li>
        </ul>

        <ThemeButton
          bounce={bounce}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          isDarkMode={isDarkMode}
        />
      </div>
    </nav>
  );
};

export default Navigation;
