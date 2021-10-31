import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="bg-white ">
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Manual's men's health and well being. Erecetile and hair loss treatments and services"
        />
      </Head>
      <div className="h-screen w-screen text-primarySolid ">
        {props.children}
      </div>
    </div>
  );
};
export default Layout;
