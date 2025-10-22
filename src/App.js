import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await Console.readLineAsync('');
    Console.print(userInput);
  }
}

export default App;
