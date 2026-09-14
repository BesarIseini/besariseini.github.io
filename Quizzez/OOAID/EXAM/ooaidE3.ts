import {QuestionType} from "../../../../src/types/QuestionType.ts";

// NOTE: adjust the import path above to match wherever this file actually lives
// in the SeisHub quizzes tree.
//
// Combined exam: Questions 1-14 are the use-case-diagram set
// (useCaseDiagramsPart2.ts), Questions 15-19 are the class-diagram
// fundamentals set (classDiagramFundamentals.ts). This totals 19 questions,
// not 20 — the class-diagram source material was itself missing its
// Question 2 and Question 4 (never captured in the uploaded screenshots), so
// there's no 20th question to add without fabricating one. Let me know if
// you have those two and want them slotted in.
//
// Every isCorrect flag / correct value was read directly off the Moodle
// review icons and feedback boxes. Where a diagram reading was re-derived or
// uncertain, that's flagged in the comment above the relevant question — see
// in particular Questions 7-11 (actor-counting convention), and Questions 6
// and 14 (modeling exercises, screenshots cropped after option "c").
//
// All imageLink values are placeholders since you're adding the actual
// images yourself — see the comment above each question for what to draw.

const ooadExam = {
    questions: [
        // Question 1 — <<extend>> relationship semantics (A extends B)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following <<extend>>-relationship means, that ...",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-1.png", // actor X associates directly with both A and B; A --<<extend>>--> B (B is the base use case, A is the optional extension)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "... B can be executed instead of A.", isCorrect: false, id: 0 },
                    { text: "... A cannot be executed without B.", isCorrect: false, id: 1 },
                    { text: "... B might or might not invoke A.", isCorrect: true, id: 2 },
                    { text: "... B can extend A.", isCorrect: false, id: 3 },
                    { text: "... A can extend B.", isCorrect: true, id: 4 },
                    { text: "... A might or might not invoke B.", isCorrect: false, id: 5 },
                    { text: "... B always has to invoke A.", isCorrect: false, id: 6 },
                ],
                warningMessage: []
            }
        },

        // Question 2 — <<include>> relationship semantics (A includes B)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following <<include>>-relationship means, that ...",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-2.png", // actor X associates directly with both A and B; A --<<include>>--> B (A is the includer, B is always included)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "... A cannot be executed without B.", isCorrect: true, id: 0 },
                    { text: "... A might or might not invoke use case B.", isCorrect: false, id: 1 },
                    { text: "... B cannot be executed without A.", isCorrect: false, id: 2 },
                    { text: "... B can be executed instead of A.", isCorrect: false, id: 3 },
                    { text: "... the behavior of B might or might not be inserted into the behavior of A.", isCorrect: false, id: 4 },
                    { text: "... the behavior of A might or might not be inserted into the behavior of B.", isCorrect: false, id: 5 },
                    { text: "... the behavior of B always has to be inserted into the behavior of A.", isCorrect: true, id: 6 },
                    { text: "... the behavior of A always has to be inserted into the behavior of B.", isCorrect: false, id: 7 },
                ],
                warningMessage: []
            }
        },

        // Question 3 — actor generalization semantics (actor A generalizes actor B)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which statements are true if actor A generalizes actor B?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-3.png", // two actor figures A and B; hollow-triangle generalization arrow from B pointing into A (A <|-- B)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "A can execute the same use cases as B.", isCorrect: false, id: 0 },
                    { text: "A inherits all of B's associations.", isCorrect: false, id: 1 },
                    { text: "B inherits all of A's associations.", isCorrect: true, id: 2 },
                    { text: "B can execute the same use cases as A.", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 4 — F/K/H/L/N/J/M/G/O/P diagram, statement set A
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled strictly according to UML2 standard. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-4.png", // actor A -> K, L, J; K --<<extend>>--> F (extension=K, base=F); F -- C (actor); L generalizes into H (H <|-- L); H -- D (actor); J generalizes into M (M <|-- J); actor B -- M; G generalizes into M too (M <|-- G); N -- D; O generalizes into N (N <|-- O); O -- D; O --<<include>>--> P; actor E -- D, N, P
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "F can use the behavior of K but does not have to.", isCorrect: true, id: 0 },
                    { text: "P cannot be executed without O also being executed.", isCorrect: false, id: 1 },
                    { text: "D inherits the behavior of C which D can either extend or overwrite.", isCorrect: false, id: 2 },
                    { text: "P is also referred to as the included use case.", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 5 — same F/K/H/L/N/J/M/G/O/P diagram, statement set B
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled strictly according to UML2 standard. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-4.png", // same diagram as the previous question — reuse that image
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "Actor A can execute F.", isCorrect: false, id: 0 },
                    { text: "Actor A can execute L without any other actors.", isCorrect: false, id: 1 },
                    { text: "F can act as the base use case for K.", isCorrect: true, id: 2 },
                    { text: "P cannot only be executed when O is also being executed.", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 6 — modeling exercise: mother and daughter cooking, one of them gets chives
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "How do you model the following situation with a UML2 use case diagram: Mother and daughter cook dinner together. Sometimes it is necessary that one of them gets chives from the garden.",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "image" as const,
                options: [
                    { text: "/images/ucd2-6a.png", isCorrect: true, id: 0 },  // an abstract "both" actor generalizes into mother and daughter; "both" -- cook; "both" -- get chives (via <<extend>> on cook); mother and daughter each also associate with cook directly
                    { text: "/images/ucd2-6b.png", isCorrect: false, id: 1 }, // mother and daughter each associate directly with both "get chives" and "cook" (no shared abstract actor), get chives --<<extend>>--> cook
                    { text: "/images/ucd2-6c.png", isCorrect: false, id: 2 }, // mother -- get chives and cook; daughter -- cook only; get chives --<<extend>>--> cook
                    // screenshot appears cropped right after this option — there may be a missing "d" not captured
                ],
                warningMessage: []
            }
        },

        // Question 7 — actor-communication counting, use case A (actors S/R, A/G/H/K, U)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case A?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-7.png", // actor S generalizes into R (R <|-- S); R -- A (direct); R -- G (direct); actor U -- H (direct) and U -- K (direct); K generalizes into H (H <|-- K); G --<<extend>>--> A (extension = G, base = A)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "R", isCorrect: true, id: 0 },
                    { text: "S", isCorrect: true, id: 1 },
                    { text: "R ∧ S", isCorrect: false, id: 2 },
                    { text: "S ∧ S", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 8 — actor-communication counting, use case B (actors X/Y, A/B)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case B?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-8.png", // actor X -- A (direct) and X -- B (direct, diagonal line); actor Y generalizes into X (X <|-- Y) and Y -- B (direct)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "X", isCorrect: false, id: 0 },
                    { text: "Y", isCorrect: false, id: 1 },
                    { text: "Y ∧ Y", isCorrect: true, id: 2 },
                    { text: "X ∧ X", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 9 — actor-communication counting, use case F (actors S/R, T, D/F/E)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case F?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-9.png", // actor S generalizes into R (R <|-- S); R -- E (direct); actor T -- F (direct; T has its own generalization-style arrow nearby whose exact target is ambiguous from the source screenshot); F --<<extend>>--> D (extension = F, base = D)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "R", isCorrect: false, id: 0 },
                    { text: "S", isCorrect: false, id: 1 },
                    { text: "T", isCorrect: true, id: 2 },
                    { text: "R ∧ T", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 10 — actor-communication counting, use case A (actors X/Y, multiplicity 0..2)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case A?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-10.png", // actor X -- A (direct, multiplicity 0..2 on this association); actor Y generalizes into X (X <|-- Y) and Y -- A (direct, diagonal line)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "X", isCorrect: false, id: 0 },
                    { text: "X ∧ Y", isCorrect: true, id: 1 },
                    { text: "Y ∧ Y", isCorrect: false, id: 2 },
                    { text: "X ∧ X", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 11 — actor-communication counting, use case B (actors X/Y, A/B, <<include>>)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled according to UML2 standard. Which combinations of actors communicate with Use Case B?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-11.png", // actor X -- A (direct); actor Y -- B (direct); A --<<include>>--> B
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "X", isCorrect: false, id: 0 },
                    { text: "Y", isCorrect: true, id: 1 },
                    { text: "X ∧ Y", isCorrect: false, id: 2 },
                    { text: "Y ∧ Y", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 12 — P/T/R/W/X/Y/Z/U/V/S diagram (same diagram as useCaseDiagrams.ts Q4), new statement set
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled strictly according to UML2 standard. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd-4b.png", // reuse the diagram from useCaseDiagrams.ts Question 4 (actor A -> P, R, Y, U; actors B, C generalize into A; P --<<extend>>--> T; Y --<<include>>--> X; actor D -> T, R, S; actor E -> Z, S; V generalizes into U)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "P can use the behavior of T but does not have to.", isCorrect: false, id: 0 },
                    { text: "The behavior of X can be executed instead of the behavior of Z.", isCorrect: false, id: 1 },
                    { text: "B has the same relationships as A.", isCorrect: true, id: 2 },
                    { text: "P is also referred to as the extending use case.", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 13 — a second P/R/T/S/U/V/X/W/Z/Y diagram, actors A/B/C/D/E
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "The following Use Case Diagram was modeled strictly according to UML2 standard. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ucd2-13.png", // actor A -> P, T, U, and a long diagonal line to Y; P --<<extend>>--> R (extension=P, base=R); R -- D (actor); T -- S (direct); D <-> E have a vertical generalization-style arrow between them; actor C -- U; W generalizes into U (U <|-- W), X generalizes into U too (U <|-- X); actor B -- W; Z --> Y (generalization or association, Z into Y); Y --<<include>>--> V; actor E -- Y
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "Actor E can execute V.", isCorrect: false, id: 0 },
                    { text: "Actor C can execute X without any other actors.", isCorrect: true, id: 1 },
                    { text: "Y can act as the base use case for V.", isCorrect: true, id: 2 },
                    { text: "V cannot only be executed when Y is also being executed.", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 14 — modeling exercise: lab director + assistant, assistant always writes a protocol
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "How do you model the following situation with a UML2 use case diagram: The lab director does a lab test together with her/his assistant. The assistant always has to write a protocol during the lab test.",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "image" as const,
                options: [
                    { text: "/images/ucd2-14a.png", isCorrect: true, id: 0 },  // do lab test --<<include>>--> write protocol; lab director -- do lab test; assistant -- do lab test and -- write protocol
                    { text: "/images/ucd2-14b.png", isCorrect: false, id: 1 }, // same <<include>> arrow, but assistant only associates with write protocol (not do lab test)
                    { text: "/images/ucd2-14c.png", isCorrect: false, id: 2 }, // do lab test --<<extend>>--> write protocol instead of <<include>> (wrongly makes the protocol optional)
                    // screenshot appears cropped right after this option — there may be a missing "d" not captured
                ],
                warningMessage: []
            }
        },

        // Question 15 — navigability vs. arrowhead style
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Which kind of navigability belongs to which kind of arrowhead, considering the navigability from A to B?",
                points: 10,
                negativePoints: 5,
                description: "",
                hasImage: true,
                imageLink: "/images/cdf-1.png", // three A--B association lines: (1) plain line with an open arrowhead at both ends, (2) plain line with a small "x" mark in the middle and no arrowheads, (3) plain line with a small "x" mark in the middle plus an arrowhead pointing back toward A
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    { type: "select", tolerance: 0, textBefore: "A <----> B (open arrowheads on both ends) → ", textAfter: "<br>", correct: "navigable", options: ["navigable", "undefined", "not navigable"] },
                    { type: "select", tolerance: 0, textBefore: "A --x-- B (no arrowheads) → ", textAfter: "<br>", correct: "undefined", options: ["navigable", "undefined", "not navigable"] },
                    { type: "select", tolerance: 0, textBefore: "A <--x-- B (arrowhead back toward A) → ", textAfter: "", correct: "not navigable", options: ["navigable", "undefined", "not navigable"] },
                ],
                warningMessage: []
            }
        },

        // Question 16 — composition (composite aggregation) statements
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following statements about compositions (composite aggregations) are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "In a composition, a part may belong to only one composite at a time.", isCorrect: true, id: 0 },
                    { text: "The multiplicity of a composite aggregation may be ≥1.", isCorrect: false, id: 1 },
                    { text: "The composite aggregation is a transitive relationship.", isCorrect: true, id: 2 },
                    { text: "When the composite element is deleted, the parts also die.", isCorrect: true, id: 3 }, // only guaranteed if the multiplicity on the part's side is exactly 1 — per the Moodle feedback note
                ],
                warningMessage: []
            }
        },

        // Question 17 — data types in UML2
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Data types in UML2 ...",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "... can have attributes but no operations.", isCorrect: false, id: 0 },
                    { text: "... have instances without identity (in contrast to classes).", isCorrect: true, id: 1 },
                    { text: "... are noted like classes with the keyword <<datatype>> (or another pre-defined type, e.g. <<enumeration>>).", isCorrect: true, id: 2 },
                    { text: "... can be primitive types and enumerations.", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 18 — Flat / Tenant / LeasingContract class diagram
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "You are given the following clipping of a UML2 class diagram. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/cdf-6.png", // Flat and Tenant classes, each with a "*" multiplicity association leg into a shared LeasingContract association class (n-ary/association-class style link between Flat and Tenant)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "One flat can be rented by multiple tenants with different leasing contracts.", isCorrect: true, id: 0 },
                    { text: "One tenant rents exactly one flat.", isCorrect: false, id: 1 },
                    { text: "One tenant can rent the same flat several times with different leasing contracts.", isCorrect: false, id: 2 },
                    { text: "One tenant can rent multiple flats with different leasing contracts.", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 19 — A/B/C/D/E class diagram (aggregation + abstract class)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "You are given the following clipping of a UML2 class diagram. Which of the following statements are true?",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/cdf-7.png", // class A (attributes +e: String, -f: int, #g: boolean) has an aggregation (hollow diamond) association to abstract class {abstract} C (attributes +y: int, -z: String), multiplicity * on both ends; B and D both generalize from A (A <|-- B, A <|-- D; B additionally has +x: int); E generalizes from C (C <|-- E)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "An instance of A can see y.", isCorrect: true, id: 0 },
                    { text: "Objects of B and D can see g.", isCorrect: true, id: 1 },
                    { text: "An object of A may or may not contain objects of C.", isCorrect: true, id: 2 },
                    { text: "One object of A may be associated with multiple direct objects of C.", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },
    ],
    hasTimer: true,
    timer: 3000,
    quizSettings: {
        shuffleQuestions: false,
        title: "OOAD Exam — Use Case & Class Diagrams",
        courseId: "OOAiD",
        duration: 3000,
        date: new Date("2026-09-14"),
        description: "Combined exam covering use case diagrams (extend/include semantics, actor generalization, diagram analysis, actor-communication counting, modeling exercises) and class diagram fundamentals (navigability, composition/aggregation, data types, multiplicities).",
        id: 0,
        type: "Exam",
        quizVersion: 13,
        // courseName: "OOAD"
    }
}

export default ooadExam;