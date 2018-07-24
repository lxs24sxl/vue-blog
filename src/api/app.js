import fetch from '@/utils/fetch';

export function getInit(data) {
  return fetch({
    url: '/test',
    methods: 'post',
    data
  });
}
