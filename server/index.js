const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// スレッドデータのサンプル
let threads = [
  { title: '推しについて語るスレ' },
  { title: '今期覇権アニメ' },
  { title: 'TechTrainってどうなの？' },
  { title: '暇な人雑談しませんか' },
  { title: 'Rustについて語るスレ' },
  { title: '自宅警備員だけどなんか質問ある？' },
  { title: '大阪でおすすめのラーメン屋教えて' },
]

// GETリクエストを処理するルート
app.get('/api/thread', (req, res) => {
  res.status(200).json(threads)
})

// POSTリクエストを処理するルート
app.post('/api/thread', (req, res) => {
  const thread = req.body
  threads.push(thread)
  res.status(200).json(thread)
})

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))
