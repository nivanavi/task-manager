const initionState = {
    groups: []
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
                        id: idTask,
                        important: action.payload.important,
                        done: false,
                        later: false,
                        inPlan: false

                    }];
                        fetch(`/groups/addTaskToGroup/${action.payload.groupId}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(allTasks)
                        })
                            .catch((err) => {
                                if (err) {
                                    console.log(err)
                                }
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
            const idGroup = new Date().getTime().toString(20) + Math.floor(Math.random() * 1000).toString(20);
            allGroups.push({
                groupName: action.payload.title,
                id: idGroup,
                mini: false,
                tasks: []
            });
            fetch('/groups', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            groupName: action.payload.title,
                            id: idGroup,
                            mini: false,
                            tasks: []
                        })
                    })
                .catch((err) => {
                    if (err) {
                        console.log(err)
                    }
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
                    fetch(`/groups/${action.payload}`, {
                        method: 'DELETE'
                    })
                        .catch((err) => {
                            if (err) {
                                console.log(err)
                            }
                        });
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
                                group.tasks.splice(group.tasks.indexOf(task), 1);
                                fetch(`/groups/sortTask/${action.payload.mainData[3]}`, {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json, text/plain, */*',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(group.tasks)
                                })
                                    .catch((err) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                    });
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
                            fetch(`/groups/sortTask/${group.id}`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json, text/plain, */*',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(allTasks)
                            })
                                .catch((err) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                });
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
                            fetch(`/groups/deleteTask/${group.id}`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json, text/plain, */*',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(allTasks)
                            })
                                .catch((err) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                });
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
                        fetch(`/groups/doneOrLater/${group.id}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(group.tasks)
                        })
                            .catch((err) => {
                                if (err) {
                                    console.log(err)
                                }
                            });
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
                        fetch(`/groups/doneOrLater/${group.id}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(group.tasks)
                        })
                            .catch((err) => {
                                if (err) {
                                    console.log(err)
                                }
                            });
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

        case 'serverEditTitle':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((needTask) => {
                    if (needTask.id === action.payload.editId) {
                        fetch(`/groups/editTitle/${group.id}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(group.tasks)
                        })
                            .catch((err) => {
                                if (err) {
                                    console.log(err)
                                }
                            });
                    }
                    return null;
                });
                return null;
            });
            return {
                groups: state.groups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'styleInPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((needTask) => {
                    if (needTask.id === action.payload.mainData[0] || needTask.id === action.payload.mainData) {
                        needTask.inPlan = action.payload.switchValue;
                        fetch(`/groups/sortTask/${group.id}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(allTasks)
                        })
                            .catch((err) => {
                                if (err) {
                                    console.log(err)
                                }
                            });
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
                    fetch(`/groups/groupMini/${[action.payload, group.mini]}`, {
                        method: 'POST'
                    })
                        .catch((err) => {
                            if (err) {
                                console.log(err)
                            }
                        });
                }
                return null;
            });
            return {
                groups: allGroups,
                filterDone: state.filterDone,
                filterLater: state.filterLater
            };

        case 'getGroups':
            return {
                groups: action.payload.all
            };



        default:
            return state
        }
    }

