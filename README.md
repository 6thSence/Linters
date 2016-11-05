# Линтены для твоего проекта

Следить за стилем кода очень важно, вне зависимости, что вы пишите: разметку, стили или скрипты.
В помощь разработчикам созданы различные утилиты, которые анализируют код на наличие плохих или хороших практик – Линтеры.

## Видеоинструкция к репозиторию на моем канале: 
[URL WIP]

## HTML

Для проверки стиля кода и семантики html можно воспользоваться официальным валидатором W3C онлайн: https://validator.w3.org/

## CSS
 
 Для проверки ваших стилей существует потрясающий линтер [StyleLint](http://stylelint.io/), которому можно задать свои конфигурации. 
 
## JS
 
 Для проверки стиля кода скриптов, а так же отсутсвие нарушений лучших практик(таких как пропущенные ";") существует [ESLint](http://eslint.org/).
 
## Подключить StyleLint и ESLint можно к проекту:

1. Используя CLI(Command Line Interface, она же консоль), через npm-scripts.
    
    Команды в этом проекте:
    - StyleLint – `npm run stylelint`
    - ESLint – `npm run eslint`

2. Используя дополнительные плагины, через сборщики проекта(Например: Gulp, Webpack, Grunt) – последний в этом проекте не рассматривается.
    
    Команды в этом проекте:
    - StyleLint – `gulp stylelint` или `webpack`
    - ESLint – `gulp eslint` или `webpack`

### Вывод сообщения об ошибке: 
1. По умолчанию всегда в консоли
![CLI-screen](https://github.com/6thSence/Linters/raw/master/screens/CLI-screen.png)

2. При подключении сторонних плагинов, можно выводить в браузер или дополнительным окном
![Gulp-eslint](https://github.com/6thSence/Linters/raw/master/screens/gulp-eslint.png)
![Gupl-stylelint](https://github.com/6thSence/Linters/raw/master/screens/gulp-stylelint.png)

## Линти!
 
![wow](https://github.com/6thSence/assets-for-any-occasion/raw/master/200 (14).gif)

## Как работать с этим проектом? 

```
git clone https://github.com/6thSence/Linters.git
cd Linters
npm i 
```

Осталось вызвать линтер – все возможные команды указаны выше.


  



