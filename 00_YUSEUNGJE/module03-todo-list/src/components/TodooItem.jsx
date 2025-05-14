import React from 'react';

// 개별 Todo 항목을 렌더링하는 컴포넌트
const TodoItem = ({ todo, onDelete }) => {
    return (
        <li style={styles.todoItem}>
            <span style={styles.todoText}>{todo.text}</span>
            
            {/* 클릭 시 onDelete 함수에 해당 todo의 id 전달 */}
            <button >
                Delete
            </button>
        </li>
    );
};

// 간단한 스타일 (TodoItem에만 적용되는 스타일)
const styles = {
    todoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        borderBottom: '1px solid #eee',
        backgroundColor: '#f9f9f9',
        borderRadius: '4px',
        marginBottom: '8px',
    },
    todoText: {
        flexGrow: 1,
        marginRight: '10px',
        wordBreak: 'break-word',
    },
    deleteButton: {
        padding: '5px 10px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.2s ease',
    },
};

export default TodoItem;