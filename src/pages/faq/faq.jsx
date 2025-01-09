import { FaqStyled } from "./faq.styled";
import { faq } from "../../data/faq";

export const Faq = () => {
    return (
        <FaqStyled>
            {faq.map((item, index) => (
                <p key={index}>
                    <strong>{item.header}</strong>
                    <br />
                    {item.body}
                </p>
            ))}
        </FaqStyled>
    );
};
