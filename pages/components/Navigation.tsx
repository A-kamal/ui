import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
const NavItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Search",
    href: "/search",
  },
]
const Navigation = (props) => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://cravings.com">
        <Image
          src="/images/logo.png"
          className="mr-3 h-6 sm:h-9"
          width={48}
          height={48}
          alt="Cravings Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Cravings
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm"></span>
            <span className="block truncate text-sm font-medium">
              ayman@cravings.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NavItems.map((item,i) => (
          <Navbar.Link key={i} href={item.href} active={props.active === item.label}>
            {item.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
