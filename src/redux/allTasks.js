const initionState = {
    groups: [
        {groupName: 'районный центр',
            id: '1337',
            mini: false,
            tasks: [
                {title: 'сделать', description: 'сделать работу', id: '14545', important: false, done: false, later: false, inPlan: false},
                {title: 'выучить', description: 'выучить рефкт', id: '25454', important: false, done: false, later: false, inPlan: false},
                {title: 'переделать', description: 'переделать сайт', id: '345445', important: false, done: false, later: false, inPlan: false}]
        },
        {groupName: 'дом',
            id: '1488',
            mini: false,
            tasks: [
                {title: 'прогулка', description: 'пойти гулять', id: '445423', important: false, done: false, later: false, inPlan: false},
                {title: 'сон', description: 'пойти спать', id: '5452435', important: false, done: false, later: false, inPlan: false},
                {title: 'еда', description: 'пойти есть', id: '64545', important: false, done: false, later: false, inPlan: false}]
        }
    ]
};

export default function allTasks(state = initionState, action) {
    let allGroups = [...state.groups];
    switch (action.type) {
        case 'addTaskToGroup':
            const idTask = new Date().getTime().toString(20) + Math.floor(Math.random() * 1000).toString(20);
            allGroups.find((group) => {
                if (group.id === action.payload.groupId) {
                    let allTasks = [...group.tasks, {
                        title: action.payload.title,
                        description: '',
                        id: idTask,
                        important: action.payload.important
                    }];
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
            const idGroup = new Date().getTime().toString(20) + Math.floor(Math.random() * 1000).toString(20);
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
                allGroups.find((group) => {
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
                                later: action.payload.mainData[7],
                                inPlan: action.payload.mainData[8]
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
                    group.tasks.find((needTask) => {
                        if (needTask.id === action.payload.taskDeleteId) {
                            let allTasks = [...group.tasks];
                            allTasks.splice(group.tasks.indexOf(needTask), 1);
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
        case 'rootDoneGroup':
            allGroups.map((group) => {
                group.tasks.find((needTask) => {
                    if (needTask.id === action.payload.doneId) {
                        needTask.done = !needTask.done;
                        needTask.inPlan = false;
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
        case 'rootLaterGroup':
            allGroups.map((group) => {
                group.tasks.find((needTask) => {
                    if (needTask.id === action.payload.laterId) {
                        needTask.later = !needTask.later;
                        needTask.inPlan = false;
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

        case 'editTitle':
        case 'rootEditTitleGroup':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((needTask) => {
                        if (needTask.id === action.payload.editId) {
                            needTask.title = action.payload.newTitle
                        }
                        group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'styleInPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((needTask) => {
                    if (needTask.id === action.payload.mainData[0] || needTask.id === action.payload.mainData) {
                        needTask.inPlan = action.payload.switchValue
                    }
                    group.tasks = allTasks;
                    return null;
                });
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'sortGroup':
            allGroups.find((group) => {
               if (group.id === action.payload.groupId) {
                   allGroups.splice(allGroups.indexOf(group), 1);
                   allGroups.splice(action.payload.placeId, 0, group);
               }
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'minifyGroup':
            allGroups.find((group) => {
                if (group.id === action.payload) {
                    group.mini = !group.mini;
                }
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        default:
            return state
        }
    }

