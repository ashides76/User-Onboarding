import { v4 as uuid } from 'uuid';

const initialTeammateList = [
    {
      id: uuid(),
      firstName: 'Ashish',
      email: 'ashish@ashish.com',
      role: 'student',
      civil: 'married',
      hobbies: [
        'hiking',
        'reading',
        'coding',
      ],
    },
  ]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeammateList })
  },
  post(url, { firstName, email, role, civil, hobbies }) {
    const newTeammate = { id: uuid(), firstName, email, role, civil, hobbies }
    return Promise.resolve({ status: 200, success: true, data: newTeammate })
  }
}
