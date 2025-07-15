import * as vscode from 'vscode';

// IntelliJ → VSCode 단축키 매핑 테이블
const keymap = new Map<string, { vscodeShortcut: string, description: string }>([
  ['ctrl+alt+l', {
    vscodeShortcut: 'Shift + Alt + F',
    description: '코드 포맷팅'
  }],
  ['ctrl+shift+f', {
    vscodeShortcut: 'Ctrl + Shift + F (Explorer에서)',
    description: '전체 파일 내 문자열 검색'
  }],
  ['cmd+alt+l', {
    vscodeShortcut: 'Shift + Option + F',
    description: '코드 포맷팅'
  }],
  ['cmd+shift+f', {
    vscodeShortcut: 'Cmd + Shift + F (Explorer에서)',
    description: '전체 파일 내 문자열 검색'
  }]
]);

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('IntelliJ Keymap Tooltip 확장이 활성화되었습니다.');

  const disposable = vscode.commands.registerCommand('intellijKeymapTooltip.checkShortcut', (args) => {
    const pressedKey = args.key;
    const entry = keymap.get(pressedKey);
    if (entry) {
      vscode.window.showInformationMessage(
        `💡 IntelliJ의 '${pressedKey}'은 VSCode에서는 '${entry.vscodeShortcut}'입니다. (${entry.description})`
      );
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
