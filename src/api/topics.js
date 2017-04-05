const _topics = [
  {'id': 1, 'title': '测试标题1', 'author': 'hosanna'},
  {'id': 1, 'title': '测试标题2', 'author': 'quchen'}
]

export default {
  getTopics (cb) {
    setTimeout(() => cb(_topics), 100)
  }
}

