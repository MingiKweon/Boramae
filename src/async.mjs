const work = (callback) => {
  setTimeout(() => {
    console.log("비동기 테스트");
    callback();
  }, 3000);
};

work(() => {
  console.log("동기 테스트");
});
