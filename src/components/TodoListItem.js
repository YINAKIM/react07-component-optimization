import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox',{checked})}
                 onClick={()=> onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

// React.memo를 사용해서 컴포넌트를 감싸서 export하는 것 만으로도 컴포넌트 최적화 가능 ..하다는데 나는 왜 React.memo를 사용하면 더 느려지는거지?
// Rendered duration도 더 늘어나고, update되지 않는 key를 가진 TodoListItem들도 리렌더링되는중..
// 값이 바뀌지 않은 컴포넌트는 리렌더링되지 않도록
 export default React.memo(TodoListItem);
// export default TodoListItem;
