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
        if (this.props.deleteGroup !== undefined) {
            this.props.deleteGroup.onDeleteInGroup({
                taskDeleteId: this.props.id
            });
            this.props.deleteGroup.rootEdit.rootDeleteInPlan(
                {
                    taskDeleteId: this.props.id
                }
            )
        }
        if (this.props.deletePlan !== undefined) {
            this.props.deletePlan.onDeleteInPlan({
                taskDeleteId: this.props.id
            });
            this.props.deletePlan.rootEdit.styleInPlan({
                mainData: this.props.dragId.draggableElementId,
                switchValue: false
            })
        }
    };

    done = () => {
        this.props.deleteGroup.onDone({
            doneId: this.props.id
        })
    };

    later = () => {
        this.props.deleteGroup.onLater({
            laterId: this.props.id
        })
    };

    edit = (event) => {
        let newTitle = this.refs.editTitle;
        if (event.which === 13 || event.which === undefined) {
            if (newTitle.value !== '') {
                this.props.deleteGroup.editTitle({
                    editId: this.props.id,
                    newTitle: newTitle.value
                });
                this.props.deleteGroup.rootEdit.editTitleInPlan({
                        editId: this.props.id,
                        newTitle: newTitle.value
                    }
                );
                newTitle.value = '';
                document.getElementById(this.props.id + 'edit').style.display = 'none'
            }
        }
    };

    showEdit = () => {
        let id = this.props.id + 'edit';
        let toggle = document.getElementById(id).style.display;

        if (toggle === 'none' || toggle === '') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
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

        if (this.props.deletePlan !== undefined) {
            classForTask.push('taskPlanMargin')
        }



        let classForLaterDoneTask = [];
        if (this.props.deleteGroup !== undefined) {
            classForTask.push('visible');
            if (this.props.done === true) {
                classForTask.push('doneTrue')
            }
        }

        if (this.props.deleteGroup !== undefined) {
            classForTask.push('visible');
            if (this.props.later === true) {
                classForTask.push('laterTrue')
            }
        }

        return (
            <div id={this.props.id} className={classForTask.join(" ")} draggable='true' onDragStart={this.dragStart} onDrop={this.stopDrop}>
               <div className='oneTaskHeader'>
                   <div className={classForLaterDoneTask.join(" ")}>{this.props.title}
                       <i className='fa fa-check-square done' aria-hidden="true"
                       onClick={this.done}>
                       </i>
                       <i className='fa fa-hourglass-start later' aria-hidden="true"
                          onClick={this.later}>
                       </i>

                   </div> {(() => {
                       if (this.props.deleteGroup !== undefined) {
                           return (<div className='editTitle' id={this.props.id + 'edit'}>
                               <input placeholder='новое название' ref='editTitle' onKeyPress={this.edit}/>
                               <i className="fa fa-plus btn" aria-hidden="true"
                                  onClick={this.edit}>
                               </i>
                           </div>)
                       }
               })()}

                   <div>
                       {(() => {
                           if (this.props.deleteGroup !== undefined) {
                               return (
                                   <i className="fa fa-ellipsis-h edit" aria-hidden="true"
                                      onClick={this.showEdit}>
                                   </i>
                               )
                           }
                       })()}

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
