export const getCookie = (key: string) => {
  let arr: RegExpMatchArray | null = [];
  const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return arr[2];

  return null;
};

export const setCookie = (key: string, value: string, time?: number) => {
  if (time) {
    const expires = time * 24 * 60 * 60 * 1000;
    const date = new Date(+new Date() + expires);
    document.cookie = key + '=' + value + ';expires=' + date.toUTCString();
  } else {
    document.cookie = key + '=' + value;
  }
};

// export const removeCookie = () => {};

// export const hasCookie = () => {};
