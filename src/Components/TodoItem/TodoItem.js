import React from "react";
import "./TodoItem.css";


const TodoItem = ({items, deletItems}) => {
    const length = items.length;
    const ListItems = length ? (
        items.map((item) => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deletItems(item.id)}>&times;</span>
                </div>
            )
        }) 
    ): (
        <p>No Items to show</p>
    )
    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItem