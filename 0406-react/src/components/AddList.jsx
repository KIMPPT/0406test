import { useState } from "react";

let AddList=()=>{
    return <div>
            <li> 4월 5일</li>
    <li>
    <input type="checkbox" />
    <span className="on">첫번째 할 일</span>
        <button
        onClick={()=>{}}>x</button>
    </li>
    </div>
}
export default AddList;