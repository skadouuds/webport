import React, { use, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import LinkedinPhoto from "../../public/images/profile/Foto Linked in.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Experience from "@/components/Experience";
import Timelinewithicon from "@/components/Education";
import Contact from "@/components/Contacts";
import { motion, useScroll } from "framer-motion";
import Transitionku from "@/components/Transition";
import Honorsawards from "@/components/Honors";

const AnimatedNumbers = ({ value, classname }) => {
  const ref = useRef(null);
  const motionsku = useMotionValue(0);
  const springku = useSpring(motionsku, { duration: 3000 });
  const isinview = useInView(ref, { once: true });

  useEffect(() => {
    if (isinview) {
      motionsku.set(value);
    }
  }, [isinview, value, motionsku]);

  useEffect(() => {
    springku.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        //toFixed(0) untuk menghilangkan koma di belakang angka
        //ref current itu span yang ada di return
        ref.current.textContent = latest.toFixed(0); //dia tampilan angka yang berubah di log
      }
    });
  }, [springku, value]); //kalo ada perubahan di springku dan value maka dia akan jalanin useEffect

  return <span ref={ref} className={classname}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Transitionku />
      <main className="flex  w-full flex-col items-center justify-center ">
        <div className=" hidden md:block">
          <Layout className="pt-16">
            <h1 className="font-medium italic">Get to know me!!</h1>
            <div className=" grid w-full grid-cols-8 gap-16">
              <div className=" col-span-3 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                  Biography
                </h2>
                <p className=" font-medium text-base">
                  - Hello, I'm Vincent Leon Ghanz, and I'm a senior majoring in
                  Electrical Engineering and Computer Science (EECS) at National
                  Tsinghua University. Beyond my academic pursuits, I'm deeply
                  passionate about software engineering and am eager to gain
                  practical experience in the ever-evolving tech world. My time
                  at NTHU has been defined by an unwavering commitment to
                  learning and personal growth. I thrive on challenges and
                  continuously strive to exceed my own limitations.
                  Collaboration and teamwork are fundamental to my approach, as
                  I firmly believe that they yield the best results and enable
                  us to achieve shared goals.
                </p>
                <p className="my-4 font-medium text-base">
                  - Recognizing the importance of building connections, both
                  personally and professionally, I actively seek opportunities
                  to engage with like-minded individuals who share my enthusiasm
                  for growth and innovation. While my academic focus revolves
                  around EECS, I also find solace and inspiration in sports.
                  Whether it's on the court or field, physical activities
                  complement my academic journey and instill vital life skills
                  like discipline, teamwork, and resilience, which are readily
                  applicable to the tech landscape.
                </p>
                <p className="font-medium text-base">
                  - Proficiency in coding languages is another facet of my skill
                  set. I've explored various programming languages, including
                  C++, C, Python, R, assembly, JavaScript, and HTML. This
                  proficiency not only enriched my academic journey but also
                  earned me a two-year full scholarship and the chance to
                  participate in challenging academic competitions. Looking
                  ahead, my goal is to leverage my software engineering
                  expertise to make a meaningful impact in the real-world
                  industry. I'm well-prepared for the challenges and
                  opportunities that await me, as I continue to amass valuable
                  experience while consistently pushing the boundaries of my
                  knowledge and skills.
                </p>
              </div>
              <div className="col-span-3 relative h-max rounded-2xl border-4 border-solid border-dark bg-light p-5 shadow-lg">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-white shadow-inner flex justify-center items-center">
                  <Image
                    src={LinkedinPhoto}
                    alt="Linkedin Photo"
                    width={400}
                    height={400}
                    className="max-w-full max-h-full rounded-2xl"
                  />
                </div>
              </div>

              <div className="col-span-2 flex flex-col items-end justify-between space-y-8">
                <div className="flex flex-col items-end justify-center bg-gradient-to-r from-dark to-light rounded-lg p-6 text-white">
                  <span className="text-6xl font-bold">
                    <AnimatedNumbers value={100} />+
                  </span>
                  <h2 className="text-xl">Connections</h2>
                </div>

                <div className="flex flex-col items-end justify-center bg-gradient-to-r from-dark to-light rounded-lg p-6 text-white">
                  <span className="text-6xl font-bold">
                    <AnimatedNumbers value={30} />+
                  </span>
                  <h2 className="text-xl">Skills</h2>
                </div>

                <div className="flex flex-col items-end justify-center bg-gradient-to-r from-dark to-light rounded-lg p-6 text-white">
                  <span className="text-6xl font-bold">
                    <AnimatedNumbers value={6} />+
                  </span>
                  <h2 className="text-xl">Projects</h2>
                </div>
              </div>
            </div>
            <Experience />
            <Timelinewithicon />
            <Honorsawards />
          </Layout>
        </div>
        {/* Below Medium Screen */}
        <Layout className="block pt-8 md:hidden">
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/2">
              <div className="h-auto rounded-2xl border-4 border-solid border-dark bg-light p-0 shadow-lg">
                <div className="rounded-2xl bg-white shadow-inner flex justify-center items-center">
                  <Image
                    src={LinkedinPhoto}
                    alt="Linkedin Photo"
                    width={400}
                    height={400}
                    className="max-w-full max-h-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 p-3">
            <div className="flex flex-col items-center justify-center bg-dark rounded-lg p-2 text-white">
              <span className="text-2xl font-bold">
                <AnimatedNumbers value={60} classname="w-1/2" />+
              </span>
              <h2 className="text-l">Connections</h2>
            </div>

            <div className="flex flex-col items-center justify-center bg-dark rounded-lg p-2 text-white">
              <span className="text-2xl font-bold">
                <AnimatedNumbers value={30} classname="w-1/2 " />+
              </span>
              <h2 className="text-l">Skills</h2>
            </div>

            <div className="flex flex-col items-center justify-center bg-dark rounded-lg p-2 text-white">
              <span className="text-2xl font-bold ">
                <AnimatedNumbers value={6} classname=" w-1/2" />+
              </span>
              <h2 className="text-l">Projects</h2>
            </div>
          </div>
          <div className=" p-3">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className=" font-medium text-sm">
              - Hello, I'm Vincent Leon Ghanz, and I'm a senior majoring in
              Electrical Engineering and Computer Science (EECS) at National
              Tsinghua University. Beyond my academic pursuits, I'm deeply
              passionate about software engineering and am eager to gain
              practical experience in the ever-evolving tech world. My time at
              NTHU has been defined by an unwavering commitment to learning and
              personal growth. I thrive on challenges and continuously strive to
              exceed my own limitations. Collaboration and teamwork are
              fundamental to my approach, as I firmly believe that they yield
              the best results and enable us to achieve shared goals.
            </p>
            <p className="my-4 font-medium text-sm">
              - Recognizing the importance of building connections, both
              personally and professionally, I actively seek opportunities to
              engage with like-minded individuals who share my enthusiasm for
              growth and innovation. While my academic focus revolves around
              EECS, I also find solace and inspiration in sports. Whether it's
              on the court or field, physical activities complement my academic
              journey and instill vital life skills like discipline, teamwork,
              and resilience, which are readily applicable to the tech
              landscape.
            </p>
            <p className="font-medium text-sm">
              - Proficiency in coding languages is another facet of my skill
              set. I've explored various programming languages, including C++,
              C, Python, R, assembly, JavaScript, and HTML. This proficiency not
              only enriched my academic journey but also earned me a two-year
              full scholarship and the chance to participate in challenging
              academic competitions. Looking ahead, my goal is to leverage my
              software engineering expertise to make a meaningful impact in the
              real-world industry. I'm well-prepared for the challenges and
              opportunities that await me, as I continue to amass valuable
              experience while consistently pushing the boundaries of my
              knowledge and skills.
            </p>
          </div>
          <Experience />
          <Timelinewithicon />
          <Honorsawards />
        </Layout>
      </main>
    </>
  );
};

export default about;
