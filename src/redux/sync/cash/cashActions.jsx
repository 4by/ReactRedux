import CASH_CONSTS from './cashConsts'

export const addCashAction = payload => ({ type: CASH_CONSTS.ADD_CASH, payload })
export const getCashAction = payload => ({ type: CASH_CONSTS.GET_CASH, payload })