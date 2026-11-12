import {QuestionType} from "../../../src/types/QuestionType.ts";


const worstCaseDemo = {
    questions: [
        // 1. THE BROKEN CHOICE (Tests empty text, zero points, negative deduction, self-dependency, insufficient options)
        {
            type: QuestionType.SINGLE_CHOICE,
            obj: {
                id: 101,
                dependsOn: 101, // Circular Dependency
                question: "   ", // Fails trim() empty check
                points: 0, // Fails > 0 check
                negativePoints: -10, // Fails < 0 check (will add 10 points)
                options: [
                    { text: "Only one option", isCorrect: true, id: 0 } // Fails < 2 options check
                ]
            }
        },
        // 2. THE MALFORMED CONTENT MIX (Tests legacy mixed with new, and broken content objects)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                id: 102,
                question: "Which of these are fruits?",
                points: 5,
                negativePoints: 0,
                hasImage: true, // Legacy prop warning
                imageLink: "/legacy.jpeg", // Legacy prop warning
                content: [
                    { type: "text", data: { /* missing 'text' prop */ } },
                    { type: "image", data: { alt: "Missing SRC", caption: "Broken Image" } }, // Missing src
                    { type: "code", data: { code: "console.log('hi');" } }, // Missing language
                    { type: "unknown_type", data: { stuff: "things" } } // Invalid type
                ],
                options: [
                    { text: "Apple", isCorrect: false, id: 0 }, // Multiple choice with ZERO true options
                    { text: "Banana", isCorrect: false, id: 1 }
                ]
            }
        },
        // 3. THE IMPOSSIBLE ORDERING (Tests permutation mismatch and length mismatch)
        {
            type: QuestionType.ORDERING,
            obj: {
                id: 103,
                question: "Order these numbers ascending.",
                points: 10,
                negativePoints: 5,
                options: ["One", "Two", "Three"],
                correct: ["One", "Two", "Four", "Five"] // Length mismatch AND element mismatch
            }
        },
        // 4. THE BANKRUPT MATCHING (Tests missing correct answers in the bank)
        {
            type: QuestionType.MATCHING,
            obj: {
                id: 104,
                question: "Match the capitals.",
                points: 15,
                negativePoints: 2,
                bank: ["Paris", "London "], // Notice the trailing space!
                options: [
                    { textBefore: "France: ", textAfter: "", correct: "Paris" },
                    { textBefore: "UK: ", textAfter: "", correct: "London" }, // Will fail due to space in bank
                    { textBefore: "Japan: ", textAfter: "", correct: "Tokyo" } // Tokyo doesn't exist in bank at all
                ]
            }
        },
        // 5. THE TRAPPED FILL-IN-THE-BLANKS (Tests select type where correct isn't an option)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                id: 105,
                question: "Fill in the correct protocol.",
                points: 10,
                options: [
                    {
                        type: "select",
                        textBefore: "Use ",
                        textAfter: " for secure web.",
                        correct: "HTTPS",
                        options: ["HTTP", "FTP", "SSH"] // HTTPS is missing from the dropdown
                    }
                ]
            }
        },
        // 6. THE TRUE/FALSE PARADOX (Tests incorrect type for correctAnswer)
        {
            type: QuestionType.TRUE_FALSE,
            obj: {
                id: 106,
                question: "The sky is blue.",
                points: 5,
                correctAnswer: "true" // String instead of boolean
            }
        },
        // 7. THE PHANTOM HOTSPOT (Tests missing image, missing coordinates, missing bank)
        {
            type: QuestionType.IMAGE_HOTSPOT,
            obj: {
                id: 107,
                question: "Drop the labels on the car.",
                points: 20,
                hotspotImage: "", // Missing base image
                bank: ["Engine"],
                hotspots: [
                    { correct: "Wheel" } // Missing X/Y, and "Wheel" isn't in bank
                ]
            }
        },
        // 8. THE EMPTY HUSK (Tests Group Questions)
        {
            type: QuestionType.GROUP,
            obj: {
                id: 108,
                question: "Answer the following section:",
                points: 50,
                subQuestions: [] // Array is empty, will render nothing
            }
        }
    ],
    hasTimer: true,
    timer: 500, // Invalid timer state
    quizSettings: {
        key: "demo-worst",
        shuffleQuestions: true,
        title: "Disaster Scenario 2.0",
        courseId: "DM",
        duration: 0,
        date: new Date(),
        description: "If this renders perfectly, your app is practically invincible.",
        id: 999,
        type: "Lecture",
        quizVersion: 1
    }
};

export default worstCaseDemo;