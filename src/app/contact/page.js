import ContactCard from "@/app/Components/ContactCard";
import styles from "@/app/contact/contact.module.css";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>
    </>
  );
};

export default Contact;
