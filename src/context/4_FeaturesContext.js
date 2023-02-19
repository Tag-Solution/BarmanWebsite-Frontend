import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/features_reducer";

import {
	GET_FEATURES,
	GET_FEATURES_SUCCESS,
	GET_FEATURES_ERROR,
} from "../actions";

import { API_FEATURES_GET } from "../utils/constants/api_constants";

const initialState = {
	features_loading: false,
	features_error: false,
	features: {},
};

const FeaturesContext = React.createContext();

export const FeaturesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// GET Page:
	const getFeaturesPage = async () => {
		dispatch({ type: GET_FEATURES });
		try {
			const response = await axios.get(API_FEATURES_GET);
			const responseData = response.data;
			dispatch({ type: GET_FEATURES_SUCCESS, payload: responseData });
		} catch (error) {
			dispatch({ type: GET_FEATURES_ERROR });
		}
	};

	useEffect(() => {
		getFeaturesPage();
	}, []);

	return (
		<FeaturesContext.Provider value={{ ...state }}>
			{children}
		</FeaturesContext.Provider>
	);
};

export const useFeaturesContext = () => {
	return useContext(FeaturesContext);
};
