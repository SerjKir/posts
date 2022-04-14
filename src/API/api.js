import axios from "axios";

export default class RestApi {
    static async getFriends() {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
    }

    static async getFriendInfo(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    }

    static async getPosts() {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/')
    }
    static async getPostComments(id) {
        return await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    }
}