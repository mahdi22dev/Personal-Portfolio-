"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import { sendEmail } from "@/server-actions/SendEmail";
import SubmitBtn from "./Sumbitbtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{" "}
        <a className='underline' href='mailto:idrissimahdi2020@gmail.com'>
          idrissimahdi2020@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        // onSubmit={handleSumbit}
        action={async () => {
          const formData = { sender, message };
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          setSender("");
          setMessage("");
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='sender'
          value={sender}
          onChange={(e) => setSender(e.target.value)} // Update 'sender' state
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update 'message' state
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
