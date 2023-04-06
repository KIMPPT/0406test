import { useState } from "react";
import "./todo.css";

let date = new Date();
let id = 3;
let list2=[
    { id: 1, date: "4월 5일", todo: "첫번째 할 일", checked: false },
    { id: 2, date: "4월 6일", todo: "두번째 할 일", checked: true },
  ]
let newlist2=list2;
let newlist3=list2;
let newlist4=list2;
let todaylist = () => {
  let month = date.getMonth();
  let day = date.getDate();
  return `${month + 1}월 ${day}일`;
};
let Todo = () => {
  let [todolists, setTodolist] = useState(list2);
  let [inputlist, setInputlist] = useState("");
  console.log("todolists",todolists); // State로 받은 todolists 값
  console.log("list2",list2); //변하지 않는 초기 리스크 값
  console.log("newlist3",newlist3); //check변경 이벤트 로 생성된 list 값
  console.log("newlist2",newlist2); //추가이벤트로 생성된 list값
  console.log("newlist4",newlist4); //오늘 할 일 버튼 이벤트로 생성된 list 값
  return (
    <div className="todolist">
      <h1>Todo-List</h1>
      
      <input
        type="text"
        onChange={(e) => {
          setInputlist(e.target.value);
        }}
        value={inputlist}
        //onChange함수로 인해 inputlist에 텍스트로 입력한 값이 들어가는 것을 확인
      />
      <button
        onClick={() => {
          let newlists = todolists.concat({
            id: id,
            date: todaylist(),
            todo: inputlist,
            checked: false,
          });
          id++;
          newlist3 = newlists;
          setTodolist(newlists);
          setInputlist("");
          // todolist가 아닌 newlists를 쓰지 않은 이유는 직접 돌려보면
          // keeplist에는 secTodolist가 적용되지 않은 이전 값이 저장된다.
        }}
      >
        +
      </button>
      <hr />
      <button
        onClick={() => {
            (todolists==list2)?setTodolist(list2):(
                ((todolists== newlist2)?setTodolist(newlist2):setTodolist(newlist3))
            )
            //조금 까다로운 조건부[할 일 추가하냐 안하냐 + 할일 추가 전에 체크의 유무 확인]
        }}
      >
        모든 할 일
      </button>
      <button
        onClick={() => {
          let newlist = todolists.filter((list) => list.date === todaylist());
          setTodolist(newlist);
          newlist4=newlist;
        }}
      >
        오늘 할 일
      </button>
      {todolists.map((todolist, index) => (
        //className 안에 삼항연산자를 이용해 checked 값에 따라 스타일 지정
        <li key={index} className={todolist.checked ? "on" : "off"}>
          <h3>{todolist.date}</h3>
          <input
            type="checkbox"
            //checked 값은 return 이전 todolist의 checked 값을 따른다
            checked={todolist.checked}
            readOnly
            onClick={() => {
              //새로운 배열을 만든다. 조건은 체크한 객체의 checked 값 변경(T/F)
              let newlist = todolists.map((s) => {
                //체크한 객체가 맞는지 확인하는 구간. 객체와 다르면 그대로 값 return
                if (todolist.id !== s.id) return s;
                //객체id와 같다면 checked 값 반전
                else return { ...s, checked: !s.checked };
              });
              //위에서 바꾸어서 만든 새 배열을 기존 배열에 덮음
              setTodolist(newlist);
              
              newlist2=newlist;
              
            }}
          />
          {todolist.todo}
          <button
            onClick={() => {
              let newList = todolists.filter((list) => list.id !== todolist.id);
              setTodolist(newList);
              
            }}
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};
export default Todo;
