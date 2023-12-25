import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const ContactPageCall = () => {
  return (
    <>
      <div className="border w-full col-span-12 lg:col-span-4">
        <div className=" py-10 px-10">
          <div className="flex items-center justify-center flex-col lg:block">
            <div className="flex items-center gap-4 pb-6">
              <span className=" w-10 h-10  rounded-full inline-flex items-center justify-center  bg-secondary">
                <FaPhoneAlt className="text-xl text-white" />
              </span>
              <p className="font-bold">Call To Us</p>
            </div>
            <p className="pb-4">We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="flex items-center justify-center  w-full my-8 h-[1px]  bg-slate-950"></div>
          <div className=" flex items-center justify-center flex-col lg:block">
            <div className="flex items-center gap-4 pb-6">
              <span className=" w-10 h-10 bg-secondary rounded-full inline-flex items-center justify-center">
                <CiMail className="text-xl text-white" />
              </span>
              <p className="font-bold">Write To US</p>
            </div>
            <p className="w-12/12  lg:text-left lg:w-6/12">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="py-4">Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageCall;
