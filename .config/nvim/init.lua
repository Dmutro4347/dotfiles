require('plugins')
require('settings')
require('keymaps')
require('nvim-tree').setup()
require 'colorizer'.setup()
require('configs.alpha')
require('configs.lsp')
require('configs.cmp')
require("mason").setup({
    PATH = "prepend", -- "skip" seems to cause the spawning error
})
require("mason-lspconfig").setup()
