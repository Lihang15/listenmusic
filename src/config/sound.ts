import Sound from 'react-native-sound';
Sound.setCategory('Playback');
let sound: Sound;
// 创建播放器
const init = (url: string) => {
  return new Promise((resolve, reject) => {
    sound = new Sound(url, '', error => {
      if (error) {
        if (error) {
          console.log('创建播放器失败');
        }
        reject(error);
      } else {
        resolve(sound);
      }
    });
  });
};

//播放音频 播放完成 回掉函数才执行
const play = () => {
  return new Promise((resolve, reject) => {
    if (sound) {
      sound.play(success => {
        if (success) {
          resolve('success');
        } else {
          reject();
        }
        //释放资源
        // sound.release();
      });
    } else {
      reject();
    }
  });
};

//暂停音乐
const pause = () => {
  return new Promise(resolve => {
    if (sound) {
      sound.pause(() => {
        resolve('success');
      });
    } else {
      resolve('success');
    }
  });
};
//停止音乐
const stop = () => {
  return new Promise(resolve => {
    if (sound) {
      sound.stop(() => {
        resolve('success');
      });
    } else {
      resolve('success');
    }
  });
};
//获取播放时间
const getCurrentTime = () => {
  return new Promise(resolve => {
    if (sound && sound.isLoaded()) {
      sound.getCurrentTime(resolve);
    } else {
      resolve(0);
    }
  });
};

//获取音频时长
const getDuration = () => {
  if (sound) {
    return sound.getDuration();
  }
  return 0;
};
export {init, play, pause, getCurrentTime, getDuration, stop};
