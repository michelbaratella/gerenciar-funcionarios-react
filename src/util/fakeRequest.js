export async function fakeRequest({ ...props }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(props);
      return resolve();
    }, 1250);
  });
}
