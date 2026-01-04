import { useState } from "react";
import { X, Send } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    "bot-field": "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const payload = {
        "form-name": "contact",
        ...formData,
      };

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) throw new Error("Form submit failed");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        "bot-field": "",
      });

      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 1500);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-xl w-full max-w-2xl">
        <div className="flex justify-between p-6 border-b border-neutral-800">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input type="hidden" name="bot-field" />

          <input
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-neutral-800 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-neutral-800 rounded"
          />

          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 bg-neutral-800 rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-neutral-800 rounded"
          />

          {status === "success" && (
            <p className="text-green-400">Message sent successfully.</p>
          )}

          {status === "error" && (
            <p className="text-red-400">
              Something went wrong. Please email us directly.
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-neutral-800 p-3 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-cyan-600 p-3 rounded flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : <><Send size={16} /> Send</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
