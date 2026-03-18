'use client';

import Link from 'next/link';

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-subtle hover:underline mb-8 inline-block">
          ← Вернуться на главную
        </Link>
        
        <h1 className="text-3xl font-bold tracking-tighter mb-8">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
        
        <div className="prose prose-sm max-w-none space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта winconsult.ru (далее — Сайт), принадлежащего ИП Стариков Данил Романович 
              (ИНН: 745702226958).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">2. Сбор персональных данных</h2>
            <p>Мы собираем следующие данные:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и контактные данные, предоставленные через форму обратной связи</li>
              <li>Название компании и должность</li>
              <li>Информация о посещении сайта (cookies, IP-адрес, данные браузера)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">3. Цели обработки данных</h2>
            <p>Персональные данные используются для:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Связи с пользователем по оставленной заявке</li>
              <li>Улучшения качества сервиса</li>
              <li>Аналитики посещаемости сайта</li>
              <li>Отправки информационных материалов (с согласия пользователя)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">4. Использование cookies</h2>
            <p>
              Сайт использует файлы cookies для улучшения пользовательского опыта и сбора аналитических данных. 
              Мы используем Яндекс.Метрику для анализа посещаемости сайта.
            </p>
            <p>
              Вы можете отключить cookies в настройках браузера, однако это может повлиять на функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">5. Защита данных</h2>
            <p>
              Мы принимаем необходимые организационные и технические меры для защиты персональных данных 
              от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">6. Передача данных третьим лицам</h2>
            <p>
              Мы не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных 
              законодательством РФ, или с согласия пользователя.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">7. Права пользователя</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Запросить информацию о хранящихся персональных данных</li>
              <li>Потребовать исправления или удаления данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">8. Контакты</h2>
            <p>По вопросам обработки персональных данных обращайтесь:</p>
            <p>Email: <a href="mailto:daysdanil05@gmail.com" className="underline">daysdanil05@gmail.com</a></p>
            <p>Телефон: <a href="tel:+79823233591" className="underline">+7 (982) 323-35-91</a></p>
            <p>Адрес: Екатеринбург, Шейнкмана 55, БЦ Аврора</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">9. Изменения политики</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику. 
              Актуальная версия всегда доступна на данной странице.
            </p>
            <p className="text-subtle mt-4">Дата последнего обновления: март 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
