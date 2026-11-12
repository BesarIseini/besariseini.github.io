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
                question: "QUESTION_1_TITLE",
                content: [
                    {
                        type: "text",
                        data: {
                            text: "QUESTION_1_DESCRIPTION"
                        }
                    }
                ],
                negativePoints: 10,
                points: 10,
                renderType: "text" as const,
                options: [
                    { text: "QUESTION_1_OPTION_1", isCorrect: false, id: 0 },
                    { text: "QUESTION_1_OPTION_2", isCorrect: false, id: 1 },
                    { text: "QUESTION_1_OPTION_3", isCorrect: true, id: 2 },
                    { text: "QUESTION_1_OPTION_4", isCorrect: false, id: 3 }
                ],
                warningMessage: [{
                    message: "QUESTION_1_WARNING_1",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                }]
            }
        },
        {
            type: QuestionType.SINGLE_CHOICE,
            obj: {
                question: "QUESTION_2_TITLE",
                content: [
                    {
                        type: "text",
                        data: {
                            text: "QUESTION_2_DESCRIPTION"
                        },
                    },
                    {
                        type: "image",
                        data: {
                            src: "QUESTION_2_IMAGE_SRC",
                            alt: "QUESTION_2_IMAGE_ALT"
                        },
                    }
                ],
                negativePoints: 10,
                points: 10,
                renderType: "text" as const,
                options: [
                    { text: "QUESTION_2_OPTION_1", isCorrect: true, id: 0 },
                    { text: "QUESTION_2_OPTION_2", isCorrect: false, id: 1 },
                    { text: "QUESTION_2_OPTION_3", isCorrect: false, id: 2 },
                    { text: "QUESTION_2_OPTION_4", isCorrect: false, id: 3 }
                ],
                warningMessage: [
                    {
                        message: "QUESTION_2_WARNING_1",
                        placement: WarningMessagePlacement.BOTTOM,
                        format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                        style: {
                            visual: { background: Color.red },
                            text: { color: Color.white, textAlign: "center", bold: true, fontSize: 15 },
                            border: { borderRadius: 15, borderColor: Color.black, borderWidth: 2, borderStyle: BorderStyle.DASHED }
                        }
                    },
                    {
                        message: "QUESTION_2_WARNING_2",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    }
                ]
            }
        },
        {
            type: QuestionType.SINGLE_CHOICE,
            obj: {
                question: "QUESTION_3_TITLE",
                negativePoints: 10,
                points: 10,
                renderType: "image" as const,
                options: [
                    { text: "/ananas.jpeg", isCorrect: false, id: 0 },
                    { text: "/ananas.jpeg", isCorrect: false, id: 1 },
                    { text: "/coconut.jpeg", isCorrect: true, id: 2 },
                    { text: "/ananas.jpeg", isCorrect: false, id: 3 }
                ],
                warningMessage: [{
                    message: "QUESTION_3_WARNING_1",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                }]
            }
        },
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "QUESTION_4_TITLE",
                content: [
                    {
                        type: "text",
                        data: {
                            text: "QUESTION_4_DESCRIPTION"
                        },
                    },
                    {
                        type: "image",
                        data: {
                            src: "QUESTION_4_IMAGE_SRC",
                            alt: "QUESTION_4_IMAGE_ALT"
                        },
                    }
                ],
                points: 10,
                hasImage: true,
                renderType: "image",
                options: [
                    { text: "/ananas.jpeg", isCorrect: true, id: 0 },
                    { text: "/ananas.jpeg", isCorrect: true, id: 1 },
                    { text: "/coconut.jpeg", isCorrect: false, id: 2 },
                    { text: "/ananas.jpeg", isCorrect: true, id: 3 },
                    { text: "/coconut.jpeg", isCorrect: false, id: 4 }
                ],
                warningMessage: [
                    {
                        message: "QUESTION_4_WARNING_1",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    },
                    {
                        message: "QUESTION_4_WARNING_2",
                        placement: WarningMessagePlacement.BOTTOM,
                        format: [WarningMessageFormat.ABSTRACT, WarningMessageFormat.CUSTOM],
                        style: {
                            visual: { background: Color.red },
                            text: { color: Color.white, textAlign: "center", bold: true, fontSize: 15 },
                            border: { borderRadius: 15, borderColor: Color.black, borderWidth: 2, borderStyle: BorderStyle.DASHED }
                        }
                    }
                ]
            }
        },
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "QUESTION_5_TITLE",
                points: 10,
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "QUESTION_5_OPTION_1", isCorrect: true, id: 0 },
                    { text: "QUESTION_5_OPTION_2", isCorrect: true, id: 1 },
                    { text: "QUESTION_5_OPTION_3", isCorrect: false, id: 2 },
                    { text: "QUESTION_5_OPTION_4", isCorrect: true, id: 3 },
                    { text: "QUESTION_5_OPTION_5", isCorrect: false, id: 4 },
                    { text: "QUESTION_5_OPTION_6", isCorrect: false, id: 5 },
                    { text: "QUESTION_5_OPTION_7", isCorrect: false, id: 6 },
                    { text: "QUESTION_5_OPTION_8", isCorrect: true, id: 7 }
                ],
                warningMessage: [
                    {
                        message: "QUESTION_5_WARNING_1",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    },
                    {
                        message: "QUESTION_5_WARNING_2",
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
        {
            type: QuestionType.TRUE_FALSE,
            obj: {
                question: "QUESTION_6_TITLE",
                correctAnswer: true,
                negativePoints: 10,
                points: 10,
                warningMessage: [{
                    message: "QUESTION_6_WARNING_1",
                    format: [WarningMessageFormat.NORMAL],
                    placement: WarningMessagePlacement.TOP
                }]
            }
        },
        {
            type: QuestionType.SHORT_TEXT,
            obj: {
                question: "QUESTION_7_TITLE",
                content: [
                    {
                        type: "text",
                        data: {
                            text: "QUESTION_7_DESCRIPTION"
                        },
                    },
                    {
                        type: "image",
                        data: {
                            src: "QUESTION_7_IMAGE_SRC",
                            alt: "QUESTION_7_IMAGE_ALT",
                            caption: "QUESTION_7_IMAGE_CAPTION"
                        },
                    }
                ],
                correct: "QUESTION_7_CORRECT",
                points: 10,
                negativePoints: 10,
                tolerance: 1,
                warningMessage: [
                    {
                        message: "QUESTION_7_WARNING_1",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    },
                    {
                        message: "QUESTION_7_WARNING_2",
                        format: [WarningMessageFormat.ABSTRACT],
                        placement: WarningMessagePlacement.BOTTOM
                    },
                    {
                        message: "QUESTION_7_WARNING_3",
                        format: [WarningMessageFormat.ABSTRACT],
                        placement: WarningMessagePlacement.BOTTOM
                    }
                ]
            }
        },
        {
            type: QuestionType.NUMERIC,
            obj: {
                question: "QUESTION_8_TITLE",
                content: [
                    {
                        type: "text",
                        data: {
                            text: "QUESTION_8_DESCRIPTION",
                        },
                    },
                ],
                toleranceType: { type: "absolute", value: 1 },
                points: 10,
                negativePoints: 10,
                correct: 3.14,
                warningMessage: [
                    {
                        message: "QUESTION_8_WARNING_1",
                        format: [WarningMessageFormat.NORMAL],
                        placement: WarningMessagePlacement.TOP
                    },
                    {
                        message: "QUESTION_8_WARNING_2",
                        format: [WarningMessageFormat.ABSTRACT],
                        placement: WarningMessagePlacement.BOTTOM
                    }
                ]
            }
        },
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "QUESTION_9_TITLE",
                points: 20,
                renderType: "ordered",
                options: [
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "QUESTION_9_PART_1_BEFORE",
                        textAfter: "QUESTION_9_PART_1_AFTER",
                        correct: "QUESTION_9_PART_1_CORRECT"
                    },
                    {
                        type: "string",
                        tolerance: 1,
                        textBefore: "QUESTION_9_PART_2_BEFORE",
                        textAfter: "QUESTION_9_PART_2_AFTER",
                        correct: "QUESTION_9_PART_2_CORRECT"
                    },
                    {
                        type: "number",
                        tolerance: { type: "strict" },
                        textBefore: "QUESTION_9_PART_3_BEFORE",
                        textAfter: "QUESTION_9_PART_3_AFTER",
                        correct: 3.14
                    },
                    {
                        type: "number",
                        tolerance: { type: "absolute", value: 0.02 },
                        textBefore: "QUESTION_9_PART_4_BEFORE",
                        textAfter: "QUESTION_9_PART_4_AFTER",
                        correct: 2.71
                    }
                ]
            }
        },
    ],
    hasTimer: true,
    timer: 600,
    quizSettings: {
        key: "demo-v1",
        shuffleQuestions: false,
        title: "QUIZ_TITLE_1",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-03-02"),
        description: "QUIZ_DESCRIPTION_1",
        id: 0,
        type: "Practical",
        quizVersion: 9,
        translationPath: "/translations/demo/demoQuizV1",
        supportedLanguages: ["en", "mk", "sq"],
        defaultLanguage: "en"
        // courseName: "Demo"
    }
}

export default demo;