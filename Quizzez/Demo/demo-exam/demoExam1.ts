import demoQuizV1 from "../demoQuizV1";
import demoQuizV4 from "../demoQuizV4";
import demoQuizV3 from "../demoQuizV3";
import demoQuizV2 from "../demoQuizV2";

const demoExam = {
    questions: [
        ...demoQuizV1.questions,
        ...demoQuizV2.questions,
        ...demoQuizV3.questions,
        ...demoQuizV4.questions,
],
    hasTimer: true,
     timer: 600,
    quizSettings: {
        shuffleQuestions: false,
        title: "Demo Quiz",
        courseId: "DM",
        duration: 600,
        date: new Date("2026-03-02"),
        description: "This is a demo Quiz.",
        id: 5,
        type: "Exam",
        quizVersion: 9,
        // courseName: "Demo"
    }
}

export default demoExam;