import {QuestionType} from "../../../src/types/QuestionType.ts";
import {WarningMessageFormat} from "../../../src/types/warning-message/WarningMessageFormat.ts";
import {WarningMessagePlacement} from "../../../src/types/warning-message/WarningMessagePlacement.ts";
import {Color} from "../../../src/types/warning-message/Color.ts";
import {BorderStyle} from "../../../src/types/warning-message/BorderStyle.ts";


const demo = {
    questions: [
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Given the Boolean function\nF(x,y,z)=Σ(0,1,5,7)",
                points: 40,
                negativePoints: 20,
                description: "fill in the Karnaugh map by placing 1s and 0s in the correct cells.",
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "tableN|yz[col=4];00,01,11,10|x[row=2];0,1",
                answerOverride: true,
                tableN: {
                    rows: 2,
                    columns: 4,
                },
                id: 0,
                dependsOn: -1,
                options: [
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "1"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "1"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "0"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "0"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "0"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "1"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "1"
                    },
                    {
                        type: "string",
                        tolerance: 0,
                        textBefore: "",
                        textAfter: "",
                        correct: "0"
                    },
                ],
                warningMessage: []
            }
        },
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "From the Karnaugh map in Question 1, identify the essential prime implicants.",
                description: "",
                points: 60,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                id: 1,
                dependsOn: 0,
                table: "dependsOn",
                options: [
                    { text: "x′y′", isCorrect: true, id: 0 },
                    { text: "xz", isCorrect: true, id: 1 },
                    { text: "y′", isCorrect: false, id: 2 },
                    { text: "xy", isCorrect: false, id: 3 },
                    { text: "x′z", isCorrect: false, id: 4 },
                    { text: "yz", isCorrect: false, id: 5 },
                    { text: "x+z", isCorrect: false, id: 6 },
                    { text: "x′y", isCorrect: false, id: 7 }
                ],
                warningMessage: [
                    {
                        message: "This is a Multiple Choice Type",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    },
                    {
                        message: "This Question has Negative Points!",
                        placement: WarningMessagePlacement.BOTTOM,
                        format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                        style: {
                            visual: { background: Color.blue },
                            text: { color: Color.white, textAlign: "center", bold: true, fontSize: 15 },
                            border: { borderRadius: 15, borderColor: Color.black, borderWidth: 2, borderStyle: BorderStyle.DASHED }
                        }
                    }
                ]
            }
        },
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: true,
        title: "Question Dependencies",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-03-02"),
        description: "This is a demo showcasing dependent and independent questions. Added in BETA 10.",
        id: 3,
        type: "Practical",
        quizVersion: 10,
        // courseName: "Demo"
    }
}

export default demo;