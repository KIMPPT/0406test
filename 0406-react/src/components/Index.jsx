import { useState } from "react";
import "./Ulstyle.css";
let list2; //추가된 배열을 따로 기억해둘 변수 생성
let date = new Date();
let addToday = (time) => {
  let month = time.getMonth();
  let day = time.getDate();
  return `${month + 1}월 ${day}일`;
};
let id2 = 4;

let Index = () => {
  let [MemoLists, setMemoList] = useState([
    { today: "4월 5일", todo: "첫번째 할 일", checked: true, id: 1 },
    { today: addToday(date), todo: "두번째 할 일", checked: false, id: 2 },
    { today: "4월 7일", todo: "흥부", checked: true, id: 3 },
  ]);
  let inputChange = (e) => {
    setInput(e.target.value);
  };
  let [input, setInput] = useState("");
  let addMemoList = () => {
    let newMemoList = MemoLists.concat({
      id: id2,
      todo: input,
      checked: false,
      today: addToday(date),
    });
    id2++;
    setMemoList(newMemoList);
    list2 = MemoLists; //밑의 deleteMemoList 나 checkMemoList로 인해 지워지기 전 리스트 저장
    setInput("");
  };
  let deleteMemoList = (id) => {
    let newMemoList = MemoLists.filter((s) => s.id !== id);
    setMemoList(newMemoList);
  };
  let checkMemoList = () => {
    let newMemoList = MemoLists.filter((s) => s.today === addToday(date));
    setMemoList(newMemoList);
  };
  return (
    <div>
      <h1>Todo-list</h1>
      <input type="text" onChange={inputChange} value={input} />
      <button onClick={addMemoList}>+</button>
      <hr />
      <button
        onClick={() => {
          setMemoList(list2); //오늘 할 일을 클릭으로 인해 지워진 내용들 복구
        }}
      >
        모든 할 일
      </button>
      <button onClick={checkMemoList}>오늘 할 일</button>
      {MemoLists.map((MemoList, index) => (
        <li key={index} className={MemoList.checked ? "on" : ""}>
          <h3>{MemoList.today}</h3>
          <input
            type="checkbox"
            checked={MemoList.checked}
            readOnly
            onClick={() => {
              let newMemoLists = MemoLists.map((s) => {
                if (MemoList.id !== s.id) {
                  return s;
                } else {
                  return { ...s, checked: !s.checked };
                }
              });
              setMemoList(newMemoLists);
            }}
          />
          {MemoList.todo}
          <button onClick={() => deleteMemoList(MemoList.id)}>X</button>
        </li>
      ))}
    </div>
  );
};
export default Index;
