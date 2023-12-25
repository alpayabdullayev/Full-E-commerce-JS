import React from "react";
import Button from "../button";

const ContactPageForm = () => {
  return (
    <>
      <div className=" border w-full col-span-12 lg:col-span-8">
        <div className="py-10 px-10">
          <form>
            <div className="message-info pb-8 flex flex-col md:flex-row gap-3">
              <div className="input-box w-full">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full outline-none bg-search  py-3 pl-4   "
                />
              </div>
              <div className="input-box w-full ">
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full bg-search outline-none py-3 pl-4"
                />
              </div>
              <div className="input-box w-full">
                <input
                  type="number"
                  placeholder="Your Phone *"
                  className="w-full outline-none bg-search py-3 pl-4"
                />
              </div>
            </div>
            <div className="flex justify-centeritems-center w-full">
              <textarea
                className="w-full outline-none p-4  bg-search "
                placeholder="Your Massage"
                rows={8}
                cols={40}

              />
            </div>

            <div className="form-btn pt-8 flex justify-end">
              <Button text={"Send Massage"} bgPrimary></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPageForm;
