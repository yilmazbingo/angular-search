const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    const anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc();
  },
};

obj.sing();
