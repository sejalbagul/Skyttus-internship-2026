import React, { createContext, useContext, useReducer, useCallback } from 'react';
import * as api from '../services/api';

const DashboardContext = createContext();

const initialState = {
  overview: { data: null, loading: false, error: null },
  products: { data: null, loading: false, error: null },
  users: { data: null, loading: false, error: null }
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, [action.section]: { data: null, loading: true, error: null } };
    case 'FETCH_SUCCESS':
      return { ...state, [action.section]: { data: action.payload, loading: false, error: null } };
    case 'FETCH_ERROR':
      return { ...state, [action.section]: { data: null, loading: false, error: action.payload } };
    default:
      return state;
  }
}

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  const fetchOverview = useCallback(async () => {
    dispatch({ type: 'FETCH_START', section: 'overview' });
    try {
      const data = await api.fetchOverview();
      dispatch({ type: 'FETCH_SUCCESS', section: 'overview', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', section: 'overview', payload: error.message });
    }
  }, []);

  const fetchProducts = useCallback(async () => {
    dispatch({ type: 'FETCH_START', section: 'products' });
    try {
      const data = await api.fetchProducts();
      dispatch({ type: 'FETCH_SUCCESS', section: 'products', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', section: 'products', payload: error.message });
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    dispatch({ type: 'FETCH_START', section: 'users' });
    try {
      const data = await api.fetchUsers();
      dispatch({ type: 'FETCH_SUCCESS', section: 'users', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', section: 'users', payload: error.message });
    }
  }, []);

  const value = {
    overviewState: state.overview,
    productsState: state.products,
    usersState: state.users,
    fetchOverview,
    fetchProducts,
    fetchUsers
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};