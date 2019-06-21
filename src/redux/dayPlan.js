const initionState = {
    times: []
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
                                groups.tasks.splice(groups.tasks.indexOf(task), 1);
                                fetch(`/planOnDay/dropTask/${groups.id}`, {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json, text/plain, */*',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(groups.tasks)
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
                });
            }


                if (action.payload.mainData[3] !== undefined) {
                    allGroups.map((groups) => {
                            groups.tasks.map((task) => {
                                if (task.id === action.payload.mainData[0]) {
                                    groups.tasks.map((task) => {
                                        if (task.id === action.payload.mainData[0]) {
                                            groups.tasks.splice(groups.tasks.indexOf(task), 1);
                                            fetch(`/planOnDay/dropTask/${groups.id}`, {
                                                method: 'POST',
                                                headers: {
                                                    'Accept': 'application/json, text/plain, */*',
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(groups.tasks)
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
                                });
                                fetch(`/planOnDay/dropTask/${group.id}`, {
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
                        fetch(`/planOnDay/dropTask/${group.id}`, {
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

        case 'serverEditTitleInPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.editId) {
                        fetch(`/planOnDay/dropTask/${group.id}`, {
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
                times: allGroups
            };

        case 'rootDeleteInPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.map((task) => {
                    if (task.id === action.payload.taskDeleteId) {
                        allTasks.splice(allTasks.indexOf(task), 1);
                        fetch(`/planOnDay/dropTask/${group.id}`, {
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
                times: allGroups
            };

        case 'onDoneInPlan':
        case 'rootDonePlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.doneId) {
                        task.done = !task.done;
                        fetch(`/planOnDay/dropTask/${group.id}`, {
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
                times: allGroups
            };

        case 'onLaterInPlan':
        case 'rootLaterPlan':
            allGroups.map((group) => {
                let allTasks = [...group.tasks];
                allTasks.find((task) => {
                    if (task.id === action.payload.laterId) {
                        task.later = !task.later;
                        fetch(`/planOnDay/dropTask/${group.id}`, {
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
                times: allGroups
            };

        case 'getPlanGroup':
            return {
                times: [...action.payload.all]
            };

        default:
            return state
    }
}
