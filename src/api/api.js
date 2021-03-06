import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c030a324-baeb-4405-818c-a009cf44ba68"
    }
})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => {
                return response.data
            })
    }
}

export const followUnfollowAPI = {
    follow(userId){
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {

    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getUserData(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}