alias tsn='ts-node'
alias gst='git status -s'
alias grog='git log --graph --abbrev-commit --decorate --all --format=format:"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)"'
alias gac='git add -A && git commit -m'
alias gpush='git push origin $(current_branch)'
alias gpull='git pull origin $(current_branch)'
alias p='cd ~/projects'

# функция возвращает текущую ветку, в которой сейчас находимся
function current_branch() {
  ref=$(git symbolic-ref HEAD 2> /dev/null) || \
  ref=$(git rev-parse --short HEAD 2> /dev/null) || return
  echo ${ref#refs/heads/}
}

# Создать новый проект с использованием create-react-app c названием
cra(){
  npx create-react-app "$1" --typesctipt
}

# Создать папку с именем $1 и инициализировать там npm
cempty() {
  mkdir "$1"
  cd $1
  npm init -y
  touch index.ts
}

