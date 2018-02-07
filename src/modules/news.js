export default {
  path: 'news',
  label: '栏目',
  hasReducer: true,
  route:'news/:classid',
  child: [
    // {
    //   path: 'recorder',
    //   label: '行车记录仪',
    //   hasReducer: true,
    //   hasSagas: true,
    // },
    // {
    //   path: 'word',
    //   label: '敏感词管理',
    //   hasReducer: true,
    //   hasSagas: true,
    // },
    // {
    //   path: 'activity',
    //   label: '活动配置',
    //   hasReducer: true,
    //   hasSagas: true,
    //   child: [{
    //     path: 'add',
    //     route: 'add(/:gid)',
    //     label: '添加活动',
    //     hasReducer: true,
    //     hasSagas: true,
    //   }],
    // },
    // {
    //   path: 'video',
    //   label: '视频管理',
    //   hasReducer: true,
    //   hasSagas: true,
    // },
  ],
};
