// 导入数据库
const { result } = require('@hapi/joi/lib/base.js')
const db = require('../db/index.js')




// 获取文章分类列表数据的处理函数
exports.getArticleCates = (req, res) => {
  // 根据分类的状态，获取所有未被删除的分类列表数据
  // is_delete 为 0 表示没有被 标记为删除 的数据
  const sql = 'SELECT * FROM ev_article_cate WHERE is_delete=0 ORDER BY id ASC '

  // 执行 SQL 语句
  db.query(sql, (err, results) => {
    // 执行 SQL 语句失败
    if(err) return res.cc(err)

    // 2. 执行 SQL 语句成功
    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: results,
    })
  })
}

// 新增文章分类的处理函数
exports.addArticleCates = (req, res) => {
  // 定义查询 分类名称 与 分类别名 是否被占用的 SQL 语句
  const sql = 'SELECT * FROM ev_article_cate WHERE name=? OR alias=? '

  // 执行查重操作
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    // 执行 SQL 语句失败
    if(err) return res.cc(err)
    
    if(results.lenght !== 0) return res.cc('查询失败，请输入查询名称。')

    res.cc('查询成功。', 0)
  })
}