import { useReducer } from "react"

export enum CurrentTab {
	HomeTab = "home",
    QuestTab = "quest",
    StoreTab = "store",
    SharesTab = "shares",
    ProfileTab = "profile"
}

export interface SuiAccountState {
	currentTab: CurrentTab,
}

export interface SetCurrentPageAction {
	type: "SET_CURRENT_TAB";
	payload: CurrentTab;
}

export type SuiAccountAction =
	| SetCurrentPageAction 

const initialState: SuiAccountState = {
	currentTab: CurrentTab.QuestTab,
}

export const reducer = (state: SuiAccountState = initialState, action: SuiAccountAction): SuiAccountState => {
	switch (action.type) {
	case "SET_CURRENT_TAB":
		return {
			...state,
			currentTab: action.payload
		}
	default:
		return state
	}
}

export const useSuiAccountReducer = () => {
	return useReducer(reducer, initialState)
}