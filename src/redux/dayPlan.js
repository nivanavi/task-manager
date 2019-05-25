const initionState = {
    times: [
        {start: '6:00', id: '6', tasks: []},
        {start: '8:00', id: '8', tasks: []},
        {start: '10:00', id: '10', tasks: []},
        {start: '12:00', id: '12', tasks: []},
        {start: '14:00', id: '14', tasks: []},
        {start: '16:00', id: '16', tasks: []},
        {start: '18:00', id: '18', tasks: []},
        {start: '20:00', id: '20', tasks: []},
        {start: '22:00', id: '22', tasks: []},
    ]
};


export default function dayPlan(state = initionState, action) {
    const allGroups = [...state.times];

    switch (action.type) {
        case 'addTaskToDayPlan':
            let allGroupId = [];
            allGroups.map((group) => {
                allGroupId.push(group.id);
                return null;
            });

                if (action.payload.mainData[4] !== undefined) {
                allGroups.find((groups) => {
                    if (groups.id === action.payload.mainData[4]) {
                        groups.tasks.map((task) => {
                            if (task.id === action.payload.mainData[0]) {
                                groups.tasks.splice(groups.tasks.indexOf(task), 1)
                            }
                            return null;
                        })
                    }
                    return null;
                });
            }


                if (action.payload.mainData[3] !== undefined) {
                    allGroups.map((groups) => {
                            groups.tasks.map((task) => {
                                if (task.id === action.payload.mainData[0]) {
                                    groups.tasks.map((task) => {
                                        if (task.id === action.payload.mainData[0]) {
                                            groups.tasks.splice(groups.tasks.indexOf(task), 1)
                                        }
                                        return null;
                                    })
                                }
                                return null;
                            });
                        return null;
                    });
                }

                if (allGroupId.indexOf(action.payload.groupId) !== -1) {
                        allGroups.map((group) => {
                            if (group.id === action.payload.groupId && action.payload.mainData[6] !== true && action.payload.mainData[7] !== true) {
                                group.tasks.splice(action.payload.eventId, 0, {
                                    title: action.payload.mainData[1],
                                    description: action.payload.mainData[2],
                                    id: action.payload.mainData[0],
                                    important: action.payload.mainData[5],
                                    done: action.payload.mainData[6],
                                    later: action.payload.mainData[7]
                                })
                            }
                            return null;
                        })
                }

            return {
                times: allGroups
            };
        case 'onDeleteInPlan':
            allGroups.map((group) => {
                group.tasks.find((task) => {
                    if (task.id === action.payload.taskDeleteId) {
                        let allTasks = [...group.tasks];
                        allTasks.splice(group.tasks.indexOf(task), 1);
                        group.tasks = allTasks;
                    }
                    return null;
                });
                return null;
            });
            return {
                times: allGroups
            };

        case 'editTitleInPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.editId) {
                        task.title = action.payload.newTitle
                    }
                    group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                times: allGroups
            };

        case 'rootDeleteInPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.taskDeleteId) {
                        allTasks.splice(allTasks.indexOf(task), 1)
                    }
                    group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                times: allGroups
            };

        case 'onDoneInPlan':
        case 'rootDonePlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.doneId) {
                        task.done = !task.done;
                    }
                    group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                times: allGroups
            };

        case 'onLaterInPlan':
        case 'rootLaterPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.laterId) {
                        task.later = !task.later;
                    }
                    group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                times: allGroups
            };

        case 'getTasksInPlan':
            console.log(action.payload.all);
            return {
                times: action.payload.all
            };

        default:
            return state
    }
}
