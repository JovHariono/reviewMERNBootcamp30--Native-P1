import { createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = "http://172.28.112.1:4000/api/v1"
export const TOKEN_KEY = "token";
export const TOKEN_PREFIX = "Bearer";
export const CONTEXT_APP = createContext({});
export const STORAGE = AsyncStorage