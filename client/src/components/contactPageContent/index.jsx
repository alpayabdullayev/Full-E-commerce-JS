import React from "react";
import ContactPageCall from "../contactPageCall";
import ContactPageForm from "../contactPageForm";

const ContactPageContent = () => {
  return (
    <>
       <section id="ContactPageContent" className="wrapper">
      <div className="grid grid-cols-12 py-20 gap-7">
        <ContactPageCall />
        <ContactPageForm />
      </div>
    </section>
    </>
  );
};

export default ContactPageContent;
