import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React, {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../../components/learnPageComponents/question";
import { useInView } from 'react-intersection-observer'
function Questions() {
 
  const subject = useLoaderData().subject
  console.log(subject)
  const [yearValue, setYearValue] = useState('2016');
  const [universityValue, setUniversityValue] = useState("ALL");
  
const [queryKey,setQueryKey] = useState('ALL-2016')

  const universities = ['ALL',"UOG", "AAU", "BDU", "AMU", "MTU", "AASTU"];


  async function getQuestions({pageParam}){
   
    try {
        const jsonData = await fetch(`http://localhost:3000/learn/get-questions?skip=${pageParam}&year=${yearValue}&university=${universityValue}&subject=${subject}`)
        const data = await jsonData.json()
         return data
    } catch (error) {
        console.log(error)
    }
    
    
}



  const results = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: getQuestions,
    initialPageParam: 0,
    getNextPageParam: (lastPage, page) => lastPage.nextCursor,
    staleTime: Infinity,
  });
  const {ref} = useInView({
    threshold: 0.2,
    onChange: (inView)=> inView && results.hasNextPage && results.fetchNextPage()
  })

console.log(results.hasNextPage)
  const allData = [];
  if (results.data) {
    results.data.pages.map((page) => {
      return page.questions.map((data) => {
        allData.push(data);
        return data;
      });
    });
  }

console.log(allData)
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center justify-center">
        <div className="w-2/5  flex flex-col  items-center  p-2">
          <p className="font-semibold text-sm capitalize">universities</p>
          <select
            onChange={(e) => {
              setUniversityValue(e.target.value);
              setQueryKey(pre => {
                const keys = pre.split('-')
                const newKey = e.target.value +'-'+ keys[1]
                return newKey
              })
        
            }}
        
            name="university"
            className="w-full p-1 rounded-lg border-gray-400 border"
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
        <div className="w-2/5 flex   flex-col items-center p-2">
          <p className="font-semibold text-sm capitalize">Year</p>
          <select
            onChange={(e) => {
              setYearValue(e.target.value);
              console.log(yearValue);
              setQueryKey(pre => {
                const keys = pre.split('-')
                const newKey = keys[0]  +'-'+ e.target.value
                return newKey
              })
        
            }}
        
            name="year"
            className="w-full  p-1 rounded-lg border-gray-400 border"
          >
            {Array.from({ length: 6 }, (_, i) => 2016 - i).map((year) => (
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
     <hr className="w-full h-1 bg-gray-100" />
     <div>
      {
        allData && allData.map(data => <Question key={data._id} questionData={data} />)
      }
     </div>
    
      <div
      ref={ref}
       
        className="p-2 "
      >
        {results.hasNextPage ? 'loadingggg' : ''}
      </div>
    </div>
  );
}

export default Questions;
