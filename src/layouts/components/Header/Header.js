import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faPlus,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";

import Button from "~/components/Button";
import "tippy.js/dist/tippy.css";
// import routesConfig  from '~/config/routes'
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import config from "~/config";
import {
  UploadIcon,
  MessageIcon,
  InboxIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
  
  const currentUser = true;
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
          {
            type: "Language",
            code: "en",
            title: "English",
          },
          {
            type: "Language",
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "FeedBack and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyborad Shortcuts",
    },
  ];



  const UserMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "view Profile",
      to: "/user",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home} className={cx('logo-link')}> <img src={images.logo} alt="Tiktok" /></Link>
        </div>
        <Search />
        <div className={cx("btn-header-right")}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Login
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? UserMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_100x100.jpeg?x-expires=1670504400&x-signature=jTnts32mONxVZJjuJCbhFl%2Fb9v0%3D"
                className={cx("user-avatar")}
                alt="Nguyen Van A"
                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7175161357246529542~c5_720x720.jpeg?x-expires=1671022800&x-signature=uuHfzfoeQtx%2BhoUwsxnnuAZRlKk%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
