# DemoLanding

Простой статический сайт для GitHub Pages без фреймворков и сборки.

## Файлы

- `index.html` - разметка страницы.
- `styles.css` - адаптивные стили.
- `script.js` - базовая интерактивность для вывода стоимости.

## Локальный запуск

Откройте `index.html` в браузере.

Также можно запустить простой локальный сервер:

```bash
python3 -m http.server 8000
```

После этого сайт будет доступен по адресу `http://localhost:8000`.

## Публикация на GitHub Pages

Сайт подготовлен для публикации из ветки `main`.

1. Откройте репозиторий на GitHub.
2. Перейдите в `Settings` -> `Pages`.
3. В разделе `Build and deployment` выберите:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Нажмите `Save`.

После публикации сайт будет доступен по адресу:

```text
https://katoshing.github.io/DemoLanding/
```

## Обновление сайта

После изменений сделайте коммит:

```bash
git add .
git commit -m "Update site"
```

Отправьте изменения в `main`:

```bash
git push
```
