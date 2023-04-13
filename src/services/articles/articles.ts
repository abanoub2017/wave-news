import apiClient from '@/services/globalAxios'

class ArticleServices {
    // List Articles
    static getArticleList(page:any) {
        return apiClient.get(`/posts?_page=${page}&_limit=12`)
    }
    // List Article Details
    static getArticleDetails(id: any) {
        return apiClient.get(`posts/${id}`)
    }
}
export default ArticleServices