"use client";

import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormMode = "volunteer" | "support";

const configurations = {
  volunteer: {
    subject: "Camp Firewalker volunteer interest",
    submit: "Start my application",
    kinds: ["Outing volunteer", "Event support", "Fundraising", "Professional skills"],
  },
  support: {
    subject: "Camp Firewalker contribution interest",
    submit: "Contact the team",
    kinds: ["Financial gift", "Equipment", "Meals", "Venue", "Transportation", "Professional services"],
  },
};

export default function InterestForm({ mode }: { mode: FormMode }) {
  const [opened, setOpened] = useState(false);
  const config = configurations[mode];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selections = data.getAll("interest").join(", ") || "Not specified";
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Interest: ${selections}`,
      mode === "volunteer" ? `Availability: ${data.get("availability") || ""}` : `Gift amount, if known: ${data.get("amount") || ""}`,
      "",
      "Additional details:",
      String(data.get("details") || ""),
    ].join("\n");

    setOpened(true);
    window.location.href = `mailto:firewalkertx@gmail.com?subject=${encodeURIComponent(config.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="interest-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>Phone <small>Optional</small></span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>

      <fieldset>
        <legend>{mode === "volunteer" ? "How would you like to help?" : "What kind of support are you considering?"}</legend>
        <div className="interest-options">
          {config.kinds.map((kind) => (
            <label key={kind}>
              <input type="checkbox" name="interest" value={kind} />
              <span>{kind}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {mode === "volunteer" ? (
        <label>
          <span>General availability</span>
          <select name="availability" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Weekends</option>
            <option>Weekdays</option>
            <option>Seasonal events</option>
            <option>Flexible</option>
          </select>
        </label>
      ) : (
        <label>
          <span>Gift amount <small>Optional</small></span>
          <input name="amount" inputMode="decimal" placeholder="$" />
        </label>
      )}

      <label>
        <span>Anything else we should know? <small>Optional</small></span>
        <textarea name="details" rows={5} />
      </label>

      <button className="button primary" type="submit">
        {config.submit}<ArrowRight aria-hidden="true" />
      </button>
      {opened && <p className="form-status">Your email app should now be open with your information ready to send.</p>}
    </form>
  );
}
