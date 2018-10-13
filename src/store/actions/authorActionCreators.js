import * as actionTypes from './actionTypes';
import AuthorApi from '../../fakeBackend/mockAuthorApi';



export const authorSucess = (data) => {
    return {
        type:actionTypes.LOAD_AUTHORS,
        author:data
    }
}

export const getAuthorsList = () => {
    return dispatch => {
        AuthorApi.getAllAuthors()
         .then((response) => {
             dispatch(authorSucess(response))
         }).catch((error) => {
             throw(error)
         })
    }
}