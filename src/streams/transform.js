import { Transform } from "stream"

export const transform = async () => {

const reverseTr = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    }
  });
  
  process.stdin.pipe(reverseTr).pipe(process.stdout);
};

transform();
