"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      setMessage("The form isn't configured yet — please email me directly.");
      return;
    }

    setStatus("submitting");
    // Capture the node now — React nulls currentTarget once we await.
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thanks — your message is on its way. I'll reply soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          data.message ?? "Something went wrong. Please try again or email me.",
        );
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Please email me directly.");
    }
  }

  const fieldClass =
    "w-full rounded-lg border-2 border-ink bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-electric";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot: bots fill it, Web3Forms discards those submissions. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="What would you like to talk about?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start rounded-lg border-2 border-ink bg-accent px-6 py-3 font-display text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p
        aria-live="polite"
        className={`min-h-6 text-sm font-medium ${
          status === "error" ? "text-accent-text" : "text-muted"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
