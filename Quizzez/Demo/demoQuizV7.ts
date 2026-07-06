import {QuestionType} from "../../../src/types/QuestionType.ts";
import demoExam1 from "./demo-exam/demoExam1.ts";


const demo = {
    questions: [
        {
            type: QuestionType.GROUP,
            obj: {
                id: 0, // Parent ID
                dependsOn: -1,
                question: "Read the following code snippet and answer the attached questions.",
                description: "```javascript\nconst a = 10;\nconst b = '20';\nconsole.log(a + b);\n```",
                points: 20, // Optional: If omitted, the GroupQuestion constructor will auto-sum the children's points
                negativePoints: 5,
                hasImage: false,
                imageLink: "",
                required: true,
                answerOverride: false,
                warningMessage: [],

                // The subQuestions array holds the raw configuration for the children
                subQuestions: [
                    {
                        // Child 1: Single Choice
                        type: QuestionType.SINGLE_CHOICE,
                        obj: {
                            id: 2,
                            dependsOn: -1,
                            question: "What will be printed to the console?",
                            description: "",
                            points: 10,
                            negativePoints: 2,
                            hasImage: false,
                            imageLink: "",
                            required: true,
                            renderType: "text",
                            options: [
                                { text: "30", isCorrect: false, id: 0 },
                                { text: "1020", isCorrect: true, id: 1 },
                                { text: "NaN", isCorrect: false, id: 2 },
                                { text: "undefined", isCorrect: false, id: 3 }
                            ]
                        }
                    },
                    {
                        // Child 2: True/False
                        type: QuestionType.TRUE_FALSE,
                        obj: {
                            id: 3,
                            dependsOn: -1,
                            question: "Type coercion occurred in this snippet.",
                            description: "",
                            points: 10,
                            negativePoints: 3,
                            hasImage: false,
                            imageLink: "",
                            required: true,
                            correctAnswer: true, // True is the correct answer
                            options: [] // Usually empty or standard True/False strings depending on your implementation
                        }
                    }
                ]
            }
        },
        {
            type: QuestionType.CODE_COMPLETION,
            obj: {
                id: 2,
                dependsOn: -1,
                question: "Complete the asynchronous fetch function.",
                points: 10,
                negativePoints: 0,
                description: "Fill in the missing keywords to properly fetch and return the user data.",
                hasImage: false,
                imageLink: "",
                required: true,
                answerOverride: false,
                warningMessage: [],
                // Specific to Code Completion:
                language: "javascript",
                codeTemplate: "async function fetchUserData(userId) {\n    const response = [[0]] fetch(`/api/users/${userId}`);\n    if (!response.[[1]]) {\n        throw new Error(\"Network response was not ok\");\n    }\n    [[2]] await response.json();\n}",
                options: [
                    {
                        type: "string", // Renders as an <input type="text">
                        correct: "await",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ""
                    },
                    {
                        type: "string",
                        correct: "ok",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ""
                    },
                    {
                        type: "select", // Renders as a <select> dropdown
                        correct: "return",
                        options: ["yield", "return", "resolve"], // The dropdown choices
                        tolerance: 0,
                        textBefore: "",
                        textAfter: ""
                    }
                ]
            }
        },
        {
            type: QuestionType.GROUP,
            obj: {
                id: 1, // Parent ID
                dependsOn: -1,
                question: "Read the following code snippet and answer the attached questions.",
                description: "```javascript\nconst a = 10;\nconst b = '20';\nconsole.log(a + b);\n```",
                points: 20, // Optional: If omitted, the GroupQuestion constructor will auto-sum the children's points
                negativePoints: 5,
                hasImage: false,
                imageLink: "",
                required: true,
                answerOverride: false,
                warningMessage: [],

                // The subQuestions array holds the raw configuration for the children
                subQuestions: [
                    ...demoExam1.questions,
                    {
                        type: QuestionType.CODE_COMPLETION,
                        obj: {
                            id: 2,
                            dependsOn: -1,
                            question: "Complete the asynchronous fetch function.",
                            points: 10,
                            negativePoints: 0,
                            description: "Fill in the missing keywords to properly fetch and return the user data.",
                            hasImage: false,
                            imageLink: "",
                            required: true,
                            answerOverride: false,
                            warningMessage: [],
                            // Specific to Code Completion:
                            language: "javascript",
                            codeTemplate: "async function fetchUserData(userId) {\n    const response = [[0]] fetch(`/api/users/${userId}`);\n    if (!response.[[1]]) {\n        throw new Error(\"Network response was not ok\");\n    }\n    [[2]] await response.json();\n}",
                            options: [
                                {
                                    type: "string", // Renders as an <input type="text">
                                    correct: "await",
                                    tolerance: 0,
                                    textBefore: "",
                                    textAfter: ""
                                },
                                {
                                    type: "string",
                                    correct: "ok",
                                    tolerance: 0,
                                    textBefore: "",
                                    textAfter: ""
                                },
                                {
                                    type: "select", // Renders as a <select> dropdown
                                    correct: "return",
                                    options: ["yield", "return", "resolve"], // The dropdown choices
                                    tolerance: 0,
                                    textBefore: "",
                                    textAfter: ""
                                }
                            ]
                        }
                    },
                ]
            }
        },
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: false,
        title: "Version 1.3 - Grouped and Code Completion Questions",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-07-05"),
        description: "This is a demo showcasing Group and Code Completion question types added in v1.3.0 ",
        id: 2,
        type: "Practical",
        quizVersion: 15,
        // courseName: "Demo"
    }
}

export default demo;