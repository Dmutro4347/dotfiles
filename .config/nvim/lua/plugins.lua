vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function()
	use 'wbthomason/packer.nvim'
	use 'ryanoasis/vim-devicons'
	use 'kyazdani42/nvim-web-devicons'
	use {
  	'nvim-tree/nvim-tree.lua',
  	tag = 'nightly'
	}
	use 'romgrk/barbar.nvim'
	use 'nvim-lualine/lualine.nvim'
	use 'goolord/alpha-nvim'
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
			'L3MON4D3/LuaSnip',
      'saadparwaiz1/cmp_luasnip'
		}
	}
  use {
  'nvim-telescope/telescope.nvim', tag = '0.1.1',
-- or                            , branch = '0.1.x',
  requires = { {'nvim-lua/plenary.nvim'} }
}
  use 'mg979/vim-visual-multi'
  use 'morhetz/gruvbox'
  use 'mhartington/oceanic-next'
  use 'kaicataldo/material.vim'
  use 'ayu-theme/ayu-vim'
  use {"akinsho/toggleterm.nvim", tag = '*', config = function()
  require("toggleterm").setup() end}
  use 'NvChad/nvim-colorizer.lua'
end)
