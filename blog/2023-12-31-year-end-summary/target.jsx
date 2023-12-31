import { useState } from "react";

const Target = () => {
  const [clickArr, setClickArr] = useState([false, false, false]);
  return (
    <>
      <button
        onClick={() => {
          if (!clickArr[0]) {
            console.log("顺利通过转正答辩");
            setClickArr((pre) => {
              const newArr = [...pre];
              newArr[0] = true;
              return newArr;
            });
          }
        }}>
        Target 1
      </button>
      <br />
      <button
        onClick={() => {
          if (!clickArr[1]) {
            console.log("精进 React 和 TypeScript(不要成为 any 专家)");
            setClickArr((pre) => {
              const newArr = [...pre];
              newArr[1] = true;
              return newArr;
            });
          }
        }}>
        Target 2
      </button>
      <br />
      <button
        onClick={() => {
          if (!clickArr[2]) {
            console.log("stronger");
            setClickArr((pre) => {
              const newArr = [...pre];
              newArr[2] = true;
              return newArr;
            });
          }
        }}>
        Target 3
      </button>
    </>
  );
};

export default Target;
