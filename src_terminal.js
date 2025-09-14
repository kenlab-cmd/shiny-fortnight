import { Terminal } from '@xterm/xterm';

const term = new Terminal({
  cursorBlink: true,
  theme: {
    background: '#1e1e1e',
    foreground: '#ffffff'
  }
});
term.open(document.getElementById('terminal-container'));
term.write('Welcome to your web terminal!\r\n');
term.prompt = () => {
  term.write('\r\n$ ');
};
term.prompt();

term.onKey(e => {
  const char = e.key;
  if (char === '\r') { // Enter key
    term.write('\r\n');
    term.prompt();
  } else if (char === '\u007F') { // Backspace (DEL)
    // Do nothing for now
  } else {
    term.write(char);
  }
});