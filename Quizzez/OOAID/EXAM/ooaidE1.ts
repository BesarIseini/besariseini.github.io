import {QuestionType} from "../../../../src/types/QuestionType.ts";

// NOTE: adjust the import path above to match wherever this file actually lives
// in the SeisHub quizzes tree (mirrored here on the AOK exam's 4-levels-up depth).
//
// Question 8 is intentionally missing — no source screenshot was provided for it,
// so it isn't included below. Renumber/reinsert as needed once you have it.
//
// All imageLink values are placeholders (see the comment above each question for
// what the image should contain) since you're adding the actual images yourself.

const ooaidExamOne = {
    questions: [
        // Question 1 — ATM state diagram (Idle / CardCheck / Cancellation / Order / Vending)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Given is the following state diagram. Which of the following statements are correct?",
                description: "Select one or more:",
                points: 20,
                hasImage: true,
                imageLink: "/images/ooaidE1-1.png", // ATM state diagram: Idle/Cancellation/CardCheck/Order/Vending
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "\"check card\" is an activity", isCorrect: true, id: 0 },
                    { text: "\"check card\" is an event", isCorrect: false, id: 1 },
                    { text: "The Idle state becomes active if the user takes the change and coffee from the machine.", isCorrect: false, id: 2 },
                    { text: "If Order is active and outstanding ≤ 0, then the change and coffee are ejected. Then a transition to Idle occurs.", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 2 — collaboration diagram statement (no diagram needed)
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following is true about collaboration diagrams:",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "The destruction of an object in a collaboration diagram cannot be shown", isCorrect: false, id: 0 },
                    { text: "The destruction of an object in a collaboration diagram can be shown by writing a comment", isCorrect: false, id: 1 },
                    { text: "The destruction of an object in a collaboration diagram can be shown by writing a comment and noting the time of destruction", isCorrect: false, id: 2 },
                    { text: "The destruction of an object in a collaboration diagram can be shown by crossing out the object", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 3 — deployment diagram, cinema ticket-selling system (Central Server / PC / DB / barcode scanner)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "A company has a central server on which a system for managing cinema ticket sales is installed. The database is installed on a separate server. Computers placed throughout all cinema halls communicate with the central server, with only one computer per hall. The computers have an application installed that communicates with the central server over the internet. Barcode readers are connected to the computers, used to scan entry tickets. Additionally, there are computers running a web application, which communicates with the central server, from which users purchase tickets.",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: true,
                imageLink: "/images/ooaidE1-3.png", // deployment diagram: Central Server(System) --LAN--> node(database, <<table>>); --internet--> PC(web application) 1..*; PC(Application) --serial--> Bar code scanner
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    { type: "select", tolerance: 0, textBefore: "1 - ", textAfter: "<br>", correct: "<<table>> database", options: ["<<table>> database", "<<file>> database", "<<executable>> database", "database server"] },
                    { type: "select", tolerance: 0, textBefore: "2 - ", textAfter: "<br>", correct: "database", options: ["database", "web application", "System", "Application"] },
                    { type: "select", tolerance: 0, textBefore: "3 - ", textAfter: "<br>", correct: "<<internet>>", options: ["<<internet>>", "<<LAN>>", "<<serial>>", "<<usb>>"] },
                    { type: "select", tolerance: 0, textBefore: "4 - ", textAfter: "<br>", correct: "1", options: ["1", "1..*", "0..1", "*"] },
                    { type: "select", tolerance: 0, textBefore: "5 - ", textAfter: "<br>", correct: "web application", options: ["web application", "database", "System", "Application"] },
                    { type: "select", tolerance: 0, textBefore: "6 - ", textAfter: "", correct: "1..*", options: ["1..*", "1", "0..1", "*"] },
                ],
                warningMessage: []
            }
        },

        // Question 4 — sequence diagram, a1:A / b1:B / a2:A / b2:B / c1:C
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Circle the methods that class C contains according to the following sequence diagram (a1 and a2 are objects of class A, b1 and b2 are objects of class B, and c1 is an object of class C).",
                description: "Select one or more:",
                points: 20,
                hasImage: true,
                imageLink: "/images/ooaidE1-4.png", // sequence diagram: a1:A -> b1:B (x); b1:B -> a2:A (y(123)); a2:A -> b1:B (x); b1:B --> a2:A (x:"abc"); c1:C self-call (z); a2:A -> b2:B (y(456))
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "z():void", isCorrect: true, id: 0 },
                    { text: "y(int):void", isCorrect: false, id: 1 },
                    { text: "x():String", isCorrect: false, id: 2 },
                    { text: "x():void", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 5 — state-machine transition label syntax
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following is true about transition labels (<trigger>[<guard>]/<effect>) in state diagrams",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "<trigger> refers to the name of the transition", isCorrect: false, id: 0 },
                    { text: "<guard> is a logical condition that must be false for the transition to occur", isCorrect: false, id: 1 },
                    { text: "<trigger> refers to an event that initiates the transition from one state to another", isCorrect: true, id: 2 },
                    { text: "<effect> is a logical condition that indicates what the next state will be after the transition", isCorrect: false, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 6 — state machine trace (states A/B/C, events E1/E2/E3/S, X value)
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "Assume that the following sequence of events occurs in the system (in the order listed): E1, S, E3, S, E2.",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: true,
                imageLink: "/images/ooaidE1-6.png", // state machine: init(/X=1) -> A(entry/X=X*2, exit/X=X-1, self S/X=X+1); A-E1[X<4]/X++->B; A-E1[X>=4]->C; B(entry/X=X+2, exit/X=X-2, self S/X=X+2); B-E2/X=X+2->A; B<->C via E3 / E2/X--; C(entry/X=X*2, exit/X=X+1, self S/X=X+3)
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    { type: "select", tolerance: 0, textBefore: "After this sequence of events finishes, the active state will be ", textAfter: ". ", correct: "B", options: ["A", "B", "C"] },
                    { type: "select", tolerance: 0, textBefore: "After this sequence of events finishes, X will have the value ", textAfter: ".", correct: "26", options: ["12", "24", "25", "26", "28"] },
                ],
                warningMessage: []
            }
        },

        // Question 7 — collaboration diagram, Professor/Test/Task grading flow
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "The structure of a sequence diagram is shown for part of the responsibilities of professors within a faculty. Namely, the professor is responsible for grading tests for certain courses. The professor takes all the tests. For each test, they take all the tasks and then assign points and a grade for each task separately.",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: true,
                imageLink: "/images/ooaidE1-7.png", // sequence diagram: :Professor <-> :Test <-> :Task, numbered messages 1-7
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    { type: "select", tolerance: 0, textBefore: "1. ", textAfter: "<br>", correct: "getTests(subjects: *char)", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "2. ", textAfter: "<br>", correct: "return tests", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "3. ", textAfter: "<br>", correct: "*[for each test] getTasks()", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "4. ", textAfter: "<br>", correct: "*[for each task] grade(score: float, grade: int)", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "5. ", textAfter: "<br>", correct: "return tasks", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "6. ", textAfter: "<br>", correct: "return tasks", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "7. ", textAfter: "", correct: "*[for each task] test(priority: int, passed: bool)", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                ],
                warningMessage: []
            }
        },

        // Question 9 — sequence diagram A/B/C, msg1/msg2/msg3
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "For the given sequence diagram, circle what is correct:",
                description: "Select one or more:",
                points: 10,
                hasImage: true,
                imageLink: "/images/ooaidE1-9.png", // sequence diagram: :A -> :B (msg1); :B -> :C (msg2); :B -> :C (msg3)
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "Message msg2 is received before message msg1 is sent", isCorrect: false, id: 0 },
                    { text: "Message msg3 is sent after message msg2 is received", isCorrect: true, id: 1 },
                    { text: "The following class diagram is consistent with the given sequence diagram: class A has no methods; class B has +msg2(), +msg3(); class C has no methods; +msg1() is shown separately (it isn't clear which class it belongs to).", isCorrect: false, id: 2 },
                    { text: "The following class diagram is consistent with the given sequence diagram: class A has no methods; class B has +msg1(); class C has +msg2(), +msg3().", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },

        // Question 10 — collaboration diagram, Tester/Project/Task grading flow
        {
            type: QuestionType.FILL_IN_THE_BLANKS_TEXT,
            obj: {
                question: "The structure of a collaboration diagram is shown for part of the responsibilities of testers within a software company. Namely, the tester is responsible for evaluating the tasks for the projects they are responsible for. The tester takes all the projects they are responsible for. For each project, they take all the tasks that were assigned to some programmer and then evaluate each task separately by assigning it a priority and whether it passed the test.",
                points: 40,
                negativePoints: 20,
                description: "",
                hasImage: true,
                imageLink: "/images/ooaidE1-10.png", // collaboration diagram: :Tester <-> :Task, :Tester <-> :Project <-> :Task, numbered messages 1-7
                required: false,
                renderType: "unordered",
                answerOverride: true,
                options: [
                    { type: "select", tolerance: 0, textBefore: "1. ", textAfter: "<br>", correct: "getProjects(clientName: *char)", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "2. ", textAfter: "<br>", correct: "return projects", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "3. ", textAfter: "<br>", correct: "*[for each project] getTasks()", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "4. ", textAfter: "<br>", correct: "*[for each task] test(priority: int, passed: bool)", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "5. ", textAfter: "<br>", correct: "return tasks", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "6. ", textAfter: "<br>", correct: "return tasks", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                    { type: "select", tolerance: 0, textBefore: "7. ", textAfter: "", correct: "*[for each task] test(priority: int, passed: bool)", options: ["getTests(subjects: *char)", "getProjects(clientName: *char)", "return tests", "return projects", "*[for each test] getTasks()", "*[for each project] getTasks()", "*[for each task] grade(score: float, grade: int)", "*[for each task] test(priority: int, passed: bool)", "return tasks"] },
                ],
                warningMessage: []
            }
        },

        // Question 11 — implementation/deployment diagram, store application (printer/scanner/barcode multiplicities)
        {
            type: QuestionType.SINGLE_CHOICE,
            obj: {
                question: "The image shows an implementation diagram for an application used in a store. If the application needs to have one to two printers, at most one scanner, and at most 5 barcode readers, choose which of the images is correct.",
                description: "Select one:",
                negativePoints: 10,
                points: 20,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "image" as const,
                options: [
                    { text: "/images/ooaidE1-11a.png", isCorrect: false, id: 0 }, // Printer 1..2, Scanner 1, Barcode reader 5
                    { text: "/images/ooaidE1-11b.png", isCorrect: false, id: 1 }, // Printer 1..*, Scanner 0..1, Barcode reader 0..5
                    { text: "/images/ooaidE1-11c.png", isCorrect: false, id: 2 }, // Printer 2, Scanner *, Barcode reader 5..*
                    { text: "/images/ooaidE1-11d.png", isCorrect: true, id: 3 },  // Printer 1..2, Scanner 0..1, Barcode reader 0..5 — matches the requirement exactly
                ],
                warningMessage: []
            }
        },

        // Question 12 — sequence diagrams, async token send with no expected response
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following sequence diagrams describes the following scenario: The user sends the token to the server, but does not expect to receive a response. The server processes the user's request.",
                description: "Select one or more:",
                points: 20,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "image" as const,
                options: [
                    { text: "/images/ooaidE1-12a.png", isCorrect: true, id: 0 },  // User's activation ends right after sending; Server processes with no return message
                    { text: "/images/ooaidE1-12b.png", isCorrect: false, id: 1 }, // User self-call validateToken, no interaction with Server
                    { text: "/images/ooaidE1-12c.png", isCorrect: false, id: 2 }, // sendToken + explicit dashed return "tokenValidity"
                    { text: "/images/ooaidE1-12d.png", isCorrect: false, id: 3 }, // sendToken, User stays blocked/active for the whole Server processing
                ],
                warningMessage: []
            }
        },

        // Question 13 — general statement about sequence diagrams
        {
            type: QuestionType.MULTIPLE_CHOICE,
            obj: {
                question: "Which of the following is true about sequence diagrams:",
                description: "Select one or more:",
                points: 10,
                hasImage: false,
                imageLink: "",
                required: false,
                renderType: "text" as const,
                options: [
                    { text: "An object must not be created during the execution of the sequence diagram", isCorrect: false, id: 0 },
                    { text: "The order in which objects are placed must be preserved from left to right", isCorrect: false, id: 1 },
                    { text: "One of the objects can be destroyed during the execution of the sequence diagram", isCorrect: true, id: 2 },
                    { text: "Objects that participate in the interaction must already be created beforehand and exist in memory", isCorrect: true, id: 3 },
                ],
                warningMessage: []
            }
        },
    ],
    hasTimer: true,
    timer: 2700,
    quizSettings: {
        shuffleQuestions: false,
        title: "OOAID Exam 1",
        courseId: "OOAiD",
        duration: 2700,
        date: new Date("2026-09-14"),
        description: "OOAD exam covering state machines, sequence diagrams, collaboration diagrams, and implementation/deployment diagrams.",
        id: 0,
        type: "Exam",
        quizVersion: 13,
        // courseName: "OOAID"
    }
}

export default ooaidExamOne;