import type { WorkExperience } from "@/types/experience";

/**
 * Work history shown in the Experience section, most recent first.
 */
export const experience: WorkExperience[] = [
  {
    company: "PrimeAnalytIQ Corp.",
    title: "FullStack Developer",
    location: "Remote",
    startDate: "2023-07",
    highlights: [
      "Developed and maintained cross-platform mobile applications using React Native, TypeScript, and Expo.",
      "Worked across both frontend and backend, contributing to features from development to deployment.",
      "Created business logic and managed backend services using Firebase.",
      "Integrated and worked with various third-party APIs to extend application functionality.",
      "Implemented unit testing with Jest to improve code reliability and maintainability.",
      "Mentored interns, providing technical guidance, code reviews, and support throughout their development.",
    ],
    stack: ["React Native", "TypeScript", "Expo", "Firebase", "Jest"],
  },
  {
    company: "Department of Education - Philippines",
    title: "Public Teacher",
    location: "Camarines Norte, Bicol Region, Philippines",
    startDate: "2019-07",
    endDate: "2023-06",
    highlights: [
      "Delivered lessons and learning activities tailored to learners with different educational backgrounds and needs.",
      "Developed learning materials and assessments to support student progress.",
      "Guided and mentored learners in achieving their educational goals.",
      "Managed learner records, reports, and other administrative responsibilities.",
      "Strengthened communication, problem-solving, and classroom management skills through direct learner engagement.",
      "Adapted teaching strategies to help learners understand complex concepts, particularly in Mathematics.",
    ],
  },
  {
    company: "Freelance",
    title: "Freelance Software Developer",
    startDate: "2019-02",
    endDate: "2023-06",
    highlights: [
      "Developed and delivered mobile and web applications for businesses, organizations, and events, working independently from requirements gathering through deployment.",
      "Built queuing and reservation systems, event tabulation platforms, and government document tracking systems.",
      "Delivered personnel management systems, e-commerce and delivery applications, and gaming utilities.",
      "Worked directly with clients to gather requirements and design practical, tailored solutions.",
      "Implemented real-time data, authentication, and notification features across projects.",
      "Built payment/order workflows, document generation, and third-party API integrations.",
    ],
    stack: [
      "React Native",
      "React",
      "Flutter",
      "Android (Native)",
      "Firebase",
      "MySQL",
      "Docker",
      "REST API",
    ],
  },
];
