const initionState = {
    times: [
        {start: 8, id: '8', tasks: []},
        {start: 10, id: '10', tasks: []},
        {start: 12, id: '12', tasks: []},
        {start: 14, id: '14', tasks: []},
        {start: 16, id: '16', tasks: []},
        {start: 18, id: '18', tasks: []},
        {start: 20, id: '20', tasks: []}
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
                allGroups.map((groups) => {
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

                if(allGroupId.indexOf(action.payload.eventId) !== -1) {
                        allGroups.map((group) => {
                            if (action.payload.eventId === group.id) {
                                group.tasks.push({
                                    title: action.payload.mainData[1],
                                    description: action.payload.mainData[2],
                                    id: action.payload.mainData[0]})
                            }
                            return null;
                        })
                }

            return {
                times: allGroups
            };
        case 'onDeleteInPlan':
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
                times: allGroups
            };
        default:
            return state
    }
}
