"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService"; // npm install --save @emailjs/browser
import styles from "./ContactForm.module.css";
import GoogleReviews from "../../../components/elfsightWidgets/GoogleReviews2se";

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
            <GoogleReviews />
          </div>
          <div className={styles.rightSide}>
            <form
              className={`${styles.form} ${emailSent ? styles.none : ""}`}
              ref={form}
              onSubmit={onSubmit}
            >
              <div className={styles.smallInputs}>
                <div className={styles.inputDiv}>
                  <p>Namn</p>
                  <input
                    className={`${styles.input} ${styles.miniInput} ${
                      nameError ? styles.inputRed : ""
                    }`}
                    type="text"
                    name="user_name"
                    placeholder="Ange ditt fullständiga namn"
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
                    placeholder="Ange din e-postadress"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.messageDiv}>
                <p>Meddelande</p>
                <textarea
                  className={`${styles.textArea} ${styles.input}
           ${messageError ? styles.inputRed : ""}
         `}
                  name="message"
                  placeholder="Ange ditt meddelande"
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
                Skicka
              </button>
            </form>
            <div className={emailSent ? styles.formSent : styles.hide}>
              <h6 className="title5"> Tack för ditt meddelande.</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
