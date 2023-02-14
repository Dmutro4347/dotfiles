-- Добавляєм Packer як пакет в Neovim
vim.cmd [[packadd packer.nvim]]

-- Список для плагінів
return require('packer').startup(function()
	use 'wbthomason/packer.nvim' -- менеджер плагінів
	use 'ryanoasis/vim-devicons' -- іконки
	use 'kyazdani42/nvim-web-devicons' -- іконки
	use {
  'nvim-tree/nvim-tree.lua', -- дерево файлів
  tag = 'nightly' -- Оновлення кожен Тиждень
}
	use 'NvChad/nvim-colorizer.lua'
	use 'romgrk/barbar.nvim' -- бар з відкритим файлами
	use {
  'nvim-lualine/lualine.nvim', -- панель для nvim
}
	use 'goolord/alpha-nvim' -- виставковий екран nvim

	use {
  'nvim-telescope/telescope.nvim', -- fzf пошук
  requires = { {'nvim-lua/plenary.nvim'} }
}
		use 'onsails/lspkind.nvim'
		use 'jose-elias-alvarez/null-ls.nvim'
		use 'williamboman/mason.nvim'
		use 'williamboman/mason-lspconfig.nvim'
	use {
		'hrsh7th/nvim-cmp',
		requires = {
			'neovim/nvim-lspconfig',
			'hrsh7th/cmp-nvim-lsp',
			'hrsh7th/cmp-buffer',
			'hrsh7th/cmp-path',
			'hrsh7th/cmp-cmdline',
			'hrsh7th/nvim-cmp',
			'L3MON4D3/LuaSnip'
		}
	}
	use 'nvim-treesitter/nvim-treesitter' -- хайлайтер для nvim
	use {"akinsho/toggleterm.nvim", tag = '*', config = function() -- термінал
  require("toggleterm").setup() end}
	use 'catppuccin/nvim'
	use 'onsails/lspkind-nvim'
end)

