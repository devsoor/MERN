import React, {useState, useEffect} from 'react';
import {Row, Button, Form, Input} from 'reactstrap';

const ToDo = (props) => {
    const [task, setTask] = useState({
        content: null,
        isChecked: false
    });

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        console.log("useEffect: currTasks = ", taskList.currTasks);
        console.log("useEffect: task.isChecked = ", task.isChecked);
    });

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const handleChecked = (c, e) => {
        Object.values(taskList).forEach(item => {
            if (item["content"] == c)
                item["isChecked"] = e.target.checked;
        })
        setTaskList([...taskList], taskList);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskInfo = {};
        taskInfo["content"] = task.content;
        taskInfo["isChecked"] = task.isChecked ? true : false;
        taskList.push(taskInfo);
        setTaskList(taskList);
        setTask({content: ''});
    }

    const handleDelete = (e) => {
        const result = taskList.filter(t => t.content !== e.target.name)
        setTaskList(result);
    }

    return (
        <div>
            <Row>
                {
                    taskList.map((t,i) =>
                    <Row>
                        {t.isChecked ? <h4 key={i}><s>{t.content}</s></h4> : <p>{t.content}</p>}
                        <Input addon type="checkbox" name="isChecked" checked={task.isChecked} onChange={(e)=>handleChecked(t.content, e)}/>
                        <Button name={t.content} onClick={handleDelete} color="danger">Delete</Button>
                    </Row>
                    )
                }
                <Form onSubmit={handleSubmit}>
                    <Input type="text" name ="content" value={task.content} onChange={handleChange}/>
                    <Input type="submit">Add</Input>
                </Form>
            </Row>
        </div>
    );
}

export default ToDo;