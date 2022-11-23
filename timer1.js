const args = process.argv.slice(2).map(num => Number(num));

const timer = args => {
  args.forEach(num => {
    if (num > 0 && num) {
      setTimeout(() => console.log("Alarm", "\x07"), num * 1000);
    }
  });
};

timer(args);