const initionState = {
    groups: [
        {groupName: 'районный центр',
            id: '1337',
            tasks: [
                {title: 'сделать', description: 'сделать работу', id: '1'},
                {title: 'выучить', description: 'выучить рефкт', id: '2'},
                {title: 'переделать', description: 'переделать сайт', id: '3'}]
        },
        {groupName: 'дом',
            id: '1488',
            tasks: [
                {title: 'прогулка', description: 'пойти гулять', id: '4'},
                {title: 'сон', description: 'пойти спать', id: '5'},
                {title: 'еда', description: 'пойти есть', id: '6'}]
        }
    ]
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
                        description: action.payload.content,
                        id: idTask,
                        important: action.payload.important
                    });
                    group.tasks = allTasks;
                }
                return null;
            });
            return {
                groups: allGroups
            };

        case 'addGroup':
            const idGroup = (Math.round(Math.random() * 10000)).toString();
            allGroups.push({
                groupName: action.payload.title,
                id: idGroup,
                tasks: []
            });
            return {
                groups: allGroups
            };

        case 'onDeleteGroup':
            allGroups.map((group) => {
                if (group.id === action.payload) {
                    allGroups.splice(allGroups.indexOf(group), 1)
                }
                return null;
            });
            return {
                groups: allGroups
            };

        case 'dropTaskToGroup':
            let allGroupId = [];

            allGroups.map((group) => {
            allGroupId.push(group.id);
                return null
            });

            if (action.payload.mainData[3] === undefined) {
                return {
                    groups: allGroups
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

            if(allGroupId.indexOf(action.payload.eventId) !== -1) {
                    allGroups.map((group) => {
                        if (action.payload.eventId === group.id) {
                            let allTasks = [...group.tasks];
                            allTasks.push({
                                title: action.payload.mainData[1],
                                description: action.payload.mainData[2],
                                id: action.payload.mainData[0]});
                            group.tasks = allTasks
                        }
                        return null;
                    })
            }


            return {
                groups: allGroups
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
                groups: allGroups
            };
        default:
            return state
        }
    }

