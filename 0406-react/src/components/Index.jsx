import Input from "./Input";
import Checkbutton from "./Checkbutton";
import AddList from "./AddList";
import './Ulstyle.css';
let Index=()=>{
    return <div>
        <h1>Todo-list</h1>
    <Input/>
<hr/>
    <Checkbutton/>
<ul >
    <AddList/>
</ul>
    </div>
}
export default Index;