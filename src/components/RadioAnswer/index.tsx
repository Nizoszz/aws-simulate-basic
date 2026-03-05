"use client";
import { useState } from "react";
import { QuestionProps } from "../@type";

const RadioAnswer: React.FC<QuestionProps> = ({
  id,
  // question,
  options,
  correctAnswer,
  // multipleCorrect,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    setIsAnswered(true);
    setTimeout(() => {
      window.location.reload();
    }, 8000);
  };

  return (
    <fieldset className="flex flex-col gap-2 items-center w-full">
      {Object.entries(options).map(([key, value]) => (
        <label
          key={key}
          className="flex items-center justify-center space-x-2 w-full h-3/4"
        >
          <input
            id={`${id}-${key}`}
            type="radio"
            name={`question-${id}`}
            value={key}
            checked={selectedOption === key}
            onChange={handleChange}
            className="hidden peer w-full"
            disabled={isAnswered}
          />
          <span
            className={`w-full h-fit p-[4px] border-2 cursor-pointer border-gray-400 rounded-md flex items-center justify-center peer-checked:scale-103 peer-checked:font-bold peer-checked:bg-[--lima] 
            ${
              isAnswered
                ? key === correctAnswer[0]
                  ? "animate-blinkCorrectAnswer scale-103 font-bold"
                  : selectedOption === key
                  ? "animate-blinkErrorAnswer scale-97 peer-checked:scale-97 font-bold"
                  : ""
                : ""
            } 
            transition-all duration-300 ease-in-out`}
          >
            <span className="text-wrap text-center">{value}</span>
          </span>
        </label>
      ))}
    </fieldset>
  );
};

export default RadioAnswer;
