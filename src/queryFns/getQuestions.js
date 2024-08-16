export async function getQuestions({pageParam}){
    console.log(pageParam)
    try {
        const jsonData = await fetch(`http://localhost:3000/learn/get-questions?skip=${pageParam[0]}&year=${pageParam[1]}&university=${pageParam[2]}`)
        const data = await jsonData.json()
         return data
    } catch (error) {
        console.log(error)
    }
    
    
}