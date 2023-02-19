import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/owner_reducer";

import { GET_OWNER, GET_OWNER_SUCCESS, GET_OWNER_ERROR } from "../actions";

import { API_OWNER_GET } from "../utils/constants/api_constants";

const initialState = {
	owner_loading: false,
	owner_error: false,
	owner: {},
};

const OwnerContext = React.createContext();

export const OwnerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// GET Page:
	const getOwnerPage = async () => {
		dispatch({ type: GET_OWNER });
		try {
			const response = await axios.get(API_OWNER_GET);
			const responseData = response.data;
			dispatch({ type: GET_OWNER_SUCCESS, payload: responseData });
		} catch (error) {
			dispatch({ type: GET_OWNER_ERROR });
		}
	};

	useEffect(() => {
		getOwnerPage();
	}, []);

	return (
		<OwnerContext.Provider value={{ ...state }}>
			{children}
		</OwnerContext.Provider>
	);
};

export const useOwnerContext = () => {
	return useContext(OwnerContext);
};
