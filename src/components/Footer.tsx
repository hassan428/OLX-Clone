import React from "react";
import { AppImage, FooterLinkSection, SocialMediaLinks } from "@/interfaces";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FooterLink } from "@/components/FooterLink";
import { FooterDropDown } from "@/components/FooterDropDown";

const footerdata: FooterLinkSection[] = [
  {
    title: "Popular Categories",
    data: [
      { text: "Mobiles", href: "/category/mobiles" },
      { text: "Vehicles", href: "/category/vehicles" },
      { text: "Fashion & Beauty", href: "/category/fashion" },
      { text: "Home Appliances", href: "/category/electronics" },
    ],
  },
  {
    title: "Trending Searches",
    data: [
      { text: "Vehicles", href: "/category/vehicles" },
      { text: "Furniture", href: "/category/furniture" },
      { text: "Kids", href: "/category/fashion/kids" },
      { text: "Birds", href: "/category/birds-animals" },
    ],
  },
  {
    title: "About",
    data: [
      { text: "LOX Blog", href: "blog" },
      { text: "Contact", href: "contact" },
    ],
  },
  {
    title: "LOX",
    data: [
      { text: "Help", href: "help" },
      { text: "Privacy Policy", href: "privacypolicy" },
    ],
  },
];

const socialMediaLinks: SocialMediaLinks[] = [
  { href: "https://github.com/hassan428/OLX-Clone", Icon: FaGithub },
  { href: "facebookurl", Icon: FaFacebook },
  { href: "twiiterurl", Icon: FaTwitter },
  { href: "instagramurl", Icon: FaInstagram },
];

const appImage: AppImage[] = [
  { src: "playstore.svg", href: "https://play.google.com/" },
  { src: "appstore.svg", href: "https://www.apple.com/app-store/" },
  { src: "appgallery.svg", href: "https://appgallery.huawei.com/" },
];

export const Footer = () => {
  return (
    <div className="bg-border border-t border-black space-y-5">
      <div className="md:flex w-full justify-between items-start ">
        <div className="md:flex w-full items-center gap-5 lg:gap-10 md:p-3 ">
          {footerdata.map((data, i) => (
            <div key={i}>
              <div className="md:hidden">
                <FooterDropDown {...data} />
              </div>
              <div className="max-md:hidden">
                <FooterLink {...data} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="md:flex-col w-full flex justify-between items-center border-y md:border-0 border-border py-3 px-2 cursor-pointer">
            <h1 className="text-base font-bold uppercase">Follow us</h1>
            <div className="flex gap-2 items-center flex-wrap">
              {socialMediaLinks.map(({ Icon, href }, i) => (
                <Link key={i} href={href} target="_blank">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2 p-3 items-center w-full flex-wrap justify-center">
            {appImage.map(({ src, href }, i) => (
              <Link href={href} key={i} target="_blank">
                <Image
                  src={`/assets/images/${src}`}
                  alt={src}
                  width={150}
                  height={150}
                  className="object-cover w-24 lg:w-28 h-auto"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 text-xs sm:text-sm bg-success text-center">
        <strong>
          Free Classifieds in Pakistan . © {new Date().getFullYear()} LOX
        </strong>
      </div>
    </div>
  );
};
