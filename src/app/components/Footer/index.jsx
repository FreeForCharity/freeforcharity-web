"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-12 px-4 md:px-6 lg:px-8">
          {/* Column 1: Endorsements */}
          <div className="space-y-6 px-4 sm:px-0">
            <h3 className="text-[28px] text-white">Endorsements</h3>

            <div className="space-y-4">
              <img src="../../../../Svgs/footerImage.svg" alt="" />
              {/* GuideStar Link */}

              <a
                href="/your-profile-url"
                className="group relative my-4 flex w-full max-w-[230px] items-center justify-between border-2 border-[#2ea3f2] bg-black px-5 py-2.5 text-[#2ea3f2] transition-all duration-300 hover:border-none"
              >
                <span className="text-[17px] font-medium leading-tight sm:text-[18px] md:text-[20px] transition-transform duration-300 group-hover:-translate-x-1">
                  Direct GuideStar Profile Link
                </span>

                {/* Arrow slides in smoothly on hover */}
                <ArrowRight
                  className="h-8 w-8 translate-x-2 opacity-0 text-[#2ea3f2] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  strokeWidth={2}
                />
              </a>

              <p>
                <span className="font-[500] text-[22px]">
                  Free For Charity EIN: 46-2471893
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 px-4 sm:px-0">
            <h3 className="text-[28px] text-white">Quick Links</h3>

            <ul className="space-y-2 text-sm" id="aria-font">
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Help For Charities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Free For Charity Pre-501c3 Onboarding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Free For Charity 501c3 Onboarding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  Supported Charity Login
                </a>
              </li>
            </ul>

            <div className="space-y-3">
              <h4 className="text-[28px] text-white">
                Free For Charity Policy
              </h4>
              <ul className="space-y-1 text-sm" id="aria-font">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    Free For Charity Donation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    Free For Charity Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    Free For Charity Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    Free For Charity Vulnerability Disclosure Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    Free For Charity Security Acknowledgement
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6 px-4 sm:px-0">
            <h3 className="text-[28px] text-white">Contact Us</h3>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-[500] text-[22px]">E-mail</p>
                  <a
                    href="mailto:clarkemoyer@freeforcharity.org"
                    className="font-[500] text-[15px] hover:text-cyan-400 transition-colors break-all"
                    id="aria-font"
                  >
                    clarkemoyer@freeforcharity.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-[500] text-[22px]">Call Us Today</p>
                  <a
                    href="tel:5202228104"
                    className="font-[500] text-[16px] hover:text-cyan-400 transition-colors"
                    id="aria-font"
                  >
                    (520) 222-8104
                  </a>
                </div>
              </div>

              {/* Main Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-[500] text-[22px]">Main Address</p>
                  <p className="font-[500] text-[16px]" id="aria-font">
                    4030 Wake Forrest Road
                    <br />
                    Suite 349 Raleigh North
                    <br />
                    Carolina 27609
                  </p>
                </div>
              </div>

              {/* PA Office */}
              <div className="flex items-start gap-3">
                <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-[500] text-[22px]">PA Office Address</p>
                  <p className="font-[500] text-[16px]" id="aria-font">
                    301 Science Park Road Suite
                    <br />
                    119 State College PA 16803
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-4">
                <a
                  href="#"
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <MessageSquare className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Q&A Bot */}
          <div className="space-y-6 px-4 sm:px-0">
            <h3 className="text-[28px] text-white">Free For Charity Q&A Bot</h3>

            <div className="bg-white text-black rounded-lg p-4 space-y-3">
              <p className="text-xs font-medium">
                Welcome to the QnA Maker sample! Ask me a question and I will
                try to answer it.
              </p>
              <p className="text-xs text-gray-500">38 minutes ago</p>

              <div className="mt-4 pt-3 border-t border-gray-300">
                <div className="flex items-center gap-2 text-xs">
                  <MessageSquare className="w-10 h-10 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Type your message"
                    className="flex-1 outline-none text-xs placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 border-t border-gray-800 text-center text-[18px]  font-[500] w-full"
          id="aria-font"
        >
          <p>
            All Rights Are Reserved by Free For Charity a US 501c3 Non Profit |
            Hosting Supported by
            <a
              href="#"
              className="underline text-[#2EA3F2] hover:text-[#2EA3F2] transition-colors"
            >
              {" "}
              interserver.net
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
