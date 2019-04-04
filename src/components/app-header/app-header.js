import React from 'react';

const AppHeader = ({toDo, done}) => {
    return (
        <header className="app-header text-center">
            <h1 className="">My Todo List</h1>
            <div className="">{ `${toDo} more to do, ${done} done` }</div>
        </header>
    );
};

export default AppHeader;