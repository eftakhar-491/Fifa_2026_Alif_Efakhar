// import {
//   SandboxCodeEditor,
//   SandboxConsole,
// } from "@/components/ui/shadcn-io/sandbox";

// const AnySandboxCodeEditor = SandboxCodeEditor as unknown as any;

// export default function CodeEditor() {
//   const files = {
//     "index.js": {
//       code: `export default function App() {
//         return <h1>Hello Sandbox!</h1>;
//       }`,
//       active: true,
//     },
//   };

//   return <AnySandboxCodeEditor files={files} template="react" theme="auto" />;
// }
import { useState } from "react";
import { SandboxCodeEditor } from "@/components/ui/shadcn-io/sandbox";

export default function CodeEditor() {
  const [files, setFiles] = useState({
    "index.js": {
      code: `export default function App() {
        return <h1>Hello Sandbox!</h1>;
      }`,
      active: true,
    },
  });

  const handleGetCode = () => {
    console.log("Current code:", files["index.js"].code);
    // Do something with the code
  };

  return (
    <div>
      <SandboxCodeEditor files={files} template="react" theme="auto" />
      <button onClick={handleGetCode}>Get Code</button>
    </div>
  );
}
