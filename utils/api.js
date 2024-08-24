import axios from 'axios';
import {SERVER_BASE_URL} from ".//constant";
import client from './client';


export const userAPI = {
    get: async () => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.get(`/user`, {
                headers: {
                    'Authorization':`Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    search: async (searchString) => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.get(`/user/search?name=${searchString}`,
                {
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                }
                
            );
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    put: async (payload) => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.put(`/user`, payload,
                {
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
};

export const messagesAPI = {
    getMessageList: async () => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.get(`/message/0/10`,
                {
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    getMessagesBetweenUsers: async (userId) => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.get(`/message/${userId}/0/10`,
                {
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    postMessage: async (sentTo, message) => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.post(`/message`, {sentTo, message},
                {
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
    updateClientMessageStatus: async (latestMessageUserId) => {
        const token = window.localStorage.getItem("token");

        try {
            const response = await client.put(`/message/read`, {chatRecipientId: latestMessageUserId},
                {
                    headers: {
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            return response.data;
        } catch (error) {
            return error.response;
        }
    },
};