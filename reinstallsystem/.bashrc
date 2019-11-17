alias tsn='ts-node'
alias g='git'
alias gst='git status -s'
alias grog='git log --graph --abbrev-commit --decorate --all --format=format:"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)"'
alias gac='git add -A && git commit -m'

alias projects='cd ~/projects'

# Создать новый проект с использованием create-react-app c названием
cra(){
  npx create-react-app "$1" --typesctipt
  cp .gitignore $1/
}

# Создать папку с именем $1 и инициализировать там npm
cempty() {
  mkdir "$1"
  cp .gitignore $1/
  cd $1
  npm init -y
  touch index.ts
}

