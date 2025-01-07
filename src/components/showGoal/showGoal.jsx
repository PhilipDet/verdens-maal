import { ShowGoalStyled } from "./showGoal.styled";
import { goals } from "../../data/sdg";

export const ShowGoal = ({ goal }) => {
    goal = goals.find((sdg) => sdg.id === goal) || 0;

    return (
        <ShowGoalStyled>
            <div>
                {goal === 0 ? (
                    <>
                        <h3>
                            Hvad er FN's Verdensmål for bæredygtig udvikling?
                        </h3>
                        <h4>
                            FN's Verdensmål består af 17 mål og 169 delmål og er
                            den til dato mest ambitiøse globale
                            udviklingsdagsorden.
                        </h4>
                        <p>
                            FN's Verdensmål for bæredygtig udvikling blev
                            vedtaget af verdens stats- og regeringsledere på FN
                            topmødet i New York den 25. september 2015. Det
                            markerede en hidtil uset ambitiøs og transformativ
                            udviklingsdagsorden. Målene trådte i kraft den 1.
                            Januar 2016 og skal frem til 2030 sætte os kurs mod
                            en mere bæredygtig udvikling for både mennesker og
                            planeten, vi bor på.
                        </p>

                        <br />

                        <h3>De 17 verdensmål</h3>

                        <p>
                            Verdensmålene udgør 17 konkrete mål og 169 delmål,
                            som forpligter alle FN's 193 medlemslande til helt
                            at afskaffe fattigdom og sult i verden, reducere
                            uligheder, sikre god uddannelse og bedre sundhed til
                            alle, anstændige jobs og mere bæredygtig økonomisk
                            vækst.
                            <br />
                            <br />
                            De fokuserer ligeledes på at fremme fred og
                            sikkerhed og stærke institutioner, og på at styrke
                            internationale partnerskaber.
                            <br />
                            <br />
                            Den nye dagsorden anerkender således, at social,
                            økonomisk og miljømæssig udvikling, fred, sikkerhed
                            og internationalt samarbejde er tæt forbundne, og at
                            det kræver en integreret indsats at opnå holdbare
                            udviklingsresultater.
                        </p>
                    </>
                ) : (
                    <>
                        <h4>{goal.byline}</h4>
                        <p>{goal.description}</p>
                        <div>
                            <img src={goal.image_url} alt="" />
                            <iframe
                                src={goal.video_url + "?autoplay=1&mute=1"}
                            ></iframe>
                        </div>
                    </>
                )}
            </div>
        </ShowGoalStyled>
    );
};
