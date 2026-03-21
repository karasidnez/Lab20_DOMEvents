# Лабораторная работа №20: Работа с DOM и событиями в JavaScript

## Основная информация

**ФИО:** Тимонин Иван Витальевич  
**Группа:** ИСП-233  
**Дата:** 21.03.2026

---

## Краткое описание работы

В ходе лабораторной работы были изучены:

- Структура **DOM** (Document Object Model) и способы взаимодействия с ней из JavaScript.
- Поиск элементов страницы с помощью `getElementById`, `querySelector` и других методов.
- Изменение содержимого и стилей элементов.
- Обработка событий (клик, отправка формы, ввод данных) с использованием `addEventListener`.
- Создание и удаление динамических элементов.
- Валидация данных формы на стороне клиента.
- Разработка интерактивных компонентов: TODO‑лист (начальная реализация), форма обратной связи, динамический список пользователей.

---

## Структура проекта
Lab20_DOM_Events
- index.html
- style.css
- main.js
- dynamicElements.html
- dynamicElements.js
- img/
- README.md


---

## Сравнение с C# (WinForms/WPF)

### DOM в JavaScript ≈ Controls в C# WinForms

| Концепция                | C# (WinForms)                                | JavaScript (DOM)                                     |
|--------------------------|----------------------------------------------|------------------------------------------------------|
| **Найти элемент**        | `Button myButton = this.Controls["myButton"]` | `const myButton = document.getElementById("myButton")` |
| **Изменить текст**       | `label1.Text = "Новый текст"`                | `label.textContent = "Новый текст"`                  |
| **Добавить обработчик**  | `button1.Click += HandleClick`               | `button.addEventListener("click", handleClick)`       |
| **Создать элемент**      | `Button btn = new Button()`                  | `const btn = document.createElement("button")`        |
| **Добавить в контейнер** | `panel1.Controls.Add(btn)`                   | `panel.appendChild(btn)`                              |
| **Скрыть элемент**       | `button1.Visible = false`                    | `button.style.display = "none"`                       |

---

### Events в JS ≈ События в C#

**C# (WinForms):**
```csharp
button1.Click += (sender, e) =>
{
    label1.Text = "Нажато!";
};
```

### Валидация формы
**C# (WinForms):**
```csharp
if (string.IsNullOrWhiteSpace(textBoxName.Text))
{
    MessageBox.Show("Имя не может быть пустым");
    return;
}
if (!int.TryParse(textBoxAge.Text, out int age) || age < 0 || age > 120)
{
    MessageBox.Show("Некорректный возраст");
    return;
}
```

**JavaScript (DOM):**
```csharp
const name = usernameInput.value.trim();
if (name === "") {
    result.textContent = "Имя не может быть пустым";
    usernameInput.focus();
    return;
}
const age = parseInt(ageInput.value);
if (isNaN(age) || age < 0 || age > 120) {
    result.textContent = "Введите корректный возраст (0–120)";
    ageInput.focus();
    return;
}
```
## Главные отличия

| Аспект | C# WinForms | JavaScript DOM |
|--------|-------------|----------------|
| Компиляция | Да (в IL-код, затем JIT) | Нет (интерпретация браузером) |
| Типизация | Строгая (статическая) | Динамическая (слабая) |
| Ошибки | На этапе компиляции | На этапе выполнения (в консоли) |
| UI-дизайнер | Есть (визуальный конструктор) | Нет (только код + CSS) |
| Платформа | Windows | Любая (браузер) |

# Преимущества DOM перед WinForms

- Кроссплатформенность – работает в любом браузере на любой ОС.
- Не требует установки – достаточно открыть HTML-файл.
- Легкое обновление – изменил файлы на сервере → пользователь видит новую версию.
- Современный UI – CSS-анимации, адаптивная вёрстка, гибкая кастомизация.

# Преимущества WinForms перед DOM

- Визуальный дизайнер – перетаскивание элементов, быстрая разработка.
- Ошибки на этапе компиляции – многие проблемы выявляются до запуска.
- Интеграция с Windows API – доступ к системным функциям.
- Более понятная структура – привычный объектно‑ориентированный подход.

# Вывод

DOM и WinForms решают схожие задачи, но разными подходами
