import "./styles.scss";
import Link from "next/link";
import { Logo } from "../logo/logo";
import { LuUser2 } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbHelpSquare } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";

export const ProfileSideBar = () => {
  return (
    <section className="profileSide_bar">
      <div className="wrapper">
        <div className="con">
          <div className="logo_con">
            <Logo />
          </div>

          <div className="links_con">
            <Link href={"/userprofile"}>
              <span>
                <LuUser2 />
              </span>
              profile
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <IoIosNotificationsOutline />
              </span>
              notification
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <IoIosNotificationsOutline />
              </span>
              subscription
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <TbHelpSquare />
              </span>
              help
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <IoSettingsOutline />
              </span>
              settings
            </Link>
          </div>
        </div>

        <div className="back_to_home">
          <Link href={"/"}>
            <span>
              <FaArrowLeftLong />
            </span>
            back to home
          </Link>
        </div>
      </div>
    </section>
  );
};
