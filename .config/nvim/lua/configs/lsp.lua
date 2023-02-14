local lsp_flags = {
  -- This is the default in Nvim 0.7+
  debounce_text_changes = 150,
}

require('lspconfig')['pyright'].setup{
		on_attach = on_attach,
    flags = lsp_flags,
}

require('lspconfig')['sumneko_lua'].setup{
		on_attach = on_attach,
    flags = lsp_flags,
}

require('lspconfig')['clangd'].setup{
	on_attach = on_attach,
	flags = lsp_flags,
}

