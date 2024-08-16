import { useForm } from "react-hook-form";
export default function AddQuestion() {
  const { handleSubmit, register } = useForm();
  async function onSubmit(question) {
    console.log(question)
     fetch('http://localhost:3000/learn/add-question',{
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=> res.json()).then(res => console.log(res)).catch(err => console.log(err))
  }

  const subjects = ["Logic", "Antropology", "History", "Geography"];
  const universities = [
    "ALL",
    "UOG",
    "AAU",
    "BDU",
    "AMU",
    "MTU",
    "AASTU",
    "ASTU",
    "AKU",
  ];

  return (
    <div className="w-full border-2 flex flex-col px-2 rounded-md p-1">
      <h1 className="text-lg font-semibold self-center">Add questions</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-around">
          <div className="w-full min-w-60 flex flex-col items-center pl-6 p-2">
            <p>Subject</p>
            <select
            {...register('subject')}
              name="subject"
              className="w-2/3 md:w-full border-black p-3 rounded-lg border-2"
            >
              {subjects.map((subject) => (
                <option
                  className="bg-white hover:bg-slate-400"
                  value={subject}
                  key={subject}
                >
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full min-w-60 flex flex-col items-center pl-6 p-2">
            <p>universities</p>
            <select
            {...register('university')}
              name="university"
              className="w-2/3 md:w-full p-3 rounded-lg border-black border-2"
            >
              {universities.map((university) => (
                <option
                  className="bg-white hover:bg-slate-400"
                  value={university}
                  key={university}
                >
                  {university}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex min-w-60 flex-col items-center pl-6 p-2">
            <p>Year</p>
            <select
            {...register('year')}
              name="year"
              className="w-2/3 md:w-full p-3 rounded-lg border-black border-2"
            >
              <option
                className="bg-white hover:bg-slate-400"
                value={null}
                key="ALL"
              >
                ALL
              </option>
              {Array.from({ length: 7 }, (_, i) => i + 2010).map((year) => (
                <option
                  className="bg-white hover:bg-slate-400"
                  value={year}
                  key={year}
                >
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label htmlFor="question">Question</label>
        <textarea
        {...register('question')}

          className="addQuestion_input"
          name="question"
          required
          id="question"
          rows={5}
        />

        <label htmlFor="answer">Answer</label>
        <input
        {...register('answer')}
          className="addQuestion_input"
          name="answer"
          required
          type="text"
          id="answer"
        />

        <label htmlFor="explanation">Explanation</label>
        <textarea
        {...register('explanation')}
          className="addQuestion_input"
          name="explanation"
          id="explanation"
          rows={5}
        />

        <label htmlFor="a">A</label>
        <input {...register('a')} className="addQuestion_input" name="a" type="text" id="a" />

        <label htmlFor="b">B</label>
        <input {...register('b')} className="addQuestion_input" name="b" type="text" id="b" />

        <label htmlFor="c">C</label>
        <input {...register('c')} className="addQuestion_input" name="c" type="text" id="c" />

        <label htmlFor="d">D</label>
        <input {...register('d')} className="addQuestion_input" name="d" type="text" id="d" />

        <label htmlFor="e">E</label>
        <input {...register('e')} className="addQuestion_input" name="e" type="text" id="e" />

        <label htmlFor="f">F</label>
        <input {...register('f')} className="addQuestion_input" name="f" type="text" id="f" />

        <button className="p-2 m-3  text-lg  font-semibold">
          Add question
        </button>
      </form>
    </div>
  );
}
