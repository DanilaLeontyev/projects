# Windows
## Scoop
В power-shell от имени администратора выполнить следующие команды

``` 
  set-executionpolicy remotesigned -scope currentuser
```

```
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```

1. Установка всех пакетов
   
  Сначала нужно добавить репозитории
  ```
  scoop bucket add extras
  scoop bucket add games
  ```

  Потом установить все пакеты разом

  ```
  scoop install 7zip chromium concfg dark dwarf-fortress-lnp firefox git googlechrome lessmsi nvm python vscode make
  ```

  Зайти в папку C/users/user_name/scoop/apps/git/current/git-bash.exe 
  И закрепить иконку в трее

2. Проверка
  Чтобы проверить статус scoop и всех приложений
  ```
  scoop status
  ```

## Тема для powershell
 ```
 concfg import monokai
 ```

 ## Установить typescript compiler
  
```
  npm install -g ts-node
  npm i -g typescript
```




