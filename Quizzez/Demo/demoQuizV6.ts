import {QuestionType} from "../../../src/types/QuestionType.ts";


const demo = {
    questions: [
    {
        type: QuestionType.ORDERING,
        obj: {
            question: "Order the numbers in ascending order.",
            points: 20,
            negativePoints: 20,
            description: "",
            hasImage: false,
            imageLink: "",
            required: false,
            renderType: "horizontal",
            options: [
                "1", "2", "3", "4", "5", "a", "b", "c", "d", "e", "testingLmao"
            ],
            correct: ["1", "2", "3", "4", "5"],
            warningMessage: []
        }
    },
        {
            type: QuestionType.ORDERING,
            obj: {
                question: "Order the numbers in ascending order.",
                points: 20,
                negativePoints: 20,
                description: "",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "verticalNumbered",
                options: [
                    "1", "2", "3", "4", "5", "a", "b", "c", "d", "e", "testingLmao"
                ],
                correct: ["1", "2", "3", "4", "5"],
                warningMessage: []
            }
        },
        {
            type: QuestionType.MATCHING,
            obj: {
                id: 1, // Required by your Question constructor
                dependsOn: -1, // Required by your Question constructor
                question: "Complete the following statements by dragging the correct terms into the slots.",
                points: 20,
                negativePoints: 5,
                description: "",
                hasImage: false,
                imageLink: "",
                required: true,
                answerOverride: false,
                renderType: "unordered", // or "unordered"
                options: [
                    {
                        textBefore: "In object-oriented programming, a ",
                        textAfter: " is a blueprint for creating objects.",
                        correct: "class"
                    },
                    {
                        textBefore: "The process of hiding internal implementation details is known as ",
                        textAfter: ".",
                        correct: "encapsulation"
                    },
                    {
                        textBefore: "A function inside a class is typically called a ",
                        textAfter: ".",
                        correct: "method"
                    }
                ],
                // The bank contains all the correct answers PLUS any distractors you want to add
                bank: [
                    "class",
                    "encapsulation",
                    "method",
                    "variable", // distractor
                    "polymorphism", // distractor
                    "inheritance" // distractor
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.IMAGE_HOTSPOT,
            obj: {
                id: 1,
                dependsOn: -1,
                question: "Label the parts of the human cell by dragging the terms to their correct locations.",
                points: 30,
                negativePoints: 5,
                description: "",
                hasImage: false, // Prevents your global Question class from grabbing it
                imageLink: "",
                hotspotImage: "/ananas.jpeg", // Powers the interactive widget
                required: true,
                answerOverride: false,
                hotspots: [
                    {
                        x: 50,
                        y: 50,
                        correct: "Nucleus"
                    },
                    {
                        x: 20,
                        y: 80,
                        correct: "Mitochondria"
                    }
                ],
                bank: [
                    "Nucleus",
                    "Mitochondria",
                    "Golgi Apparatus"
                ],
                warningMessage: []
            }
        }
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: false,
        title: "Version 1.2 - D&D, Image Hotspots",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-07-05"),
        description: "This is a demo containing new Ordering, Drag & Drop and Image Hotspots question types added in v1.2.0 ",
        id: 2,
        type: "Practical",
        quizVersion: 14,
        // courseName: "Demo"
    }
}

export default demo;