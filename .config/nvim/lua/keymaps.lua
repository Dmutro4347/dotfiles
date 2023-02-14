local map = vim.api.nvim_set_keymap 

--[[
Метод для встановлення гарячих клавіш (normal)
key - {string} Строка з гарячею клавішою
command - {string} Команда
]]--
function nm(key, command) 
	map('n', key, command, {noremap = true})
end

--[[
Метод для встановлення гарячих клавіш (input)
key - {string} Строка з гарячею клавішою
command - {string} Команда
]]--
function im(key, command) 
	map('i', key, command, {noremap = true})
end

--[[
Метод для встановлення гарячих клавіш (visual)
key - {string} Строка з гарячею клавішою
command - {string} Команда
]]--
function vm(key, command) 
	map('v', key, command, {noremap = true})
end

--[[
Метод для встановлення гарячих клавіш (terminal)
key - {string} Строка з гарячею клавішою
command - {string} Команда
]]--
function tm(key, command) 
	map('t', key, command, {noremap = true})
end

--[[
Метод для встановлення гарячих клавіш для всіх режимів
key - {string} Строка з гарячею клавішою
command - {string} Команда
]]--
function am(key, command)
	map('n', key, command, {noremap = true})
	map('i', key, command, {noremap = true})
	map('v', key, command, {noremap = true})
	map('t', key, command, {noremap = true})
end

-- Гаярча клавіша для виходу в режим команд
am('<C-k>', '<escape><CR>')

-- Гаряча клавіша для зберігання файлу
nm('<C-s>', ':w!<CR>')

-- Гаряча клавіша для виходу з файлу
nm('<C-q>', ':q!<CR>')

-- Гаряча клавіша для Бару файлів
nm('<C-b>', ':NvimTreeToggle<CR>')

-- Нова вклада nvim
nm('<C-n>', ':tabnew<CR>')
am('<C-t>', ':ToggleTerm size=10 direction=horizontal<CR>')
