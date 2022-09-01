"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const path = require("path");
const vscode = require("vscode");
const completion_provider_1 = require("./font-awesome/completion-provider");
const documentation_1 = require("./font-awesome/documentation");
const hover_provider_1 = require("./font-awesome/hover-provider");
const version_migrations_1 = require("./version-migrations");
const configuration_1 = require("./font-awesome/configuration");
const disposables = [];
function registerProviders(context) {
    // Load config
    const config = (0, configuration_1.loadConfiguration)();
    // Load icon documentation
    const documentation = new documentation_1.default(path.join(path.dirname(__dirname), `data/fontawesome-${config.version}`), config);
    const providers = {
        completion: new completion_provider_1.default(documentation, config),
        hover: new hover_provider_1.default(documentation, config),
    };
    disposables.push(vscode.languages.registerCompletionItemProvider(config.patterns, providers.completion, ...[config.triggerCharacter]), vscode.languages.registerHoverProvider(config.patterns, providers.hover));
    context.subscriptions.push(...disposables);
}
;
function unregisterProviders(context) {
    // If the providers are about to be registered again, remove previous instances first
    for (const disposable of disposables) {
        const existingIndex = context.subscriptions.indexOf(disposable);
        if (existingIndex !== -1) {
            context.subscriptions.splice(existingIndex, 1);
        }
        disposable.dispose();
    }
}
function clearAndLoadExtension(context) {
    unregisterProviders(context);
    registerProviders(context);
}
function activate(context) {
    // Whenever the configuration changes and affects the extension, reload everything
    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration(configuration_1.configurationSection)) {
            clearAndLoadExtension(context);
        }
    });
    clearAndLoadExtension(context);
    version_migrations_1.default.RunAll();
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map