import {QuestionType} from "../../../src/types/QuestionType.ts";
import {WarningMessagePlacement} from "../../../src/types/warning-message/WarningMessagePlacement.ts";
import {WarningMessageFormat} from "../../../src/types/warning-message/WarningMessageFormat.ts";
import {Color} from "../../../src/types/warning-message/Color.ts";
import {BorderStyle} from "../../../src/types/warning-message/BorderStyle.ts";

const demo = {
    questions: [
            {
                type: QuestionType.SINGLE_CHOICE,
                obj: {
                    question: "What is 5 + 5?",
                    description: "This is the question description.",
                    negativePoints: 10,
                    points: 10,
                    hasImage: false,
                    imageLink: "",
                    required: false,
                    renderType: "text" as const,
                    table: "[th][col=2] Header Col Size 2, Col 1; r2 c1, r2 c2, r2 c3;[col=3] r3 col size 3",
                    options: [
                        { text: "6", isCorrect: false, id: 0 },
                        { text: "8", isCorrect: false, id: 1 },
                        { text: "10", isCorrect: true, id: 2 },
                        { text: "12", isCorrect: false, id: 3 }
                    ],
                    warningMessage: [{
                        message: "This is a Single Choice Type",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    }]
                }
            },
        {
            type: QuestionType.SINGLE_CHOICE,
            obj: {
                question: "What is this?",
                description: "Select the correct option that describes what this is.",
                negativePoints: 10,
                points: 10,
                hasImage: true,
                imageLink: "/ananas.jpeg",
                required: false,
                renderType: "text" as const,
                code: [
                    {
                        language: "C++",
                        code: `int main() {
    std::cout << "Dynamic C++ block!" << std::endl;
    return 0;
}`
                    },
                    {
                        language: "HTML",
                        code: `<div class="container">
    <h1>Hello World</h1>
</div>`
                    }
                ],
                options: [
                    {text: "Pineapple", isCorrect: true, id: 0},
                    {text: "Apple", isCorrect: false, id: 1},
                    {text: "Coconut", isCorrect: false, id: 2},
                    {text: "Pear", isCorrect: false, id: 3}
                ],
                warningMessage: [
                    {
                        message: "This Question has Negative Points!",
                        placement: WarningMessagePlacement.BOTTOM,
                        format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                        style: {
                            visual: {background: Color.red},
                            text: {color: Color.white, textAlign: "center", bold: true, fontSize: 15},
                            border: {
                                borderRadius: 15,
                                borderColor: Color.black,
                                borderWidth: 2,
                                borderStyle: BorderStyle.DASHED
                            }
                        }
                    },
                    {
                        message: "This is a Single Choice Type",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    }
                ]
            }
        }
],
    hasTimer: true,
     timer: 30,
    quizSettings: {
        shuffleQuestions: false,
        title: "Tables & Code Snippets",
        courseId: "DM",
        duration: 30,
        date: new Date("2026-03-02"),
        description: "This is a demo showcasing different tables and code snippets that were added in BETA 10. Refined BETA 11.",
        id: 1,
        type: "Practical",
        quizVersion: 10,   
        // courseName: "Demo"
    }
}

export default demo;