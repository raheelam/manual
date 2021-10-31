import { useEffect, useState } from "react";
import Image from "next/image";

export default function Quiz({ setIsQuizMode }) {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const [result, setResult] = useState("");
  const getQuestions = () => {
    fetch("/api/questionnaires")
      .then((resp) => resp.json())
      .then((resp) => setQuestions(resp.questions))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuestions();
    console.log(questions);
  }, []);

  console.log(questions);
  if (questions.length === 0) {
    return <></>;
  }

  return (
    <div className="h-full text-black overflow-hidden sm:overflow-auto tablet:overflow-hidden text-xl lg:text-2xl">
      <section className="flex flex-col items-center justify-center h-5/6 sm:h-auto tablet:h-5/6 lg:h-full    mx-5 lg:mx-40  px-2 lg:px-5 ">
        <button
          className="absolute text-sm top-4 right-6 p-2 bg-gray-100 text-black shadow-inner border border-2 border-gray-300 hover:bg-red-700 rounded "
          onClick={() => setIsQuizMode(false)}
        >
          Close
        </button>
        <div className="absolute text-sm top-4 left-6 text-black   ">
          <div>
            <h1 className="font-bold">Manual Quiz</h1>
            <p>Please select an option</p>
          </div>
        </div>
        {!isEnd && (
          <div className="lg:w-5/6 sm:mt-16 tablet:mt-0">
            <p className="">
              {currentPage}. {questions[currentPage - 1].question}
            </p>
            <div className="grid gap-5 grid-cols-3 lg:grid-cols-3 mt-10 text-center lg:text-left ">
              {questions[currentPage - 1].options.map((op) => {
                return (
                  <div
                    onClick={() => {
                      if (op.isRejection) {
                        setResult(
                          "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which maybe used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication."
                        );
                        setIsEnd(true);

                        return;
                      }
                      setQuestions((questions) => {
                        return questions.map((q, i) =>
                          i === currentPage - 1 ? { ...q, answer: op.value } : q
                        );
                      });
                    }}
                    className={
                      " m-0 border   shadow-inner  cursor-pointer border-2 hover:bg-primaryLight border-gray-200 sm:border-gray-300 rounded p-2 sm:p-3  " +
                      (questions[currentPage - 1].answer === op.value
                        ? " bg-primaryLight  border-primarySolid sm:border-gray-600 "
                        : "")
                    }
                    key={op.value}
                  >
                    <p
                      className="w-full tablet:w-5/6 mx-auto text-center"
                      dangerouslySetInnerHTML={{
                        __html: op.display
                          .replace("\\", "")
                          .replace("<img", "<Image "),
                      }}
                    />
                    <p className="text-sm sm:text-xl xl:text-2xl">
                      {" "}
                      {op.value}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className={`mt-10  absolute bottom-6 sm:bottom-10 lg:bottom-11  `}
            >
              <button
                disabled={currentPage === 1}
                className="p-3 px-10 lg:px-20  mr-10 lg:mr-20 bg-primarySolid text-white disabled:opacity-50  rounded"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>

              {currentPage < questions.length && (
                <button
                  disabled={questions[currentPage - 1].answer === undefined}
                  className="p-3 px-10 lg:px-20 bg-primarySolid  text-white rounded float-right disabled:opacity-50"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              )}
              {currentPage === questions.length && (
                <button
                  disabled={questions[currentPage - 1].answer === undefined}
                  className="p-3 px-10  sm:px-20 bg-primarySolid text-white rounded float-right disabled:opacity-50"
                  onClick={() => {
                    setResult(
                      "Great news! We have the perfect treatment for your hair loss. Proceed to <a  href='https://www.manual.co' target='_blank' class='underline text-blue-300 hover:text-primaryLight' >www.manual.co</a> , and prepare to say hello to your new hair!"
                    );
                    setIsEnd(true);
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
        {isEnd && (
          <div className="sm:w-3/4">
            <h2 className="mb-5 text-5xl">Result: </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: result,
              }}
            />
          </div>
        )}
      </section>
    </div>
  );
}
