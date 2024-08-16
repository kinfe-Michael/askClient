import React, { useState } from 'react'

function Question({questionData}) {
    const {answer,choices,subject,year,university,question,explanation} = questionData
    const [isAnswerVisible,setIsAnswerVisible] = useState(false)
  return (
    <div className='w-full   p-2 flex flex-col  my-2'>
    <hr className='w-full h-1 mt-2 bg-gray-100' />
   
    <p className='font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam cumque omnis unde dolorem id!</p>
    <p className='text-xs self-end mt-3 mx-4 text-gray-500 capitalize '>{subject}  {year} {university}</p>
    <hr className='w-full mt-2 bg-gray-900' />
     <div className='flex flex-col gap-1 my-2'>
         { choices[0] &&
            choices.map((choice,i) => {
                return <div key={i} className='py-1 px-4 border flex justify-between border-gray-300 rounded-md'>
                     <p className='text-sm text-wrap'>{choice}</p>
                     <p className='font-light'>20%</p>
                      </div>
            })
         }
     </div>
    
    { answer !== '' && <button onClick={() => setIsAnswerVisible(pre => !pre)} className='max-w-max self-end px-2 py-1 m-2 border border-gray-300 rounded-md'>{isAnswerVisible ? 'Hide Answer' : 'Show Answer'}</button>}
    { isAnswerVisible && <div className="">
        <p>Answer: {answer}</p>
        <p>{explanation}</p>
    </div>}
    <hr className='w-full h-1 mt-2 bg-gray-100' />
    </div>
  )
}

export default Question