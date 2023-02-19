import {
	GET_FEATURES,
	GET_FEATURES_SUCCESS,
	GET_FEATURES_ERROR,
} from "../actions";

const features_reducer = (state, action) => {
	// GET:
	if (action.type === GET_FEATURES) {
		return { ...state, features_loading: true };
	}
	if (action.type === GET_FEATURES_SUCCESS) {
		return { ...state, features_loading: false, features: action.payload };
	}
	if (action.type === GET_FEATURES_ERROR) {
		return { ...state, features_loading: false, features_error: true };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default features_reducer;
