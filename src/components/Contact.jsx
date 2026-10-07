function Contact() {
  return (
    <section id="contact" className="section contact">
      <h1>Contact Me</h1>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <textarea
          placeholder="Enter your message"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;