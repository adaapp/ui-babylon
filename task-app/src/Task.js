import React from 'react';

function Task(props){
    return(
        <section className="Task">
            <p>{ props.content ? props.content : "boom" }</p>
        </section>
    )
}

export default Task;