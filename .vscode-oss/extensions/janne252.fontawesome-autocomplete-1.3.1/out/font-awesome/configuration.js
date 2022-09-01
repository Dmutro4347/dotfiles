"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfiguration = exports.ConfigKey = exports.configurationSection = void 0;
const vscode = require("vscode");
const transformation_1 = require("./transformation");
exports.configurationSection = 'fontAwesomeAutocomplete';
var ConfigKey;
(function (ConfigKey) {
    ConfigKey["Version"] = "version";
    ConfigKey["TriggerWord"] = "triggerWord";
    ConfigKey["PreviewBackgroundColor"] = "preview.backgroundColor";
    ConfigKey["PreviewForegroundColor"] = "preview.foregroundColor";
    ConfigKey["DisableTriggerWordAutoClearPatterns"] = "disableTriggerWordAutoClearPatterns";
    ConfigKey["InsertionTemplate"] = "insertionTemplate";
    ConfigKey["EnableElevatedSortPriority"] = "enableElevatedSortPriority";
})(ConfigKey = exports.ConfigKey || (exports.ConfigKey = {}));
/** Loads and validates the extension configuration. */
function loadConfiguration() {
    const config = vscode.workspace.getConfiguration(exports.configurationSection);
    const version = config.get(ConfigKey.Version);
    const triggerWord = config.get(ConfigKey.TriggerWord);
    // Convert loaded glob patterns into regular expressions
    const disableTriggerWordAutoClearRules = config.get(ConfigKey.DisableTriggerWordAutoClearPatterns).map(pattern => new transformation_1.AutoClearTriggerWordRule(pattern));
    const insertionTemplatesConfig = config.get(ConfigKey.InsertionTemplate);
    const insertionTemplates = [];
    for (const pattern in insertionTemplatesConfig) {
        insertionTemplates.push(new transformation_1.InsertionTemplate(pattern, insertionTemplatesConfig[pattern]));
    }
    // Convert loaded glob patterns into DocumentFilters
    const patterns = config.get('patterns').map(pattern => ({
        pattern,
        scheme: 'file',
    }));
    const previewStyle = {
        backgroundColor: config.get(ConfigKey.PreviewBackgroundColor),
        foregroundColor: config.get(ConfigKey.PreviewForegroundColor),
    };
    const triggerCharacter = triggerWord[triggerWord.length - 1];
    return {
        version,
        triggerWord,
        disableTriggerWordAutoClearRules,
        patterns,
        previewStyle,
        insertionTemplates,
        triggerCharacter,
        enableElevatedSortPriority: config.get(ConfigKey.EnableElevatedSortPriority),
    };
}
exports.loadConfiguration = loadConfiguration;
//# sourceMappingURL=configuration.js.map