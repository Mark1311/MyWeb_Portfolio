import React from "react";
import MyImage from "../img/my-avatar.png";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

function SideBarSection() {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={MyImage} alt="Bittu Kumar" width="80"/>
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">Richard hanrick</h1>
            <p className="title">Web developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
              <HiOutlineMail />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:richard@example.com" className="contact-link">
                  richard@example.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <HiOutlineDevicePhoneMobile />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone
</p>
                <a href="tel:+12133522795" className="contact-link">
                  +1 (213) 352-2795
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <BsFillCalendar2DateFill />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <FaMapLocationDot />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Sacramento, California, USA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
              <BsFacebook />
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
              <FaTwitter />
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
              <SiInstagram />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBarSection;
