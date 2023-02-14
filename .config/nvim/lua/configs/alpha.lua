-- https://github.com/shvedes/dotfiles

local alpha = require("alpha")
local dashboard = require("alpha.themes.dashboard")

-- Set header
dashboard.section.header.val = {
' ▄▄    ▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄ ▄▄   ▄▄    ▄▄▄ ▄▄▄▄▄▄  ▄▄▄▄▄▄▄ ',
'█  █  █ █       █       █  █ █  █   █  █▄█  █  █   █      ██       █',
'█   █▄█ █    ▄▄▄█   ▄   █  █▄█  █   █       █  █   █  ▄    █    ▄▄▄█',
'█       █   █▄▄▄█  █ █  █       █   █       █  █   █ █ █   █   █▄▄▄ ',
'█  ▄    █    ▄▄▄█  █▄█  █       █   █       █  █   █ █▄█   █    ▄▄▄█',
'█ █ █   █   █▄▄▄█       ██     ██   █ ██▄██ █  █   █       █   █▄▄▄ ',
'█▄█  █▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█ █▄▄▄█ █▄▄▄█▄█   █▄█  █▄▄▄█▄▄▄▄▄▄██▄▄▄▄▄▄▄█',

}
dashboard.section.buttons.val = {
    dashboard.button( "o", "  > Open file manager", ":NvimTreeToggle<CR>" ),
    dashboard.button( "e", "  > New file" , ":ene <BAR> startinsert <CR>"),
    dashboard.button( "f", "  > Find file", ":cd $HOME/ | Telescope find_files<CR>"),
    dashboard.button( "r", "  > Recent"   , ":Telescope oldfiles<CR>"),
    dashboard.button( "q", "  > Quit NVIM", ":qa<CR>"),
}

-- Send config to alpha
alpha.setup(dashboard.opts)

-- Disable folding on alpha buffer
vim.cmd([[
    autocmd FileType alpha setlocal nofoldenable
]])
