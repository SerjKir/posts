import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com'

export default class RestApi {
    static async getFriends() {
        return await axios.get(url + '/users')
    }

    static async getFriendInfo(id) {
        return await axios.get(url + '/users/' + id)
    }

    static async getPosts() {
        return await axios.get(url + '/posts/')
    }
    static async getPostsUser(id) {
        return await axios.get(url + `/users/${id}/posts`)
    }

    static async getPost(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    }

    static async getPostComments(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    }
}