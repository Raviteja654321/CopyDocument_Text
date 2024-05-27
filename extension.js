const vscode = require('vscode');

function activate(context) {
    console.log('Congratulations, your extension "copydocument" is now active!');
    
    let helloworldcommand = vscode.commands.registerCommand('copydocument.helloWorld', function () {

        vscode.window.showInformationMessage('Hello World from CopyDocument!');

    });

    let copyTextCommand = vscode.commands.registerCommand('copydocument.copyText', async function () {
        
		const editor = vscode.window.activeTextEditor;

        if (editor) {
            const text = editor.document.getText();

            await vscode.env.clipboard.writeText(text);

            vscode.window.showInformationMessage("Successfully copied text to clipboard!");

        } 
        else {
            vscode.window.showInformationMessage("No active text editor found.");
        }
    });

    context.subscriptions.push(helloworldcommand, copyTextCommand);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
