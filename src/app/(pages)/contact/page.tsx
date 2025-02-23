import { ContactForm, Header } from "@/components";

const ContactPage = () => {
  return (
    <section className="container mt-5 center-screen">
      <Header label="Get in Touch" title="Contact Me" />
      <div className="mt-5">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
