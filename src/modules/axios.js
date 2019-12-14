/*
 |---------------------------------------------------------------------------------------------------------------------
 | Configuration API
 |---------------------------------------------------------------------------------------------------------------------
 |
 | For using api, we used axios for it's features, then you can config your url or add another options for control all of
 | your components.
 |
 **/

export const axios = {
  state: {
    baseURL: 'http://localhost/foxstore/api/',
    jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImFmREdTNk1zZGY5c21kZjFzRUZTOThQTzIxU1ZkZnNmbSI.iiiWCiCQLBkYXN0F5SX32IHLvWjV8rkrqpqZNv2omz0',
    query: 'query/curd',
    media: 'media/surf',
    sess: 'sessions/sess'
  },
  getters: {
    createQuery: (state) => {
      return `${state.baseURL}${state.query}/create`;
    },
    updateQuery: (state) => {
      return `${state.baseURL}${state.query}/update`;
    },
    readQuery: (state) => {
      return `${state.baseURL}${state.query}/read`;
    },
    deleteQuery: (state) => {
      return `${state.baseURL}${state.query}/delete`;
    },
    customQuery: (state) => {
      return `${state.baseURL}${state.query}/custom`;
    },
    uploadMedia: (state) => {
      return `${state.baseURL}${state.media}/upload`;
    },
    downloadMedia: (state) => {
      return `${state.baseURL}${state.media}/download`;
    },
    readMedia: (state) => {
      return `${state.baseURL}${state.media}/read`;
    },
    writeMedia: (state) => {
      return `${state.baseURL}${state.media}/write`;
    },
    removeMedia: (state) => {
      return `${state.baseURL}${state.media}/remove`;
    },
    editMedia: (state) => {
      return `${state.baseURL}${state.media}/edit`;
    },
    generateMedia: (state) => {
      return `${state.baseURL}${state.media}/generate`;
    },
    sessionSess: (state) => {
      return `${state.baseURL}${state.sess}/generate`;
    },
    flashSess: (state) => {
      return `${state.baseURL}${state.sess}/generate`;
    },
    tempSess: (state) => {
      return `${state.baseURL}${state.sess}/generate`;
    },

  },
}
