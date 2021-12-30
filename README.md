# Full featured Layerfile Extensions for VSCode

## Publishing
- Install vsce via `npm install -g vsce`
- To package this repository run `vsce package`
- Upload the .vsix file to the publishers marketplace [here](https://marketplace.visualstudio.com/manage/publishers/webappio)
- For more on the extension publishing visit [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- Note: The add member functionality seems to be completely broken so to add a member to marketplace organization follow the steps [here](https://github.com/microsoft/vsmarketplace/issues/109#issuecomment-997722046 )

## Functionality
- Syntax Highlighting
- Documentation on hover
- Diagnostics for layerfiles
- Code Completion

## Structure
```
.
├── client // Language Client
│   ├── src
│   │   └── extension.ts // VSCode Language Client entry point
├── package.json // The extension manifest.
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```
## Setting up for Development
- Use Vscode for development
- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server` for vscode
- In the [Extension Development Host] instance of VSCode, open a document in 'plain text' language mode.
  - Activate code action on the error on the first line.