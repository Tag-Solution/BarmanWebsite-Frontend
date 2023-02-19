import { GET_OWNER, GET_OWNER_SUCCESS, GET_OWNER_ERROR } from "../actions";

const owner_reducer = (state, action) => {
	// GET:
	if (action.type === GET_OWNER) {
		return { ...state, owner_loading: true };
	}
	if (action.type === GET_OWNER_SUCCESS) {
		return { ...state, owner_loading: false, owner: action.payload };
	}
	if (action.type === GET_OWNER_ERROR) {
		return { ...state, owner_loading: false, owner_error: true };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default owner_reducer;
