"use client";
import { useState } from "react";
import { QuestionProps } from "../@type";

const CheckboxAnswer: React.FC<QuestionProps> = ({
  id,
  options,
  correctAnswer,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedOptions((prev) => {
      const newSelections = isChecked
        ? [...prev, value]
        : prev.filter((option) => option !== value);

      if (newSelections.length >= correctAnswer.length) {
        setIsValidated(true);
        setTimeout(() => {
          window.location.reload();
        }, 8000);
      }

      return newSelections;
    });
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
            type="checkbox"
            name={`question-${id}`}
            value={key}
            checked={selectedOptions.includes(key)}
            onChange={handleChange}
            className="hidden peer"
          />
          <span
            className={`w-full h-fit p-[4px] border-2 cursor-pointer border-gray-400 rounded-md flex items-center justify-center peer-checked:scale-103 peer-checked:font-bold peer-checked:bg-[--lima] 
            ${
              isValidated
                ? correctAnswer.includes(key)
                  ? "animate-blinkCorrectAnswer scale-103 font-bold "
                  : selectedOptions.includes(key)
                  ? "animate-blinkErrorAnswer scale-97 peer-checked:scale-97 font-bold"
                  : ""
                : ""
            } 
            transition-all duration-300 ease-in-out`}
          >
            <span className="text-wrap">{value}</span>
          </span>
        </label>
      ))}
    </fieldset>
  );
};

export default CheckboxAnswer;
