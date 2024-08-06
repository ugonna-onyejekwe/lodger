import "./styles.scss";
import Link from "next/link";
import { Logo } from "../logo/logo";
import { LuUser2 } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineComment } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

export const ProfileSideBar = () => {
  return (
    <section className="profileSide_bar">
      <div className="wrapper">
        <div className="con">
          <div className="logo_con">
            <Logo />
          </div>

          <div className="links_con">
            <Link href={"/userprofile"} className="active">
              <span>
                <LuUser2 />
              </span>
              profile
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <BsHouseDoor />
              </span>
              Listings
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <AiOutlineComment />
              </span>
              reviews
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <IoIosNotificationsOutline />
              </span>
              notification
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <RiMoneyDollarBoxLine />
              </span>
              subscription
            </Link>

            <Link href={"/userprofile"}>
              <span>
                <MdOutlineSupportAgent />
              </span>
              help & support
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
