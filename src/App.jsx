// src/App.js
import React from "react";
import { ThreadList } from "./ThreadList";
import "./App.css";

export const App = () => {
  return (
    <>
      <header>
        <h1>掲示板</h1>
        <a href="#" className="create-thread">
          スレッドをたてる
        </a>
      </header>
      <main>
        <ThreadList />
      </main>
    </>
  );
};

export default App;

// src/App.js
// import React from "react";
// import "./App.css";

// export const App = () => {
//   return (
//     <>
//       <header>
//         <h1>掲示板</h1>
//         <a href="#" class="create-thread">
//           スレッドをたてる
//         </a>
//       </header>
//       <main>
//         <section class="threads">
//           <h2>新着スレッド</h2>
//           <ul>
//             <li>推しについて語るスレ</li>
//             <li>今期覇権アニメ</li>
//             <li>TechTrainってどうなの？</li>
//             <li>暇な人雑談しませんか</li>
//             <li>Rustについて語るスレ</li>
//             <li>自宅警備員だけどなんか質問ある？</li>
//             <li>大阪でおすすめのラーメン屋教えて</li>
//           </ul>
//         </section>
//       </main>
//     </>
//   );
// };

// export default App;
