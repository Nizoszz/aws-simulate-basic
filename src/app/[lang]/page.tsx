import { getDictionary } from "@/lib/get-dictionary";
import Header from "@/components/Header";
import SelectAnswer from "@/components/CheckBoxAnswer";
import RadioAnswer from "@/components/RadioAnswer";

const IndexPage = async function ({ params }: unknown) {
  const { lang } = await params;
  const { randomQuestion } = await getDictionary(lang);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <main className="flex flex-col">
        <div className="p-4 flex h-auto flex-col justify-center align-center w-full">
          <h2 className="text-xl font-bold max-w-[800px] w-full whitespace-pre-line text-center">
            {randomQuestion.question}
          </h2>
          <form
            action=""
            className="rounded-md mt-6 max-w-4xl flex justify-center items-center"
          >
            {randomQuestion.multipleCorrect && (
              <SelectAnswer {...randomQuestion} />
            )}
            {!randomQuestion.multipleCorrect && (
              <RadioAnswer {...randomQuestion} />
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
