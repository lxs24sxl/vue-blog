import utils from './methods';
console.log (utils);
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
    author: 'lxs24sxl',
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
    author: 'lxs24sxl',
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
    author: 'lxs24sxl',
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
    author: '匿名',
  },
];

let tags = utils.unique (
  [{id: '10001', title: '推荐'}].concat (
    blogs.reduce ((result, item) => {
      let tag = item.tag;
      result.push ({
        id: tag.id,
        title: tag.title,
      });
      return result;
    }, [])
  ),
  'id'
);

let mainTags = tags.slice(0,4)
// [
//   { id: '1001', title: '推荐' },
//   { id: '1002', title: 'javascript' },
//   { id: '1003', title: 'webpack' },
//   { id: '1004', title: 'css' }
// ],
export {blogs, tags, mainTags};
