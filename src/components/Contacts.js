import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { LinkedInIcon, GithubIcon, InstaIcon, FacebookIcon } from "./icons";
import { Contactsini } from "./icons";
import { motion } from "framer-motion";
import swal from "sweetalert";

const Contactsku = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    var varparams = {
      name: document.getElementById("name").value,
      mail: document.getElementById("mail").value,
      msg: document.getElementById("msg").value,
    };

    emailjs.send("service_9ga4boi", "template_tuem34o", varparams).then(
      (result) => {
        swal("Your message sent successfully!!", {
          buttons: false,
          timer: 1000,
          className: "overlay text",
        });
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        swal("Failed to sent the message!!", {
          buttons: false,
          timer: 1000,
          className: "bg-red-500",
        });
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <div className=" hidden md:block">
        <h3 className="font-bold text-xl mb-2 w-full text-left mt-28">
          Get in touch with me!!
        </h3>
        <p>Currently.</p>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1>Contact Me</h1>
            <form onSubmit={sendEmail} ref={form}>
              <div className="mb-4">
                <h5 htmlFor="name">Name</h5>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-3/5 p-2 rounded-lg border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <h5 htmlFor="mail">Email</h5>
                <input
                  type="text"
                  id="mail"
                  placeholder="Email address"
                  className="w-3/5 p-2 rounded-lg border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <h5 htmlFor="msg">Message</h5>
                <textarea
                  id="msg"
                  placeholder="Leave your message!"
                  rows="4"
                  className=" w-3/5 p-2 rounded-lg border border-gray-300"
                ></textarea>
              </div>
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
                onClick={sendEmail}
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-span-1 flex">
            <motion.div
              className="flex items-center justify-center"
              initial={{ scale: 1 }} // Initial scale (1 means normal size)
              animate={{ scale: 1.1 }} // Animation scale (1.1 means it will be slightly larger)
              transition={{
                yoyo: Infinity, // This will make it bounce infinitely
                duration: 2, // Duration of each bounce
              }}
            >
              <Contactsini />
            </motion.div>
          </div>
        </div>
      </div>

      <div className=" block md:hidden w-full">
        <motion.div
          className="flex items-center justify-center  w-full p-4 pb-0"
          initial={{ scale: 1 }} // Initial scale (1 means normal size)
          animate={{ scale: 1.1 }} // Animation scale (1.1 means it will be slightly larger)
          transition={{
            yoyo: Infinity, // This will make it bounce infinitely
            duration: 2, // Duration of each bounce
          }}
        >
          <Contactsini />
        </motion.div>
        <div className=" text-center">
          <h3 className="font-bold text-xl mb-2 w-full">
            Get in touch with me
          </h3>
          <p>I am currently looking for a job.</p>
        </div>
        <div className=" justify-center flex w-full mt-9">
          <form onSubmit={sendEmail} ref={form}>
            <div className="mb-4">
              <h5 htmlFor="name" className=" font-bold">
                Name
              </h5>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-100% p-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <h5 htmlFor="mail" className=" font-bold">
                Email
              </h5>
              <input
                type="text"
                id="mail"
                placeholder="Email address"
                className="w-100% p-2 rounded-lg border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <h5 htmlFor="msg" className=" font-bold">
                Message
              </h5>
              <textarea
                id="msg"
                placeholder="Leave your message!"
                rows="4"
                className=" w-100% p-2 rounded-lg border border-gray-300"
              ></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.8 } }}
            >
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"
                onClick={sendEmail}
              >
                Send
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactsku;
