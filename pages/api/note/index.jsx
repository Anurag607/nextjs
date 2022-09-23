import nc from 'next-connect'
import notes from '../../../src/data/data.tsx'

const handler = nc()
.post(async (req,res) => {
    const id = Date.now()
    const note = {...req.body,id}

    notes.push(note)
    res.status(200).json({data: note})
})
.get(async (req,res) => {
    res.status(201).json({data: notes})
})

export default handler