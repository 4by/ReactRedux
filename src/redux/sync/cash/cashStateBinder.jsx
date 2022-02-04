import { addCashAction, getCashAction } from "./cashActions";

export const cashPropsBinder = (state, ownProps) => ({
    cash: ownProps.yes
        ? state.cashState.cash + ' | компонент вызван c пропсом "yes"'
        : state.cashState.cash + ' | компонент вызван без проса "yes"',
})

export const cashFunsBinder = dispatch => ({
    addCash: number => dispatch(addCashAction(number)),
    getCash: number => dispatch(getCashAction(number)),
})
