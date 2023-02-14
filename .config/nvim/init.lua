package.path = '/home/arfors/.config/nvim/lua'
vim.opt.termguicolors = true

require('settings')
require('keymaps')
require('plugins')
require('lualine').setup()
require('nvim-tree').setup()
require('configs.alpha')
require("bufferline").setup()
require('colorizer').setup()
require('configs.treesitter')
require('configs.lsp')
require('configs.cmp')
require("mason").setup({
    PATH = "prepend", -- "skip" seems to cause the spawning error
})
require("mason-lspconfig").setup()

