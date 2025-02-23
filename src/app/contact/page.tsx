import { ContactForm, Heading } from "@/components";

export default function Contact() {
  return (
    <section className="container text-light_gray py-5">
      <Heading label="Get in Touch" title="Contact Me" />
      <ContactForm />
    </section>
  );
}
