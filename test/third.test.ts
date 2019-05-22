import nodegit from 'nodegit';
import path from 'path';

describe('third test', () => {
  it('should pass', async () => {
    await nodegit.Repository.open(
      path.resolve(__dirname, '..', 'repo', '.git'),
    );
  }, 10000);
});
