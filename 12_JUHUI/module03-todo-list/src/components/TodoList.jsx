"use client"; // 클라이언트 컴포넌트 명시

import React, { useState } from 'react';
import TodoInput from './TodoInput'; // 분리된 TodoInput 컴포넌트 임포트
import TodoItem from './TodooItem';   // 분리된 TodoItem 컴포넌트 임포트

// Todo 리스트 전체를 관리하고 렌더링하는 컨테이너 컴포넌트
const TodoList = () => {
    // 할 일 목록 상태 관리 (객체 형태로 id와 text 포함)
    //const [todos, setTodos]
    const [todos, setTodos] = useState([]); 

    // 입력 필드의 값 상태 관리
    //const [newTask, setNewTask] 
    const [newTask, setNewTask] = useState('');

    // 할 일 추가 함수
    const addTask = () => {
        // trim() 메서드는 문자열 양 끝의 공백을 제거한 새로운 문자열을 반환
        if (newTask.trim()) {
            const newTodo = {
                id: Date.now(), // 임시 ID
                text: newTask.trim(),
            };
             // 새 배열로 상태 업데이트
            setTodos([...todos, newTodo]);
             // 입력 필드 초기화
            setNewTask('');
        }
    };

    // 할 일 삭제 함수
    const deleteTask = (id) => {
        // 필터링하여 새 배열로 상태 업데이트
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // 입력 필드 변경 핸들러
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    // 입력 필드 키 입력 핸들러
    const handleInputKeyPress = (e) => {
        //if (    코드 작성  ) { // e에서 enter키 눌렸는지확인
        //    addTask();   
        //}

        if(e.key === 'Enter') {// e에서 enter키 눌렸는지확인
            addTask();
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>TODO App</h1>

            {/* TodoInput 컴포넌트에 필요한 상태와 핸들러 전달 */}
            <TodoInput
                // newTask 속성 추가
                newTask={newTask}

                // change 이벤트
                onInputChange={handleInputChange}

                // 키눌림 이벤트
                onKeyDown={handleInputKeyPress}

                // task 추가
                onAddTask={addTask}
            />

            <ul style={styles.todoList}>
                {/* todos 배열을 순회하며 각 항목에 대해 TodoItem 컴포넌트 렌더링 */}
                {todos.map(todo => (
                    // TodoItem 컴포넌트에 개별 todo 데이터와 삭제 핸들러 전달
                    <TodoItem
                        key={todo.id} // key prop 필수!
                        todo={todo}
                        onDelete={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

// TodoList 컨테이너에만 적용되는 스타일
const styles = {
    container: {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'sans-serif',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
    },
    todoList: {
        listStyle: 'none',
        padding: 0,
    },
};

export default TodoList;