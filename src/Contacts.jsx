function Contacts(){
    return(
        <>
        <section id="contact">
  <h2>Contact Me</h2>
  <p>Feel free to reach out via the form below or through my email and social links.</p>

  <form action="https://formspree.io/f/yourformid" method="POST">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>

  <div class="contact-info">
    <p>Email: <a href="rafiullahmiani1509@gmail.com">rafiullahmiani1509@gmail.com</a></p>
    <p>GitHub: <a href="https://github.com/Rafiullahmiani" target="_blank">Rafiullahmiani</a></p>
    <p>LinkedIn: <a href=" https://www.linkedin.com/in/rafi-ullah-a22376373/" target="_blank">linkedin.com/in/rafi-ullah-a22376373/</a></p>
  </div>
</section>
        </>
    );
}
export default Contacts