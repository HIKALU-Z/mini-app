/*
 * Copyright (c) 2020 hikalu
 *
 * @Script: theme.js
 * @Author: hikalu
 * @Email: play3a@126.com
 * @Create At: 2020-05-25 10:29:39
 * @Last Modified By: hikalu
 * @Last Modified At: 2020-05-25 18:06:41
 * @Description: This is description.
 */

import { Http } from "../utils/http";

//业务对象

class Theme {
  static async getHomeLocationA() {
    // wx.request({
    //   url: `${config.apiBaseUrl}theme/by/names`,
    //   method: "GET",
    //   data: {
    //     names: "t-1",
    //   },
    //   header: {
    //     appkey: config.appkey,
    //   },
    //   success: (res) => {
    //     callback(res.data);
    //     // this.setData({ topTheme: res.data[0] });
    //   },
    // });
    return await Http.request({
      url: `theme/by/names`,
      data: {
        names: "t-1",
      },
    });
  }
}

export { Theme };
