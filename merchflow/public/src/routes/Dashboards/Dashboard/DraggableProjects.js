import React from 'react';
import uid from 'uuid/v4';
import faker from 'faker/locale/en_US';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

import {
    ProjectsList
} from "../../components/ProjectsDashboards/ProjectsList";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

export class DraggableProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    id: uid(),
                    title: "andrew@andrew.cmu.edu",
                    badgeColor: "success",
                    badgeTitle: "shipped",
                    progressValue: "100",
                    completeValue: "1",
                    myTasksValue: "2",
                    daysDueValue: "Pittsburgh, PA"
                }, {
                    id: uid(),
                    title: "carnegie@andrew.cmu.edu",
                    badgeColor: "danger",
                    badgeTitle: "Missing confirmation",
                    progressValue: "50",
                    completeValue: "4",
                    myTasksValue: "3",
                    daysDueValue: "Ellicott City, MD"
                }, {
                    id: uid(),
                    title: "mellon@andrew.cmu.edu",
                    badgeColor: "warning",
                    badgeTitle: "Missing form",
                    progressValue: "0",
                    completeValue: "-",
                    myTasksValue: "-",
                    daysDueValue: "-"
                }, {
                    id: uid(),
                    title: "tartan@andrew.cmu.edu",
                    badgeColor: "warning",
                    badgeTitle: "Missing form",
                    progressValue: "0",
                    completeValue: "-",
                    myTasksValue: "-",
                    daysDueValue: "-"
                }
            ]
        };

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
      
        const projects = reorder(
            this.state.projects,
            result.source.index,
            result.destination.index
        );
      
        this.setState({
            projects,
        });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            className="list-group list-group-flush"
                            ref={provided.innerRef}
                        >
                            {_.map(this.state.projects, ({id, ...project}, index) => (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided, snapshot) => (
                                        <div 
                                            className="list-group-item"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                ...provided.draggableProps.style,
                                                borderLeft: snapshot.isDragging && '1px solid rgba(0, 0, 0, 0.125)',
                                                borderRight: snapshot.isDragging && '1px solid rgba(0, 0, 0, 0.125)'
                                            }}
                                        >
                                            <ProjectsList 
                                                { ...project }
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}