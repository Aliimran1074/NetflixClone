import ContactCard from "../components/ContactCard";
import style from './contact.module.css'
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
<>
<div className={style.container}>
    <h1>Contact Us</h1>
    <ContactCard/>
    
    <section className={style.contact_section}>
    <h2>We'd love to hear <span>from you</span></h2>
    <ContactForm/>
    </section>

    </div>  
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.152328658783!2d66.99885003787108!3d24.861248146333406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1c1209b3c1%3A0xcdf50e98a701fc50!2sBhimpura%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721558171481!5m2!1sen!2s" width={600} height={450} style={{border:0}} allowFullScreen="" className={style.mapping} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</>
  )
}
