React Component Library – Storybook Assessment
Це реалізація тестового завдання для позиції Front-end JS Engineer. Бібліотека містить три основні UI-компоненти: Input, SdebarMenu, Toast.

Швидкий старт
Встановлення залежностей
Bash
npm install

або

yarn install

Запуск Storybook
Bash
npm run storybook
Після запуску Storybook буде доступний за адресою http://localhost:6006.

Запуск Next.js (Demo App)

Bash
npm run dev

Огляд компонентів

1. Input Component
   Універсальне поле вводу, що підтримує різні типи даних та стани.
   Типи: text, password, number, email.

Особливості:

- Перемикач видимості пароля (eye icon).
- Опція clearable (кнопка "X" з'являється при наявності тексту).
- Валідація та стан помилки (error).
- Підтримка disabled та label.

2. Toast Notification
   Система сповіщень для зворотного зв'язку з користувачем.

Типи: Success, Error, Warning, Info (кожен зі своєю іконкою та колірною схемою).

Особливості:

- Автоматичне закриття (auto-dismiss) через заданий duration.
- Анімована поява та зникнення.
- Контейнер для групування декількох тостів одночасно.

3. Sidebar Menu
   Навігаційне меню з підтримкою необмеженої вкладеності.

Особливості:

- Рекурсивний рендер: Компонент самостійно обробляє будь-який рівень вкладеності підменю.
- Слайд-анімація при відкритті з правого боку.
- Закриття при кліку на Backdrop.
- Анімовані шеврони для розгортання пунктів меню.


Технологічний стек

React (Functional Components, Hooks)
TypeScript (Сувора типізація пропсів та стейту)
Storybook 8 (Документація та тестування компонентів)
CSS Modules (Ізоляція стилів)
Next.js (Базова інфраструктура)

Скріншоти станів

Input

**Текстове поле:**
<img width="1916" height="966" alt="Снимок экрана 2026-02-18 134238" src="https://github.com/user-attachments/assets/175cd9b4-b0ce-4d24-acb2-aedf35719a4a" />


**Парольне поле з toggle visibility:**
<img width="1919" height="962" alt="input_password" src="https://github.com/user-attachments/assets/9c149263-eb5c-4382-92c5-9c8f3b1edd3d" />


**Парольне поле з кнопкою Clear:**
<img width="1913" height="958" alt="input_password_clear" src="https://github.com/user-attachments/assets/810c936d-f601-422b-a397-a4363f660aca" />


**Числове поле:**
<img width="1918" height="965" alt="input number" src="https://github.com/user-attachments/assets/975de87b-6c94-4559-ba5b-cc2e8735762d" />


---


Toast

**Успішна операція:**
<img width="1919" height="963" alt="toast_success" src="https://github.com/user-attachments/assets/559e3318-5877-4487-84aa-f9cd0c7ccf9a" />


**Помилка:**
<img width="1913" height="963" alt="toast_error" src="https://github.com/user-attachments/assets/815687b1-bc87-4183-8664-05bf4f155346" />


**Попередження:**
<img width="1914" height="965" alt="toast_warning" src="https://github.com/user-attachments/assets/4d0a1c9c-aedc-40e7-a313-3fcf5fab3e7e" />


**Інформаційне повідомлення:**
<img width="1912" height="963" alt="toast_info" src="https://github.com/user-attachments/assets/63764969-c95f-4654-9f96-cac8f0384164" />


---



Sidebar Menu

**Плоске меню (Flat Menu):**
<img width="1919" height="959" alt="sidebar_flat" src="https://github.com/user-attachments/assets/96c58efb-3f28-4c44-b62f-f27519c6368c" />


**Вкладене меню (Nested Menu):**
<img width="1907" height="961" alt="sidebar_nestad" src="https://github.com/user-attachments/assets/c0220f90-910a-4d8f-8138-9e9c0a5fe29f" />

