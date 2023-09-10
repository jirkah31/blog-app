import React from "react";
import styles from "./Navigation.module.scss";
import "react-toastify/dist/ReactToastify.css";
import ThemeButton from "../../components/ButtonTheme/ButtonTheme";
import classNames from "classnames";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { useAppSelector } from "../../redux/reduxHooks";
import { PathsT, navLinks } from "../../api/api_configs";
import { useLocation } from "react-router-dom";

type PropsT = {
  isLoddegIn: boolean;
};

const Navigation = React.memo(function Navigation({
  isLoddegIn,
}: PropsT): React.FunctionComponentElement<PropsT> {
  const { isDarkMode } = useAppSelector((state) => state.isDarkMode.value);
  const location = useLocation();
  const currnetPath = location.pathname;
  const loginButtonPath = currnetPath.includes("login")
    ? currnetPath
    : `${currnetPath}/${PathsT.LoginPathT}`.replaceAll("//", "/");

  return (
    <nav
      data-cy="navigation"
      className={classNames(styles.navigation, {
        [styles.darkMode]: isDarkMode,
      })}
    >
      <div className={styles.container}>
        <ul className={styles.lists}>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className={styles.oneList}>
                <ButtonNavigation isDarkMode={isDarkMode} path={link.path}>
                  {link.content}
                </ButtonNavigation>
              </li>
            );
          })}
          {isLoddegIn && (
            <li className={styles.oneList}>
              <ButtonNavigation
                isDarkMode={isDarkMode}
                path={PathsT.MyArticlesPathT}
              >
                My articles
              </ButtonNavigation>
            </li>
          )}
          <li className={styles.oneList}>
            <ButtonNavigation isDarkMode={isDarkMode} path={loginButtonPath}>
              {isLoddegIn ? "Log Out" : "Log In"}
            </ButtonNavigation>
          </li>
        </ul>

        <ThemeButton isDarkMode={isDarkMode} />
      </div>
    </nav>
  );
});

export default Navigation;
