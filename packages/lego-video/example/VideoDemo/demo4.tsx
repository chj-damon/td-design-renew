import React from 'react';
import Video from '@td-design/lego-video';

export default () => {
  return (
    <Video
      id="demo4"
      videoUrls={[
        'https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1631615153504280070.m4v',
        'https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1631615240630670967.mov',
      ]}
      autoplay
      muted
    />
  );
};
