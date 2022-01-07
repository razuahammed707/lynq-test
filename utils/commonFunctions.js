const isBrowser = typeof window !== 'undefined';

export const getCookie = (cname, cookie) => {
  if (!isBrowser && !cookie) return '';
  if (!isBrowser && cookie) {
    const value = `; ${cookie}`;
    const parts = value.split(`; ${cname}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
  }
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cname}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
