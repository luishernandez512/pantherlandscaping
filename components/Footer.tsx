import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import { categoriesData, quickLinksData } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative border-t overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primeColor bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 " />

      <Container className="relative z-10">
        <FooterTop />

        {/*
          Top-level grid:
          - 1 column on mobile (<=640px)
          - 3 columns on md+ (>=640px)
        */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1) Logo & Description (Left Column) */}
          {/* 1) Logo & Description (Left Column) */}
          <div className="flex flex-col justify-center space-y-6 items-center text-center md:items-start md:text-left">
            <Link href="/">
              <Image
                src="/WhiteLogo.png"
                alt="PL Logo"
                width={180}
                height={75}
                priority
                className="object-contain"
              />
            </Link>
            <p className="text-white text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex ad
              at vitae esse. Vero fuga laborum disti.
            </p>
            <SocialMedia
              className="text-black"
              iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>


          {/*
            2) Middle Column (Quick Links & Categories)
               We center it with flex, then nest a grid for the 2 sections.
          */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-bold text-white mb-4">Quick Links</h3>
                <div className="flex flex-col gap-3">
                  {quickLinksData.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-white hover:text-darkColor text-sm font-semibold hoverEffect"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold text-white mb-4">Categories</h3>
                <div className="flex flex-col gap-3">
                  {categoriesData.map((item) => (
                    <Link
                      key={item.title}
                      href={`${item.href}`}
                      className="text-white hover:text-darkColor text-sm font-semibold hoverEffect"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3) Newsletter (Right Column) */}
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-white text-sm mb-4 font-semibold">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-darkColor text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

