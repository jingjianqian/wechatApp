// index.js 
Page({
  data: {
    verticalButtonInfo: {
      layout: 'vertical',
      list: [
        {
          id: 1,
          type: 'primary',
          text: '鼓励一下!',
        },
        {
          id: 2,
          type: 'default',
          text: '踩一下，小垃圾！',
        },
        {
          id: 3,
          type: 'disabled',
          text: '赞助一下！',
        }
      ],
    },
  },
  onLoad() {
  },
  onClickButton(buttonInfo) {
    console.log('onClickButton buttonInfo: ', buttonInfo.detail.id);
    switch(buttonInfo.detail.id){
      case 1:
        wx.showToast({ title: `${buttonInfo.detail.text}` }); break;
      case 2:
        wx.showToast({ title: `${buttonInfo.detail.text}` }); break;
      case 3:
        wx.showToast({ title: "谢谢，没做呢" }); break;
    }
  },
});