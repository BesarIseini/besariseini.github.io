import {QuestionType} from "../../../../src/types/QuestionType.ts";

// NOTE: adjust the import path above to match wherever this file actually lives
// in the SeisHub quizzes tree.
//
// This set covers use case diagrams (actors, generalization, <<include>>,
// <<extend>>) rather than the OOAID exam covered in ooaidExamOne.ts.
//
// Every option's correctness below was read directly off the Moodle review
// screenshots (checkmark/X icons show the actual answer key, independent of
// which checkbox the student had ticked) — not re-derived from the diagrams,
// so it should be reliable even where my own diagram reading below is a
// best-effort reconstruction.
//
// Questions 5 and 6 have their options as diagrams (image choices). Their
// screenshots appear to be cropped right after option "c" — there may be a
// missing option "d" that wasn't captured. Double check against the source
// before treating either as complete.
//
// All imageLink values are placeholders since you're adding the actual
// images yourself — see the comment above each question for what to draw.

const useCaseDiagrams = {
    questions: [
        // Question 1 — general statement about actors (no diagram)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Actors in a use case diagram ...",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "... can be linked to abstract and non-abstract use cases via associations.", isCorrect: true, id: 0 },
                    { text: "... interact with the described system.", isCorrect: true, id: 1 },
                    { text: "... represent roles of the users of the described system.", isCorrect: true, id: 2 },
                    { text: "... can be linked to each other by inheritance.", isCorrect: true, id: 3 },
                    { text: "... interact with the system in the form of <<include>>-relationships.", isCorrect: false, id: 4 },
                ],
                warningMessage: []
            }
        },

        // Question 2 — use case generalization semantics (A <|-- B)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following statements are true if use case A is a generalization of use case B?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-2.png", // two ellipses A and B; hollow-triangle generalization arrow from B pointing into A (A <|-- B)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "B inherits the behavior of A and can override and expand it.", isCorrect: true, id: 0 },
                    { text: "B inherits all relationships from A.", isCorrect: true, id: 1 },
                    { text: "A must not be abstract.", isCorrect: false, id: 2 },
                    { text: "B is called \"base use case\".", isCorrect: false, id: 3 },
                    { text: "A inherits all relationships from B.", isCorrect: false, id: 4 },
                    { text: "B should not be abstract.", isCorrect: true, id: 5 },
                    { text: "B is called \"sub use case\".", isCorrect: true, id: 6 },
                ],
                warningMessage: []
            }
        },

        // Question 3 — actors X/Y/Z/K/J, use cases A/G/B/H/F/D/E/C/M
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled strictly according to UML2 standard. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-3.png", // actor X -> A, J, B; actors Y and Z both generalize into X; G generalizes into A (A <|-- G); B --<<include>>--> H; F --<<extend>>--> E (arrow points to base E); actor K -> G, F, D; actor J -> C, M; M generalizes into C (best-effort reading, low confidence on this last edge — double check against source)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "F cannot be executed without E also being executed.", isCorrect: false, id: 0 },
                    { text: "The behavior of H can be integrated into the behavior of B but does not have to.", isCorrect: false, id: 1 },
                    { text: "Y inherits the behavior of X which Y can either extend or overwrite.", isCorrect: true, id: 2 },
                    { text: "B is also referred to as the included use case.", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 4 — actors A/B/C/D/E, use cases P/T/R/W/X/Y/Z/U/V/S
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled strictly according to UML2 standard. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-4.png", // actor A -> P, R, Y, and directly -> U; actors B and C both generalize into A; P --<<extend>>--> T; Y --<<include>>--> X; W -> Y; actor D -> T, R, S; actor E -> Z, S; V generalizes into U (U <|-- V)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "Actor D can execute P.", isCorrect: false, id: 0 },
                    { text: "Actor A can execute U without any other actors.", isCorrect: true, id: 1 },
                    { text: "X can act as the base use case for Z.", isCorrect: false, id: 2 },
                    { text: "V inherits all associations from U and therefore also inherits all associations from A.", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 5 — modeling exercise: student + teacher present, professor as second examiner for oral exams
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "How do you model the following situation with a UML2 use case diagram: For an exam, a student and a teacher need to be present. If it is an oral exam, a professor has to act as second examiner.",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "image" as const,
                options: [
                    { text: "/images/ucd-5a.png", isCorrect: true, id: 0 },  // teacher--exam, student--exam, professor--oral exam, oral exam generalizes into exam (oral exam <|-- ... i.e. exam <|-- oral exam)
                    { text: "/images/ucd-5b.png", isCorrect: false, id: 1 }, // same layout but NO generalization link between oral exam and exam — professor ends up the only actor connected to oral exam
                    { text: "/images/ucd-5c.png", isCorrect: false, id: 2 }, // teacher AND professor both directly linked to oral exam, plus a (redundant) generalization from oral exam into exam
                    // screenshot appears cropped right after this option — there may be a missing "d" not captured
                ],
                warningMessage: []
            }
        },

        // Question 6 — modeling exercise: going for lunch may involve withdrawing cash
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "How do you model the following situation with a UML2 use case diagram: A person goes for lunch. In the course of that it might be necessary that the person withdraws cash from an ATM.",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "image" as const,
                options: [
                    { text: "/images/ucd-6a.png", isCorrect: true, id: 0 },  // withdraw cash --<<extend>>--> go for lunch (extension = withdraw cash, base = go for lunch)
                    { text: "/images/ucd-6b.png", isCorrect: false, id: 1 }, // go for lunch --<<extend>>--> withdraw cash (direction reversed)
                    { text: "/images/ucd-6c.png", isCorrect: false, id: 2 }, // go for lunch --<<include>>--> withdraw cash (mandatory include instead of an optional extend)
                    // screenshot appears cropped right after this option — there may be a missing "d" not captured
                ],
                warningMessage: []
            }
        },

        // Question 7 — actor-communication counting, use case B (actors R/S, T/U)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case B?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-7.png", // actor S generalizes into R (S <|-- ... i.e. R <|-- S); R -- B (direct); actor U generalizes into T (T <|-- U); T -- J (direct); U -- C (direct); C --<<include>>--> B; C --<<include>>--> J
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "R", isCorrect: true, id: 0 },
                    { text: "S", isCorrect: true, id: 1 },
                    { text: "R ∧ S", isCorrect: false, id: 2 },
                    { text: "R ∧ U", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 8 — actor-communication counting, use case B (actors X/Y)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case B?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-8.png", // actor X -- A (direct) and X -- B (direct, diagonal line); actor Y generalizes into X (X <|-- Y) and Y -- B (direct)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "X", isCorrect: false, id: 0 },
                    { text: "Y ∧ Y", isCorrect: true, id: 1 },
                    { text: "X ∧ X", isCorrect: false, id: 2 },
                    { text: "X ∧ X ∧ Y", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 9 — actor-communication counting, use case H (actors S/R, U)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case H?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-9.png", // actor S generalizes into R (R <|-- S); R -- G (direct); actor U -- H (direct) and U -- K (direct); K generalizes into H (H <|-- K); H --<<extend>>--> G (extension = H, base = G); A generalizes into G (G <|-- A)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "U", isCorrect: true, id: 0 },
                    { text: "U ∧ U", isCorrect: false, id: 1 },
                    { text: "U ∧ R", isCorrect: false, id: 2 },
                    { text: "U ∧ S", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 10 — actor-communication counting, use case A (actors X/Y, multiplicity 1..2)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case A?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-10.png", // actor X -- A (direct, multiplicity 1..2 on this association); actor Y generalizes into X (X <|-- Y) and Y -- A (direct)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "X ∧ Y", isCorrect: true, id: 0 },
                    { text: "Y ∧ Y", isCorrect: true, id: 1 },
                    { text: "X ∧ X", isCorrect: false, id: 2 },
                    { text: "X ∧ X ∧ X", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },
    ],
    hasTimer: true,
    timer: 1800,
    quizSettings: {
        shuffleQuestions: false,
        title: "Use Case Diagrams",
        courseId: "OOAiD",
        duration: 1800,
        date: new Date("2026-09-14"),
        description: "Practice quiz on use case diagrams: actors, generalization, <<include>>, and <<extend>>.",
        id: 0,
        type: "Exam",
        quizVersion: 13,
        // courseName: "OOAD"
    }
}

export default useCaseDiagrams;