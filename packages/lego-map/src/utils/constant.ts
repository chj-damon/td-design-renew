/** 初始化地图名称 */
export const INITIAL_MAP_NAME = 'china';

/** 初始化行政区号 */
export const INITIAL_ADCODE = '100000';

export const genAmapAdcodeUrl = (adcode = INITIAL_ADCODE) =>
  `https://restapi.amap.com/v3/config/district?keywords=${adcode}&subdistrict=3&extensions=base&key=${AMAP_DRILL_SERVER_KEY}`;
