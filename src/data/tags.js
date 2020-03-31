import blogs from './blogs.js'
import utils from '@/utils/methods'

let tags = utils.unique(
  [{ id: 10001, title: '推荐' }].concat(
    blogs.reduce((result, item) => {
      let tag = item.tag
      result.push({
        id: tag.id,
        title: tag.title
      })
      return result
    }, [])
  ),
  'id'
)

let mainTags = tags.slice(0, 4)

export { tags, mainTags }
