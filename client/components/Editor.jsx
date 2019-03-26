import React from "react";
import { DragDropContext, Droppable, Draggable, resetServerContext } from "react-beautiful-dnd";



const data = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Content1' },
        'task-2': { id: 'task-2', content: 'Content2' },
        'task-3': { id: 'task-3', content: 'Content3' },
        'task-4': { id: 'task-4', content: 'Content4' },
        'task-5': { id: 'task-5', content: 'Content5' }
    },
    columns: {
        'col-1': {
            id: 'col-1',
            title: 'title1',
            taskIds: ['task-1','task-2']
        },
        'col-2': {
            id: 'col-2',
            title: 'title2',
            taskIds: ['task-3']
        },
        'col-3': {
            id: 'col-3',
            title: 'title3',
            taskIds: ['task-4','task-5']
        }
    },
    columnOrder: ['col-1','col-2','col-3']
};

class Task extends React.Component {
    render() {
        const isDragDisabled = this.props.task.id ==='task-1';
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
                isDragDisabled={isDragDisabled}
            >
                {(provided, snapshot) => (
                    <div className={snapshot.isDragging?'text-success':isDragDisabled?'text-black':'text-danger'}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {this.props.task.content}
                        <span className="bg-primary ml-auto" {...provided.dragHandleProps}>h</span>
                    </div>
                )}
            </Draggable>
        );
    }
}

class Column extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.column.title}</h3>
                <Droppable
                    droppableId={this.props.column.id}
                    type={this.props.column.id === 'col-3' ? 'done' : 'active' }
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <div className={snapshot.isDraggingOver?'bg-info':''}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.tasks.map((task,index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        );
    }
}

export default class Editor extends React.Component {
    state = data;

    onDragStart = start => {
        const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
        this.setState({
            homeIndex
        });
    };

    onDragUpdate = result => {
        console.log('dragupdate');
    };

    onDragEnd = result => {

        this.setState({
            homeIndex: null
        });

        const { destination, source, draggableId } = result;

        if ( !destination ) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if ( start === finish ) {

            const newTaskIds = Array.from(start.taskIds);

            newTaskIds.splice(source.index,1);
            newTaskIds.splice(destination.index,0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };

            this.setState(newState);

            return;

        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index,1);

        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        };

        this.setState(newState);

    };
    render() {
        resetServerContext();
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map((columnId, index) => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                    const isDropDisabled = index < this.state.homeIndex;
                    return (
                        <Column key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled} />
                    );
                })}
            </DragDropContext>

        )
    }
}

// Left Off At Lesson 10 -> https://egghead.io/lessons/react-conditionally-allow-movement-using-react-beautiful-dnd-draggable-and-droppable-props
