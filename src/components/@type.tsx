export interface QuestionProps {
  id: number;
  question: string;
  options: AnswersProps;
  correctAnswer: string[];
  multipleCorrect?: boolean;
}

export interface AnswersProps {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
}
