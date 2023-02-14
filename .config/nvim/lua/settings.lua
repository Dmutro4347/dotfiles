local opt = vim.opt
local g = vim.g
-- Відображення цифр
opt.relativenumber=true
opt.number=true

-- Відступи і Таби
opt.shiftwidth=2
opt.tabstop=2
opt.softtabstop=2
--opt.smarttab=true
opt.autoindent=true

-- Мишка
opt.mouse= 'a'
opt.syntax= 'on'
-- Лінія курсору
opt.cursorline= true
opt.cursorlineopt= 'both'
completeopt='menu,menuone,noselect'

-- Кольорова тема
vim.cmd[[colorscheme catppuccin-macchiato]]

