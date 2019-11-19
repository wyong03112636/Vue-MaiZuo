import axios from 'axios'
export function http({
  url,
  params = {}
}) {
  return axios({
    method: 'get',
    url,
    params,
  })
}

export const get = ({
  url,
  params
}) => {
  return axios({
      url,
      params
    })
    .then((result) => {
      return result.data
    })
    .catch((err) => {
      return err.message
    })
}