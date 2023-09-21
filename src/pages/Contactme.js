import React from "react";
import Layout from "@/components/layout";
import Contactsku from "@/components/Contacts";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import Transitionku from "@/components/Transition";
import Script from "next/script";

const Contact = () => {
  return (
    <>
      <Script id="myscript" type="text/javascript">
        (function(){emailjs.init("OB3dCdbywCOfijMGb")})();
      </Script>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script> */}
      </Head>
      <Transitionku />
      <main>
        <Layout className="pt-16">
          <Contactsku />
        </Layout>
      </main>
    </>
  );
};

export default Contact;
