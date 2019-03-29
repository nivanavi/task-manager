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
    switch (action.type) {
        case 'addTaskToGroup':
            return {
                groups: action.payload
            };
        case 'dropTaskToGroup':
            return {
                groups: action.payload
            };
        case 'onDeleteInGroup':
            return {
                groups: action.payload
            };
        default:
            return state
        }
    }

