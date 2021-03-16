import * as express from 'express';
const chirpstore = require('./utils/chirpstore')
const router = express.Router();


// router.get('/:id?', (req, res) => {
//     if (req.params.id) {
//         const id = req.params.id
//         res.send(chirpstore.GetChirp(id))
//     } else {
//         const data = chirpstore.GetChirps()
//         const chirps = Object.keys(data).map(key => {
//             return {
//                 id: key, 
//                 name: data[key].name,
//                 text: data[key].text
//             }
//         })
//         res.send(chirpstore.GetChirps())
//     }
// });

router.get('/', (req, res) => {
    const data = chirpstore.GetChirps();
    const chirps = Object.keys(data).map(key => {
        return {
            id: key,
            name: data[key].name,
            text: data[key].text
        };
    });
    chirps.pop();
    res.json(chirps)
})


// GET /api/chirps/chirpid
router.get('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    const chirp = chirpstore.GetChirp(chirpid);
    res.json({ id: chirpid, ...chirp})
})



router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body)
    res.sendStatus(200)
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    chirpstore.DeleteChirp(id)
    res.status(200).json(`Chirp #${id} deleted!`)
})


router.put('/:id', (req, res) => {
    const updatedChirp = {
        name: req.body.name,
        text: req.body.text
    }
    const id = req.params.id
    console.log(id, updatedChirp)
    chirpstore.UpdateChirp(id, updatedChirp)

    res.status(200).json(`Chirp ${id} Updated!`)
})
// router.put("/:id", (req, res) => {
//     chirpstore.UpdateChirp(req.params.id, {
//       name: req.body.name,
//       text: req.body.text,
//     });
//     res.status(201).json(`Chirp (ID ${req.params.id}) Updated`);
//   });

export default router;