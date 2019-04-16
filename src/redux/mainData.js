const initionState = {
    draggableElementId: [],
    filterDone: false,
    filterLater: false
}


export default function mainData(state = initionState, action) {
    switch (action.type) {


        case 'showDone':
            if (state.filterDone === false) {
                return {
                    draggableElementId: state.draggableElementId,
                    filterDone: true,
                    filterLater: state.filterLater
                };
            } else {
                return {
                    draggableElementId: state.draggableElementId,
                    filterDone: false,
                    filterLater: state.filterLater
                };
            }

        case 'showLater':
            if (state.filterLater === false) {
                return {
                    draggableElementId: state.draggableElementId,
                    filterDone: state.filterDone,
                    filterLater: true
                };
            } else {
                return {
                    draggableElementId: state.draggableElementId,
                    filterDone: state.filterDone,
                    filterLater: false
                };
            }

        default:
            return state
    }
}
