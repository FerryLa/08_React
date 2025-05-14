import React from "react";

// Todo 입력 필드와 추가 버튼을 포함하는 컴포넌트
const TodoInput = ({ newTask, onInputChange, onKeyDown, onAddTask }) => {
  return (
    <div style={styles.inputContainer}>
      <input
        type='text'
        placeholder='Enter a task'
        value={newTask} // value 처리
        onChange={onInputChange} // 입력 값 변경 핸들러
        onKeyDown={onKeyDown} // 키 입력 핸들러 (Enter 키 감지)
        style={styles.input}
      />
      {/* 클릭 시 onAddTask 함수 실행  */}
      <button onClick={onAddTask} style={styles.addButton}>
        Add Task
      </button>
    </div>
  );
};

// 간단한 스타일 (TodoInput에만 적용되는 스타일)
const styles = {
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
    fontSize: "16px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
  },
};

export default TodoInput;
