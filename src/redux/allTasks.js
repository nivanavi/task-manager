const initionState = {
    groups: [
        {groupName: 'районный центр',
            id: '1337',
            tasks: [
                {title: 'сделать', description: 'сделать работу', id: '14545', important: false, done: true, later: false},
                {title: 'выучить', description: 'выучить рефкт', id: '25454', important: false, done: false, later: true},
                {title: 'переделать', description: 'переделать сайт', id: '345445', important: false, done: false, later: false}]
        },
        {groupName: 'дом',
            id: '1488',
            tasks: [
                {title: 'прогулка', description: 'пойти гулять', id: '445423', important: false, done: false, later: false},
                {title: 'сон', description: 'пойти спать', id: '5452435', important: false, done: false, later: false},
                {title: 'еда', description: 'пойти есть', id: '64545', important: false, done: false, later: false}]
        }
    ],
    filterDone: false,
    filterLater: false
};

export default function allTasks(state = initionState, action) {
    let allGroups = [...state.groups];
    switch (action.type) {
        case 'addTaskToGroup':
            const idTask = (Math.round(Math.random() * 10000)).toString();
            allGroups.map((group) => {
                if (group.id === action.payload.groupId) {
                    let allTasks = [...group.tasks];
                    allTasks.push({
                        title: action.payload.title,
                        description: '',
                        id: idTask,
                        important: action.payload.important
                    });
                    group.tasks = allTasks;
                }
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'addGroup':
            const idGroup = (Math.round(Math.random() * 10000)).toString();
            allGroups.push({
                groupName: action.payload.title,
                id: idGroup,
                tasks: []
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'onDeleteGroup':
            allGroups.map((group) => {
                if (group.id === action.payload) {
                    allGroups.splice(allGroups.indexOf(group), 1)
                }
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'dropTaskToGroup':
            let allGroupId = [];

            allGroups.map((group) => {
            allGroupId.push(group.id);
                return null
            });

            if (action.payload.mainData[3] === undefined) {
                return {
                    groups: allGroups,
                    filterDone: state.filterDone,
                    filterLater: state.filterLater
                };
            }

            if (action.payload.mainData[4] === undefined) {
                allGroups.map((group) => {
                    if (group.id === action.payload.mainData[3]) {
                        group.tasks.map((task) => {
                            if (task.id === action.payload.mainData[0]) {
                                group.tasks.splice(group.tasks.indexOf(task), 1)
                            }
                            return null;
                        })
                    }
                    return null;
                })
            }

            if(allGroupId.indexOf(action.payload.groupId) !== -1) {
                    allGroups.map((group) => {
                        if (action.payload.groupId === group.id) {
                            let allTasks = [...group.tasks];
                            allTasks.splice(action.payload.eventId, 0, {
                                title: action.payload.mainData[1],
                                description: action.payload.mainData[2],
                                id: action.payload.mainData[0],
                                important: action.payload.mainData[5],
                                done: action.payload.mainData[6],
                                later: action.payload.mainData[7]
                                }
                                );
                            group.tasks = allTasks
                        }
                        return null;
                    })
            }


            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'onDeleteInGroup':
                allGroups.map((group) => {
                group.tasks.map((task) => {
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
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'onDone':
            allGroups.map((group) => {
                group.tasks.map((task) => {
                    if (task.id === action.payload.doneId) {
                        task.done = !task.done;
                    }
                    return null;
                });
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'onLater':
            allGroups.map((group) => {
                group.tasks.map((task) => {
                    if (task.id === action.payload.laterId) {
                        task.later = !task.later;
                    }
                    return null;
                });
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };
        case 'showDone':
            if (state.filterDone === false) {
                allGroups.map((group) => {
                    group.tasks.map((task) => {
                        if (task.done === false) {
                            document.getElementById(task.id).style.display = 'none';
                        }
                        return null;
                    });
                    return null;
                });
                return {
                    groups: allGroups,
                    filterDone: true
                };
            } else {
                allGroups.map((group) => {
                    group.tasks.map((task) => {
                            document.getElementById(task.id).style.display = 'block';
                        return null;
                    });
                    return null;
                });
                return {
                    groups: allGroups,
                    filterDone: false
                };
            }

        case 'showLater':
            allGroups.map((group) => {
                group.tasks.map((task) => {
                    if (task.id === action.payload.laterId) {
                        task.later = !task.later;
                    }
                    return null;
                });
                return null;
            });
            return {
                groups: allGroups
            };

        case 'editTitle':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.map((task) => {
                    if (task.id === action.payload.editId) {
                        task.title = action.payload.newTitle
                    }
                    group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                groups: allGroups
            };

        default:
            return state
        }
    }

