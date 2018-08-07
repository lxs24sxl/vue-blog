const getters = {
  title: state => state.app.title,
  isMobile: () =>
    window.navigator.userAgent.match (
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
      ? true
      : false,
  bannerInfo: state => state.app.bannerInfo,
  isCanWebp: () => {
    try {
      return (
        document
          .createElement('canvas')
          .toDataURL ('image/webp')
          .indexOf ('data:image/webp') == '0'
      );
    } catch (err) {
      return false;
    }
  },
};

export default getters;
