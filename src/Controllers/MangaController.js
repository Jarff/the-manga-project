import axios from 'axios';

const MangaController = {
    getMangasesSortedByCreationDate: (sort) => {
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:1337/mangases?_sort=created_at:${sort}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
        })
    },
    find: (id) => {
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:1337/mangases/${id}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
        })
    }
}

export default MangaController;