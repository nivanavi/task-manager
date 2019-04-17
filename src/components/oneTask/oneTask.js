import React, { Component } from 'react';
import './oneTask.css';

class OneTask extends Component {

    dragStart = (event) => {
        document.getElementById(event.target.id).style.opacity = '1';
        const dragId = this.props.dragId.draggableElementId;
        dragId.splice(0, 9);
        dragId.push(event.target.id,
            this.props.title,
            this.props.description,
            this.props.groupId,
            this.props.idPlanGroup,
            this.props.important,
            this.props.done,
            this.props.later,
            this.props.inPlan
            );
        console.log(dragId)
    };

    stopDrop = (event) => {
        event.stopPropagation();
    };

    delete = () => {
        const id = this.props.id;
        if (this.props.deleteGroup !== undefined) {
            this.props.deleteGroup.onDeleteInGroup({
                taskDeleteId: id
            });
            this.props.deleteGroup.rootEdit.rootDeleteInPlan(
                {
                    taskDeleteId: id
                }
            )
        }
        if (this.props.deletePlan !== undefined) {
            this.props.deletePlan.onDeleteInPlan({
                taskDeleteId: id
            });
            this.props.deletePlan.rootEdit.styleInPlan({
                mainData: id,
                switchValue: false
            })
        }
    };

    done = () => {
        const id = this.props.id;
        if (this.props.deletePlan !== undefined) {
            this.props.deletePlan.onDoneInPlan({
                doneId: id
            });
            this.props.deletePlan.rootEdit.rootDoneGroup({
                doneId: id
            });
            this.props.deletePlan.onDeleteInPlan({
                taskDeleteId: id
            });
        } else {
            this.props.deleteGroup.onDone({
                doneId: id
            });
            this.props.deleteGroup.rootEdit.rootDonePlan({
                doneId: id
            })
        }
    };

    later = () => {
        const id = this.props.id;
        if (this.props.deletePlan !== undefined) {
            this.props.deletePlan.onLaterInPlan({
                laterId: id
            });
            this.props.deletePlan.rootEdit.rootLaterGroup({
                laterId: id
            });
            this.props.deletePlan.onDeleteInPlan({
                taskDeleteId: id
            });
        } else {
            this.props.deleteGroup.onLater({
                laterId: id
            });
            this.props.deleteGroup.rootEdit.rootLaterPlan({
                laterId: id
            })
        }
    };

    edit = () => {
        let newTitle = this.refs.title;

        if (this.props.deletePlan !== undefined) {
            this.props.deletePlan.editTitleInPlan({
                    editId: this.props.id,
                    newTitle: newTitle.value
                }
            );
            this.props.deletePlan.rootEdit.rootEditTitleGroup({
                    editId: this.props.id,
                    newTitle: newTitle.value
                }
            );
        } else {
            this.props.deleteGroup.editTitle({
                editId: this.props.id,
                newTitle: newTitle.value
            });
            this.props.deleteGroup.rootEdit.editTitleInPlan({
                    editId: this.props.id,
                    newTitle: newTitle.value
                }
            );
        }
    };

    render() {
        let classForTask = ['oneTask'];
        if (this.props.important === true) {
            classForTask.push('important')
        }

        if (this.props.inPlan === true) {
            classForTask.push('inPlan')
        }


        let classForLaterDoneTask = [];
            if (this.props.done === true) {
                classForTask.push('doneTrue')
            }

            if (this.props.later === true) {
                classForTask.push('laterTrue')
            }

        return (
            <div id={this.props.id} className={classForTask.join(" ")} draggable='true' onDragStart={this.dragStart} onDrop={this.stopDrop}>
               <div className='oneTaskHeader'>
                   <div className={classForLaterDoneTask.join(" ")}>
                       <input onChange={this.edit} ref='title' value={this.props.title}  id={this.props.id + 'title'}/>
                       <i className='fa fa-check-square done' aria-hidden="true"
                       onClick={this.done}>
                       </i>
                       <i className='fa fa-hourglass-start later' aria-hidden="true"
                          onClick={this.later}>
                       </i>

                   </div>

                   <div>
                       <i className="fa fa-times deleteTask" aria-hidden="true"
                           onClick={this.delete}>
                   </i>
                   </div>

               </div>
            </div>
        )
    }
}

export default OneTask;
