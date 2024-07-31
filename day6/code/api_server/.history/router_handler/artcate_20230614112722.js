// 导入数据库
const db = require('../db/index.js')




// 获取文章分类列表数据的处理函数
exports.getArticleCates = (req, res) => {
  // 根据分类的状态，获取所有未被删除的分类列表数据
  // is_delete 为 0 表示没有被 标记为删除 的数据
  // const sql = 'SELECT * FROM ev_article_cate WHERE is_delete=0 ORDER by id asc '
  res.send('ok!')
}