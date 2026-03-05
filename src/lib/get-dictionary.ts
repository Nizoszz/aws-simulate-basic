import "server-only";
import { Locale } from "../../i18n-config";
import { getRandomQuestionFromArray } from "@/util/random-question";
import { QuestionProps } from "@/components/@type";

const dictionaryCache: { [key in Locale]?: QuestionProps[] } = {};

const dictionaryLoaders = {
  pt: () =>
    import("../data/server.json").then(
      (modules) => modules.pratictioner.language.pt
    ),
  en: () =>
    import("../data/server.json").then(
      (modules) => modules.pratictioner.language.en
    ),
};

export const getDictionary = async (locale: Locale) => {
  if (dictionaryCache[locale]) {
    const data = dictionaryCache[locale];
    const randomQuestion: QuestionProps = getRandomQuestionFromArray(data);
    return { ...data, randomQuestion };
  }
  const data: QuestionProps[] = await dictionaryLoaders[locale]();
  const randomQuestion: QuestionProps = getRandomQuestionFromArray(data);

  dictionaryCache[locale] = data;
  return { ...data, randomQuestion };
};
