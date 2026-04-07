import axios from 'axios';

const API_BASE =
    import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE,
    timeout: 10000,
});

export const fetchOverview = async() => {
    const [postsRes, usersRes] = await Promise.all([
        apiClient.get('/posts'),
        apiClient.get('/users')
    ]);
    return {
        totalPosts: postsRes.data.length,
        totalUsers: usersRes.data.length,
        recentPosts: postsRes.data.slice(0, 5)
    };
};

export const fetchProducts = async() => {
    const response = await apiClient.get('/photos?_limit=10');
    return response.data.map(photo => ({
        id: photo.id,
        title: photo.title,
        thumbnailUrl: photo.thumbnailUrl,
        url: photo.url
    }));
};

export const fetchUsers = async() => {
    const response = await apiClient.get('/users');
    return response.data;
};