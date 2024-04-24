"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService"; // npm install --save @emailjs/browser
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);

  const [nameValue, setNameValue] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageValue, setMessageValue] = useState<string>("");
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleErrors = () => {
    setNameError(false);
    setMessageError(false);
    setEmailError(false);

    if (!nameValue) {
      setNameError(true);
    }
    if (!emailValue || !emailValue.includes("@")) {
      setEmailError(true);
    }
    if (!messageValue) {
      setMessageError(true);
    }
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const onSubmit = sendEmail(form, handleEmailSent);

  return (
    <div className="container2">
      <section>
        <div className={styles.contactWrapper}>
          <div className={styles.leftSide}>
            <h2 className="title8">Want to grow your business with us?</h2>
            <p className="text2">
              We're here to support businesses of every kind. Whether you're a
              startup or a seasoned enterprise, we're ready to assist you. Have
              questions? Don't hesitate to reach out! Our team is always
              available to provide you with the information and assistance you
              need. Your success is our priority
            </p>
          </div>

          <div className={styles.rightSide}>
            <form
              className={`${styles.form} ${emailSent ? styles.none : ""}`}
              ref={form}
              onSubmit={onSubmit}
            >
              <div className={styles.smallInputs}>
                <div className={styles.inputDiv}>
                  <p>Name</p>
                  <input
                    className={`${styles.input} ${styles.miniInput} ${
                      nameError ? styles.inputRed : ""
                    }`}
                    type="text"
                    name="user_name"
                    placeholder="Enter your full name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                </div>

                <div className={styles.inputDiv}>
                  <p>Email</p>
                  <input
                    className={`${styles.input} ${styles.miniInput}
             ${emailError ? `${styles.inputRed}  ${styles.emailInput}` : ""}
           `}
                    type="email"
                    name="user_email"
                    placeholder="Enter your email address"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.messageDiv}>
                <p>Message</p>
                <textarea
                  className={`${styles.textArea} ${styles.input}
           ${messageError ? styles.inputRed : ""}
         `}
                  name="message"
                  placeholder="Enter our message "
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                />
              </div>
              <button
                value="SEND"
                type={
                  nameValue && messageValue && emailValue ? "submit" : "button"
                }
                className={`${styles.buttonSend} ${
                  !buttonDisable ? "button3" : "button3Disabled"
                }  
            
          `}
                onClick={
                  !nameValue || !messageValue || !emailValue.includes("@")
                    ? handleErrors
                    : () => setButtonDisable(true)
                }
              >
                Send
              </button>
            </form>
            <div className={emailSent ? styles.formSent : styles.hide}>
              <h6 className="title5"> Thank you for your message</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
