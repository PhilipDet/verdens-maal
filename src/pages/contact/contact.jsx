import { ContactStyled } from "./contact.styled";
import { useEffect, useState } from "react";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        console.log("+----------Form----------+");
        console.log("Navn:", name);
        console.log("Email:", email);
        console.log("Besked:", message);
        console.log("+------------------------+");
    };

    return (
        <ContactStyled>
            <p>
                Udfyld og send formularen og vi vil hurtigst muligt besvare dine
                spørgsmål.
            </p>

            <div className="form">
                <div>
                    <label htmlFor="name">Navn:</label>
                    <label htmlFor="email">Email:</label>
                    <label htmlFor="message">Besked:</label>
                </div>
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Intast dit navn"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Intast din email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        name="message"
                        placeholder="Intast din besked"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="actions">
                <button type="submit" onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </ContactStyled>
    );
};
