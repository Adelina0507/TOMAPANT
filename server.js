const express = require('express')
const app = express()
const port = 3003
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
let letters = [];
let rounds = [];
const randomLetter = () => {
    let letter = 'X';
    do {
        letter = String.fromCharCode(Math.random() * 25 + 65);
    } while (Object.values(letters).indexOf(letter) > -1);
    return letter
}


let players = [];


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("newGame",()=>{
        letters = [];
        rounds = [];
        socket.broadcast.emit("resetGame");
    })
    socket.on("player",(data) =>{
        players.push(data.player)
        socket.broadcast.emit('players',players)
        socket.emit('players',players)
    })
    socket.on("round",(data) =>{
        console.log('data round',data);
    })
    socket.on("forceFinish",(data)=>{
        console.log("forceFinish");
        if(rounds.length < letters.length) {
            rounds.push([])
        }
        rounds[rounds.length - 1].push(data);
        console.log(rounds);
        let roundData = rounds[rounds.length - 1];

        if(rounds[rounds.length - 1].length === 2) {
            console.log(roundData)
            let player1 = roundData[0]['player'];
            let player2 = roundData[1]['player'];

            let scores = {
                [player1]:roundData[0].data,
                [player2]:roundData[1].data,
            }
            console.log(scores);
            Object.keys(roundData[0].data).forEach(key => {
                let val1 = scores[player1][key];
                let val2 = scores[player2][key];
                console.log("VALS",val1,val2);
                if(val1.toUpperCase() === val2.toUpperCase() && val1.trim() !== ''){
                    console.log(" 5 5 ")
                    scores[player1][key] = 5;
                    scores[player2][key] = 5;
                } else if(val1.toUpperCase() !== '' && val2.toUpperCase() !== ''){
                    console.log(" 10 10 ")
                    scores[player1][key] = 10;
                    scores[player2][key] = 10;
                } else if(val1.toUpperCase() !== '' && val2.toUpperCase() === '') {
                    console.log(" 10 0 ")
                    scores[player1][key] = 20;
                    scores[player2][key] = 0;
                } else if(val2.toUpperCase() !== '' && val1.toUpperCase() === '') {
                    console.log(" 0 10 ")
                    scores[player1][key] = 0;
                    scores[player2][key] = 20;
                } else {
                    console.log(" 0 0 ")
                    scores[player1][key] = 0;
                    scores[player2][key] = 0;
                }
            })
            console.log(scores)
            socket.broadcast.emit("scores",scores);
            socket.emit("scores",scores);
        }
        socket.broadcast.emit("didForceFinish");
    })
    socket.on('getLetter', ({round}) => {
        round = parseInt(round);
        console.log(round)
        letters.push(randomLetter())

        console.log(letters);
        socket.emit('letter',{letters: letters, round: round})
        socket.broadcast.emit('letter',{letters: letters, round: round})
    });
});




app.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})