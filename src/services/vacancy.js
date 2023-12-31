import api from "./api";

export const postVacancy = async (body) => {
    try{
    const {data} = await api.post('/api/vacancies', body, {headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || "")}`
    }})
    return data
    } catch (error) {
        console.log(error)
    }
}

export const postResume = async (body) => {
    try{
    const {data} = await api.post('/api/cvs', body,  {headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || "")}`
    }})
    return data 
    } catch (error) {
        console.log(error)
    }
}

export const getResumeByUserId = async(id) => {
    try{
    const {data} = await api.get(`/api/cvs?filters[user_id][$eq]=${id}`)
    return data
    } catch (error) {
        console.log(error)
    }
}

export const getVacancyByUserId = async(id) => {
    try{
    const {data} = await api.get(`/api/vacancies?filters[user_id][$eq]=${id}`)
    return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteVacancy = async (id) => {
    try{
    const {data} = await api.delete(`/api/vacancies/${id}`,  {headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || "")}`
    }})
    return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteResume = async (id) => {
    try{
    const {data} = await api.delete(`/api/cvs/${id}`,  {headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || "")}`
    }})
    return data
    } catch (error) {
        console.log(error)
    }
}

export const editVacancy = async(body, id) =>{
    try {
        const {data} = await api.put(`/api/vacancies/${id}`, body,  {headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || "")}`
        }})
        return data
    } catch (error) {
        console.log(error);
    }
}

export const editResume = async(body, id) =>{
    try {
        const {data} = await api.put(`/api/cvs/${id}`, body,  {headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') || "")}`
        }})
        return data
    } catch (error) {
        console.log(error);
    }
}