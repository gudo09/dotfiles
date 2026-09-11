source /usr/share/cachyos-fish-config/cachyos-config.fish
zoxide init fish | source

# overwrite greeting
# potentially disabling fastfetch
#function fish_greeting
#    # smth smth
#end

# Aliases for llama.cpp
alias llama-server="$HOME/llama.cpp/build/bin/llama-server --models-preset ~/AI/Models/models.ini"

# pnpm
set -gx PNPM_HOME "/home/franco/.local/share/pnpm"
if not string match -q -- "$PNPM_HOME/bin" $PATH
  set -gx PATH "$PNPM_HOME/bin" $PATH
end
# pnpm end
