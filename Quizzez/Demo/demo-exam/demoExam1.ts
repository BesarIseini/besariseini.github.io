import demoQuizV1 from "../demoQuizV1";
import demoQuizV4 from "../demoQuizV4";
import demoQuizV2 from "../demoQuizV2";
import demoQuizV5 from "../demoQuizV5.ts";
import demoQuizV6 from "../demoQuizV6.ts";

const demoExam = {
    questions: [
        ...demoQuizV1.questions,
        ...demoQuizV2.questions,
        ...demoQuizV4.questions,
        ...demoQuizV5.questions,
        ...demoQuizV6.questions,
],
    hasTimer: true,
     timer: 1200,
    quizSettings: {
        shuffleQuestions: false,
        title: "Demo Quiz",
        courseId: "DM",
        duration: 1200,
        date: new Date("2026-06-05"),
        description: "This is a demo exam Quiz.",
        id: 5,
        type: "Exam",
        quizVersion: 9,
        // courseName: "Demo"
    }
}

export default demoExam;