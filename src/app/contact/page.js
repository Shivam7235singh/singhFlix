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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.8622844389156!2d80.26403597503435!3d26.496922376897512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37ea522f9c0d%3A0xc0670941a068aea2!2sChhatrapati%20Shahu%20Ji%20Maharaj%20University%2C%20Kanpur!5e1!3m2!1sen!2sin!4v1736340906982!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping}></iframe>
    </>
  );
};

export default Contact;
