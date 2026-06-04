import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="contact-form">
      <label>
        <span>Your Name</span>
        <input name="name" autoComplete="name" />
      </label>
      <label>
        <span>Subject</span>
        <input name="subject" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={7} />
      </label>
      <button type="submit">
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
