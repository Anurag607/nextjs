/* eslint-disable import/no-anonymous-default-export */

// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: 'hello' }))
// }

import nc from 'next-connect'

const handler = nc()
.get(async (req,res) => {
  res.json({message: "okay!"})
})
.post(async (req,res) => {
  res.json({message: "POSTED!"})
})

export default handler