import { useState, useEffect } from "react"

function App() {
  const [strLength, setStrLength] = useState(8)
  const [str, setStr] = useState("")

  const genString = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321"
    let temp = ""
    for (let i = 0; i < strLength; i++) {
      temp += chars[Math.floor(Math.random() * chars.length)]
    }
    setStr(temp)
  }

  const getLength = (e) => {
    e.preventDefault()

    if (e.target.value > 30) {
      alert("length should be less than 30")
    } else {
      setStrLength(e.target.value)
    }
  }

  useEffect(() => {
    genString()
  }, [strLength])

  console.log(str)

  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-white text-xl">Generate Random String :</h1>
      <p className="p-5 text-white text-l">Generate a string by filling in a number upto 30</p>
      <div class="bg-white w-100 h-80 rounded-lg">
        <div class="flex p-2 gap-1">
          <div class="circle">
            <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div class="card__content flex justify-start items-center flex-col h-full w-full p-10">
          <input type="number" onChange={getLength} className="border-2 border-sky-500 p-5 cursor-text" placeholder="Enter Number here "/>
          <h2 className="p-10 text-cyan-800">{str}</h2>
        </div>
      </div>
    </div>
  )
}

export default App