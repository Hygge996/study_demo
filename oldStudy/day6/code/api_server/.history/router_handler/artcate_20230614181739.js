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
  const sql = 'SELECT * FROM ev_article_cate WHERE name=? OR alias=?'

  // 执行查重操作
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    
    // 判断分类名称 和 分类别名 是否被占用
    if (results.length === 2) return res.cc('分类名称与分类别名被占用，请更换后重试！')

    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与分类别名被占用，请更换后重试！')
    // 分别判断 分类名称 和 分类别名 是否被占用
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')



    // 实现新增文章分类的功能
    // 定义新增文章 SQL 语句
    const sql = 'INSERT INTO ev_article_cate SET ?'

    db.query(sql, req.body, (err, results) => {
      // 执行 SQL 语句失败
      if(err) return res.cc(err)

      // 执行 SQL 语句成功，但是该变量为0
      if (results.affectedRows != 1) return res.cc('新增文章分类失败！')

      res.cc('新增文章分类成功。', 0)
    })
  })
}

// 删除文章分类的处理函数
exports.deleteCateById = (req, res) => {
  const sql = 'UPDATE ev_article_cate SET is_delete=1 WHERE id=1'
}