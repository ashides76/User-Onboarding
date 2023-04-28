// This is for the fake API. Do not delete!
import { rest } from 'msw'
import { v4 as uuid } from 'uuid'

const teammates = [
  {
    id: uuid(),
    firstName: 'Ashish',
    email: 'ashish@ashish.com',
    role: 'student',
    civil: 'single',
    hobbies: [
      'hiking',
      'reading',
      'coding',
    ],
  },
]

function getAllTeammates(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(teammates),
  )
}

function createNewTeammate(req, res, ctx) {
  const { firstName, email, role, civil } = req.body
  const requiredFields = { firstName, email, role, civil }

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    return res(
      ctx.status(400),
      ctx.json({ message: 'Some required fields are missing or invalid.' }),
    )
  }

  if (req.body.hobbies && !Array.isArray(req.body.hobbies)) {
    return res(
      ctx.status(400),
      ctx.json({ message: 'The optional `hobbies` field must be an array.' }),
    )
  }

  const newTeammate = { id: uuid(), ...req.body }
  teammates.unshift(newTeammate)

  return res(
    ctx.status(201),
    ctx.json(newTeammate),
  )
}

export const handlers = [
  rest.get('http://colleague.com/api/teammates', getAllTeammates),
  rest.post('http://colleague.com/api/teammates', createNewTeammate),
]
