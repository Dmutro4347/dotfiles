local map = vim.api.nvim_set_keymap 

map('n', '<C-s>', ':w!<CR>', {noremap=true}) --save file
map('n', '<C-q>', ':q!<CR>', {noremap=true}) --quit file
map('n', '<C-b>', ':NvimTreeToggle<CR>', {noremap=true}) --quit file
map('n', ',<space>', ':nohlsearch<CR>', {noremap=true})
map('v', ',<space>', ':nohlsearch<CR>', {noremap=true})
map('t', ',<space>', ':nohlsearch<CR>', {noremap=true})
