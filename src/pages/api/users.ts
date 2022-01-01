import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Keeven'},
        {id: 2, name: 'Rayssa'},
        {id: 3, name: 'Next'}
    ]
    return response.json(users);
}