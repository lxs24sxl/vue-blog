// import utils from '@/utils/methods';
let blogs = [
  {
    id: '201808221956',
    title: '关于vue的组件渲染优化',
    time: '2018-08-22 19:56:00',
    tag: {
      id: 10003,
      title: 'vue',
      bg_color: '#41B883'
    },
    desc: '关于vue的组件渲染优化的描述，测试测试测试测试测试测试测试测试测试。',
    author: 'lxs24sxl',
    copyright: '1'
  },
  {
    id: '201808221824',
    title: 'element-ui的select组件省市渲染',
    time: '2018-08-22 18:24:00',
    tag: {
      id: 10003,
      title: 'vue',
      bg_color: '#41B883'
    },
    desc:
      '引入json文件，动态渲染select的组件，将数据拼接成select需要传入的格式，然后自定义格式。',
    author: 'lxs24sxl',
    copyright: '1'
  },
  {
    id: '201808241107',
    title: '使前端开发高效化的网站',
    time: '2018-08-24 11:07:00',
    tag: {
      id: 10002,
      title: 'other',
      bg_color: '#FBBC05'
    },
    desc:
      '在掘金、github等技术文章搜集了很多的网站，更加方便于我们的开发(逼格高)',
    author: 'lxs24sxl',
    copyright: '1'
  },
  {
    id: '201808241110',
    title: '常用的es5/es6语法',
    time: '2018-08-24 11:10:00',
    tag: {
      id: 10004,
      title: 'javascript',
      bg_color: '#E44B39'
    },
    author: 'lxs24sxl',
    desc: 'filter(), find(), findIndex(), reduce(), map()等等',
    copyright: '1'
  },
  {
    id: '201808271514',
    title: 'React 移动 web 极致优化',
    time: '2018-08-27 15:14:00',
    tag: {
      id: 10005,
      title: 'react',
      bg_color: '#61dafb'
    },
    desc:
      '初学者对React可能满怀期待，觉得React可能完爆其它一切框架，甚至不切实际地认为React可能连原生的渲染都能完爆——对框架的狂热确实会出现这样的不切实际的期待。',
    author: '匿名',
    copyright: '2'
  },
  {
    id: '201808271600',
    title: '微信小程序请求接口封装',
    time: '2018-08-27 16:00:00',
    tag: {
      id: 10006,
      title: '微信小程序',
      bg_color: '#1AAD19'
    },
    desc:
      '每次在调用wx.require()的api的时候，都觉得调用这个方法，写的重复代码太多了，所以我封装了一个发送请求的api接口方法',
    author: 'lxs24sxl',
    copyright: '1'
  }
]

// let tags = utils.unique(
//   [{ id: 10001, title: '推荐' }].concat(
//     blogs.reduce((result, item) => {
//       let tag = item.tag;
//       result.push({
//         id: tag.id,
//         title: tag.title
//       });
//       return result;
//     }, [])
//   ),
//   'id'
// );

// let mainTags = tags.slice(0, 4);
// [
//   { id: '1001', title: '推荐' },
//   { id: '1002', title: 'javascript' },
//   { id: '1003', title: 'webpack' },
//   { id: '1004', title: 'css' }
// ],
export default blogs
