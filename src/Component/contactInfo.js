import React, { useEffect, useState } from "react";
import './contact.css'
function Todolist(params) {
    let local = () => {
        let list = localStorage.getItem("todo");
        if (list) return (JSON.parse(list));
        else return [];
    }
    let [icon, setIcon] = useState(true)
    let [todoItem, setTodoItem] = useState(local());
    let [item, setItem] = useState("");


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todoItem));
    }, [todoItem])
    function updateItem() {
        const obj = {
            item: item,
            currTime: Date.now(),
        };
        if (item !== "") {
            setTodoItem([...todoItem, obj])
        }
        // console.log(todoItem);
        setItem("");
        setIcon(true);

    }
    let deleteItem = (x) => {
        let updatedItem = todoItem.filter((curELement) => {
            return (curELement.currTime !== x)
        })
        setTodoItem(updatedItem);
    }

    let clearAll = () => {
        setTodoItem([])
    }
    let updateTodo = (ind) => {
        let arr = todoItem.filter((elem, indexOfUT) => {
            return (elem.currTime === ind ? elem : null)
        })
        setItem(arr[0].item);
        setIcon(false);
    }

    return (
        <div className=" w-full h-full my-1.5">
            <div className="p-36 border-2 border-black  text-center">
                <h1>Todo-List</h1>
                <div className="relative">
                    <input type="text" placeholder="✍ Add Item" value={item} onChange={(event) => {
                        setItem(event.target.value);
                    }} />
                    {/* <button onClick={updateItem}>Add</button> */}
                    {icon ?
                        (<i className="fa-solid fa-plus cursor-pointer  text-left" onClick={updateItem}></i>) :
                        (<i className="fa-solid fa-pen-to-square cursor-pointer" onClick={updateItem}></i>)}
                </div>
                {todoItem && (todoItem.map((curElem, index) => {
                    return (
                        <div key={index} >
                            <h3 className="inline-block  m-1 pl-1 pr-1 border-gray-400 rounded-md border-2" >{curElem.item}</h3>
                            <i className="fa-solid fa-pen-to-square cursor-pointer mr-1 " onClick={() => {
                                updateTodo(curElem.currTime);
                                deleteItem(curElem.currTime);
                            }}></i>
                            <i className="fa-solid fa-trash cursor-pointer mr-1 " onClick={() => {
                                deleteItem(curElem.currTime);
                            }}></i>
                            {/* <button onClick={() => deleteItem(curElem.currTime)}>Del</button> */}
                        </div>
                    )
                }))}


                <div>
                    <button onClick={clearAll}>Reset All</button>
                </div>
            </div>
        </div>
    )
}
export default Todolist