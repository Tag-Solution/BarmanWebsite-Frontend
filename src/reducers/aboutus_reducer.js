import {
	GET_ABOUTUS,
	GET_ABOUTUS_SUCCESS,
	GET_ABOUTUS_ERROR,
} from "../actions";

const aboutus_reducer = (state, action) => {
	// GET:
	if (action.type === GET_ABOUTUS) {
		return { ...state, aboutus_loading: true };
	}
	if (action.type === GET_ABOUTUS_SUCCESS) {
		return { ...state, aboutus_loading: false, aboutus: action.payload };
	}
	if (action.type === GET_ABOUTUS_ERROR) {
		return { ...state, aboutus_loading: false, aboutus_error: true };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default aboutus_reducer;
