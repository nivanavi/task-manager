const initionState = {
    times: [
        {start: 8, id: '8', tasks: [{title: 'сделать', description: 'сделать работу', id: '1ggg'}]},
        {start: 10, id: '10', tasks: []},
        {start: 12, id: '12', tasks: []},
        {start: 14, id: '14', tasks: []},
        {start: 16, id: '16', tasks: []},
        {start: 18, id: '18', tasks: []},
        {start: 20, id: '20', tasks: []}
    ]
};


export default function dayPlan(state = initionState, action) {
    switch (action.type) {
        case 'addTaskToDayPlan':
            return {
                times: action.payload
            };
        default:
            return state
    }
}
