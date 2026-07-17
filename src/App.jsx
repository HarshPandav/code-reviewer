import React from 'react'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="w-1/2 h-full overflow-auto border-r">
          <div className="left-header flex items-center justify-between h-16 px-5">
            <select className="language-selector">
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
        </div>
        <div className="w-1/2 h-full overflow-auto"></div>
      </div>
    </>
  )
}

export default App