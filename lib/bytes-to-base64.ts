export const bin = (n: number): string => n.toString(2).padStart(8, '0');

export const bytesArrToBase64 = (arr: number[]) => {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const l = arr?.length;
  let result = '';

  for (let i = 0; i <= (l - 1) / 3; i++) {
    const c1 = i * 3 + 1 >= l;
    const c2 = i * 3 + 2 >= l;
    const chunk = bin(arr[3 * i]) + bin(c1 ? 0 : arr[3 * i + 1]) + bin(c2 ? 0 : arr[3 * i + 2]);
    const r = chunk
      ? chunk
          ?.match(/.{1,6}/g)
          ?.map((x, j) => (j == 3 && c2 ? '=' : j == 2 && c1 ? '=' : abc[+('0b' + x)]))
      : [];
    if (r) {
      result += r.join('');
    }
  }

  return result;
};
