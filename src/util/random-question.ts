import { QuestionProps } from "@/components/@type";

export const getRandomQuestionFromArray = (
  questions: QuestionProps[]
): QuestionProps => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};
