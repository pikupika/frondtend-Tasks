import { useState } from "react"
import axios from 'axios';


function App() {
  const [text, setText] = useState("")
  const [option, setOption] = useState("")
  const [convertedText, setConvertedText] = useState("")

  const captureText = (e) => {
    setText(e.target.value)
  }

  const captureOption = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  const ConvertText = async () => {
    const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
      headers: {
        'x-rapidapi-key': 'fab5257173msh3b97263df892148p1be689jsn41df27311a6c',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        q: `${text}`,
        source: 'en',
        target: `${option}`,
        format: 'text'
      }
    };

    try {
      const response = await axios.request(options);
      setConvertedText(response.data?.data?.translations[Number(0)]?.translatedText)
    } catch (error) {
      console.error(error);
    }
  }

  console.log(text)
  console.log(option)
  return (
    <>
      <div className="h-screen w-full bg-slate-200 flex items-center justify-center flex-col gap-y-16">
        <div className="flex items-center justify-center gap-x-5 pt-20">
          <input type="text" placeholder="Enter your text here"
            className="w-96 h-12 border border-slate-800 rounded-lg px-5 flex items-center justify-center" onChange={captureText} />
          <div>
            <label>Choose Target Language: </label>
            <select name="language" onChange={captureOption}>
              <option value="mr">Marathi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="ko">Korean</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <button type="submit" className="bg-slate-700 text-white px-2 h-10 rounded-lg cursor-pointer hover:text-slate-800 hover:bg-slate-200" onClick={ConvertText}>Convert</button>
        </div>
        <div>
          <p className="bg-slate-400 h-80 w-[800px] text-white pt-5 px-5">
            {convertedText}
          </p>
        </div>
      </div>
    </>
  )
}

export default App