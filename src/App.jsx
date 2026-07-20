import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Editor from "@monaco-editor/react";
import ScoreSquare from "./components/ScoreSquare";
import ProgressBar from "./components/ProgressBar";
import CriticalBox from "./components/CriticalBox";
import WarningCom from "./components/WarningCom";
import SecurityAudit from "./components/SecurityAudit";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaRegFileAlt, FaMagic } from "react-icons/fa";
import { explain, fixCode, main } from './Ai';
import { toast } from 'react-toastify';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {

  const [isNoContent, setIsNoContent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState("");
  const [screen, setScreen] = useState("noscreen")
  const [language, setLanguage] = useState("html")
  const [code, setCode] = useState("")
  const [data, setData] = useState()
  const [explainData, setExplainData] = useState("")

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("codeReviewTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "keyword", foreground: "8B7CFF" },
        { token: "entity.name.function", foreground: "2EE6A6", fontStyle: "bold" },
        { token: "identifier", foreground: "E6E6F0" },
        { token: "string", foreground: "FF9E7A" },
        { token: "number", foreground: "FFB86B" },
        { token: "comment", foreground: "808080", fontStyle: "italic" },
        { token: "type.identifier", foreground: "F6C177" },
        { token: "delimiter", foreground: "CFCFE6" },
      ],
      colors: {
        "editor.background": "#09090F",
        "editor.foreground": "#E6E6F0",
        "editorCursor.foreground": "#8B7CFF",
        "editor.lineHighlightBackground": "#11111A",
        "editor.selectionBackground": "#7C6BFF22",
        "editorLineNumber.foreground": "#4A4A5C",
        "editorLineNumber.activeForeground": "#8B7CFF",
        "editorGutter.background": "#09090F",
        "editorIndentGuide.background": "#1A1A26",
        "minimap.background": "#09090F",
        "editorSuggestWidget.background": "#11111A",
        "editorSuggestWidget.border": "#1F1F2E",
        "editorSuggestWidget.selectedBackground": "#1A1A26",
        "scrollbarSlider.background": "#1A1A26",
        "scrollbarSlider.hoverBackground": "#2A2A3D",
        "editorBracketMatch.background": "#1A1A26",
        "editorBracketMatch.border": "#8B7CFF",
        "editorGroup.border": "#1A1A26",
      },
    });
  }

  const get_response = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to analyze");
      return;
    }

    try {
      setLoading(true);
      setLoadingType("analyze");

      const response = await main(code, language);

      const parsedData = JSON.parse(response);

      setData(parsedData);
      setScreen("analyze");
      setIsNoContent(false);
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingType("");
    }
  };

  const explain_code = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to explain");
      return;
    }

    try {
      setLoading(true);
      setLoadingType("explain");

      const response = await explain(code, language);

      setExplainData(response);
      setScreen("explain");
      setIsNoContent(false);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
      setLoadingType("");
    }
  };

  const fix_code = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code to fix");
      return;
    }

    try {
      setLoading(true);
      setLoadingType("fix");

      const response = await fixCode(code, language);

      setCode(response);
      setScreen("fix");
      setIsNoContent(false);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
      setLoadingType("");
    }
  };

  useEffect(() => {
    console.log(code);
  }, [code])


  return (
    <>
      <Navbar />

      <div className="flex h-[calc(100vh-72px)] bg-slate-950 text-white">
        {/* ================= Left Panel ================= */}
        <div className="flex w-1/2 flex-col border-r border-slate-700">

          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-slate-700 px-6">

            {/* Language Selector */}
            <select
              className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-sm text-white outline-none transition duration-200 hover:border-indigo-500 focus:border-indigo-500"
              onChange={(e) => { setLanguage(e.target.value) }}
              value={language}
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="csharp">C#</option>
              <option value="php">PHP</option>
              <option value="go">Go</option>
              <option value="sql">SQL</option>
            </select>

            {/* Analyze Button */}
            <button
              onClick={get_response}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingType === "analyze" ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                  Analyzing...
                </>
              ) : (
                <>
                  <FaWandMagicSparkles />
                  Analyze Code
                </>
              )}
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            <Editor
              height="100%"
              language={language}
              beforeMount={handleEditorWillMount}
              theme="codeReviewTheme"
              value={code}
              onChange={(code) => { setCode(code) }}
              value={code}
            />
          </div>

          <div className="flex gap-4 border-t border-slate-700 p-4">

            <button
              onClick={fix_code}
              disabled={loading}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-800 font-medium text-white transition-all duration-300 hover:bg-indigo-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingType === "fix" ? (
                <>
                  <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                  Fixing...
                </>
              ) : (
                "Fix Code"
              )}
            </button>

            <button
              onClick={explain_code}
              disabled={loading}
              className="flex h-12 w-full items-center justify-center rounded-lg bg-slate-800 font-medium text-white transition-all duration-300 hover:bg-indigo-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingType === "explain" ? (
                <>
                  <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                  Explaining...
                </>
              ) : (
                "Explain Code"
              )}
            </button>

          </div>
        </div>

        <div className="w-1/2 overflow-y-auto bg-slate-900 p-8">

          {isNoContent ? (
            <div className="flex h-full flex-col items-center justify-center">

              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-indigo-600 shadow-xl shadow-indigo-600/30">
                <FaWandMagicSparkles className="text-6xl text-white" />
              </div>

              <h2 className="mt-8 text-3xl font-bold text-white">
                Analyze Your Code
              </h2>

              <p className="mt-3 text-center text-slate-400">
                Paste your source code and click{" "}
                <span className="font-semibold text-indigo-400">
                  Analyze Code
                </span>{" "}
                to generate an AI-powered review.
              </p>

            </div>
          ) : (
            ""
          )}

          {screen === "analyze" ? (
            <div className="space-y-8">

              {/* Overall Score */}
              <div className="flex items-center gap-6">

                <ScoreSquare score={data?.overallScore} />

                <div>
                  <h2 className="text-4xl font-bold">
                    Overall Score
                  </h2>

                  <p className="mt-1 text-slate-400">
                    Analysis complete based on 42 rules.
                  </p>
                </div>

              </div>

              {/* Progress Bars */}
              <div className="grid grid-cols-2 gap-6">

                {
                  data?.scoreBreakdown.map((item, index) => {
                    return <ProgressBar
                      key={index}
                      name={item.name}
                      score={item.score}
                    />
                  })
                }

              </div>

              <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-6">

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <FaRegFileAlt className="text-3xl text-indigo-400" />

                    <h3 className="text-3xl font-bold text-indigo-300">
                      Summary
                    </h3>

                  </div>

                  <FaMagic className="text-2xl text-slate-400" />

                </div>

                <p className="text-lg leading-8 text-slate-200">
                  {data?.summary}
                </p>

              </div>

              <div className="space-y-5">

                <h2 className="text-2xl font-bold uppercase tracking-wide text-red-400">
                  Critical
                </h2>

                {
                  data?.critical
                    ? data.critical.length > 0
                      ? data.critical.map((item, index) => (
                        <CriticalBox
                          key={index}
                          data={{
                            title: item.title,
                            description: item.description,
                            icon: item.icon,
                          }}
                        />
                      ))
                      : ""
                    : ""
                }

              </div>

              <div className="space-y-5">

                <h2 className="text-2xl font-bold uppercase tracking-wide text-amber-400">
                  Warning
                </h2>

                {/* <WarningCom
                  title="Unused variables (1)"
                  line={3}
                /> */}

                {
                  data?.warnings
                    ? data.warnings.length > 0
                      ? data.warnings.map((item, index) => (
                        <WarningCom
                          key={index}
                          data={{
                            title: item.title,
                            line: item.line,
                          }}
                        />
                      ))
                      : ""
                    : ""
                }

              </div>

              {data && <SecurityAudit data={data} />}
            </div>
          ) : screen === "explain" ? (
            <>
              <MarkdownPreview source={explainData} />
            </>
          ) : (
            ""
          )}

        </div>
      </div>
    </>
  );
}
export default App