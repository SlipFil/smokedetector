import React from "react";
import s from "./camlist.module.css";
import Camera from "./Camera/camera";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid / 2 ,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "white",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "white",
  padding: grid,
  width: 250,
  height: 700,
  overflowY: "scroll"
});


class CamList extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      items: this.props.cams
    };
    this.camera =  this.state.items.map(c => (
      <Camera
        pos1={c.globalPosition}
        firstNum={c.firstNum}
        secondNum={c.secondNum}
        position={c.position}
      />
    ));
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState(
      {items}
    );
  }
  
  
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {debugger
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable className={s.camlist} droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Camera
                        pos1={item.globalPosition}
                        firstNum={item.firstNum}
                        secondNum={item.secondNum}
                        position={item.position}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default CamList;
