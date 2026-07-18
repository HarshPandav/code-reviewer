import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import './App.css'
import Navbar from './components/Navbar'
import ScoreSquare from './components/ScoreSquare';
import ProgressBar from './components/ProgressBar';

const App = () => {

  const [isNoContent, setIsNoContent] = useState(true)
  const [screen, setScreen] = useState("analyze")

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="left w-1/2 h-full overflow-auto border-r">
          <div className="left-header flex items-center px-3 justify-between h-16">
            <div>
              <select name='languages' className="language-selector">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="csharp">C#</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
                <option value="php">PHP</option>
                <option value="ruby">Ruby</option>
                <option value="swift">Swift</option>
                <option value="kotlin">Kotlin</option>
                <option value="dart">Dart</option>
                <option value="scala">Scala</option>
                <option value="r">R</option>
                <option value="perl">Perl</option>
                <option value="lua">Lua</option>
                <option value="matlab">MATLAB</option>
                <option value="sql">SQL</option>
                <option value="bash">Bash</option>
                <option value="powershell">PowerShell</option>
                <option value="shell">Shell</option>
                <option value="assembly">Assembly</option>
                <option value="objective-c">Objective-C</option>
                <option value="elixir">Elixir</option>
                <option value="haskell">Haskell</option>
                <option value="clojure">Clojure</option>
                <option value="fsharp">F#</option>
                <option value="erlang">Erlang</option>
                <option value="groovy">Groovy</option>
                <option value="julia">Julia</option>
                <option value="nim">Nim</option>
                <option value="ocaml">OCaml</option>
                <option value="fortran">Fortran</option>
                <option value="cobol">COBOL</option>
                <option value="solidity">Solidity</option>
                <option value="yaml">YAML</option>
                <option value="json">JSON</option>
                <option value="xml">XML</option>
                <option value="markdown">Markdown</option>
              </select>
            </div>
            <div>
              <button className="blue-btn">Analyze code</button>
            </div>
          </div>
          <div className="code-editor">
            <Editor height="100%" theme='vs-dark' language="javascript" value="// comment" />
          </div>
          <div className="flex px-2.5 items-center justify-center gap-3 p-3 border-t">
            <button className="right-btn flex-1">
              Fix Bugs
            </button>

            <button className="right-btn flex-1">
              Explain Code
            </button>
          </div>
        </div>
        <div className="right w-1/2 h-full overflow-auto">
          {!isNoContent ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <i className="flex items-center justify-center w-full h-full rounded-full bg-(--blue) text-[55px]">
              </i>

              <p className="text-white text-2xl font-bold mt-3">
                Analyze Code
              </p>

              <p>To see result!</p>
            </div>
          ) : screen === "analyze" ? (
            <div className="w-full h-full">
              <div className="flex items-center gap-3.5 w-full">
                <ScoreSquare score={30} />
                <div className='flex flex-col gap-1'>
                  <h3 className='text-2xl font-bold'>Overall Score</h3>
                  <p className='text-gray-400'>Analysis completed</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 w-full">
                <ProgressBar name={"test"} score={40}/>
                <ProgressBar name={"test"} score={40}/>
              </div>
            </div>
          ) : screen === "explain" ? (
            <div className="w-full h-full">
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default App