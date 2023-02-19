import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/2_aboutus_reducer";

import {
	GET_ABOUTUS,
	GET_ABOUTUS_SUCCESS,
	GET_ABOUTUS_ERROR,
} from "../actions";

import { API_ABOUTUS_GET } from "../utils/constants/api_constants";

const initialState = {
	aboutus_loading: false,
	aboutus_error: false,
	aboutus: {},
};

const AboutUsContext = React.createContext();

export const AboutUsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// GET Page:
	const getAboutUsPage = async () => {
		dispatch({ type: GET_ABOUTUS });
		try {
			const response = await axios.get(API_ABOUTUS_GET);
			const responseData = response.data;
			dispatch({ type: GET_ABOUTUS_SUCCESS, payload: responseData });
		} catch (error) {
			dispatch({ type: GET_ABOUTUS_ERROR });
		}
	};

	useEffect(() => {
		getAboutUsPage();
	}, []);

	return (
		<AboutUsContext.Provider value={{ ...state }}>
			{children}
		</AboutUsContext.Provider>
	);
};

export const useAboutUsContext = () => {
	return useContext(AboutUsContext);
};
