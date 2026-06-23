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

1. Сделайте первый коммит:

```bash
git add .
git commit -m "Add static GitHub Pages site"
```

2. Отправьте код в репозиторий:

```bash
git push -u origin main
```

3. Откройте репозиторий на GitHub.
4. Перейдите в `Settings` -> `Pages`.
5. В разделе `Build and deployment` выберите:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Нажмите `Save`.

После публикации GitHub покажет ссылку на сайт в этом же разделе.
